use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    // "!" Macro: "[...] macros are a way of writing code that writes other code, which is known as metaprogramming. [...]" - more after.
    println!("Guess the number!");

    // "::" in this case acts like a path separator.
    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop {
        println!("Please input your guess:");

        //By default, variables, on Rust, are immutable. In order to be able to change it's value you need to write down the keyword "mut".
        let mut guess = String::new();

        //References are, also, immutable. In this case, the readline expects a string to append the value and returns an enum - the enum can be "Ok", if the operation was successful, or "Err", if the operation failed.
        //The "Expect" will handle the error with a custom message.
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        //Rust allows to shadow the previous value of guess with a new one - Shadowing lets us reuse the guess variable name. "[...]know that this feature is often used when you want to convert a value from one type to another type[...]"
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Invalid input!");
                continue;
            }
        };

        println!("You guessed: {guess}");

        //"[...]The Ordering type is another enum and has the variants Less, Greater, and Equal. These are the three outcomes that are possible when you compare two values."
        //The match expression is pretty much self explanatory but... "A match expression is made up of arms. An arm consists of a pattern to match against, and the code that should be run if the value given to match fits that arm’s pattern[...]"
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}

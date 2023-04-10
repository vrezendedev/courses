fn main() {
    //By default, variables are immutable. "When a variable is immutable, once a value is bound to a name, you can’t change that value."
    let x = 5;
    //x = 6; Exception: "cannot mutate immutable variable 'x'".
    println!("Imut: {x}");

    // Mut allows mutability and "[...] indicating that other parts of the code will be changing this variable’s value."
    let mut y = 1;
    println!("Before: {y}");
    y = 5;
    println!("After: {y}");

    //Constants are always immutable...  "[...]is that constants may be set only to a constant expression, not the result of a value that could only be computed at runtime."
    const THREE_HOURS_IN_SECONDS: i32 = 60 * 60 * 3;
    println!("Const: {THREE_HOURS_IN_SECONDS}");

    //Shadowing: "[...]the second variable overshadows the first, taking any uses of the variable name to itself until either it itself is shadowed or the scope ends."
    let z = 5;

    let z = z + 1;

    {
        let z = z * 2;
        println!("The value of z in the inner scope is: {z}");
    }

    println!("The value of z is: {z}");

    //Scalar types represent a single value
    let i: i32 = 1;
    let f: f32 = 1.12;
    let ope = 10 + 10;
    let bln: bool = false;
    //"Rust’s char type is four bytes in size and represents a Unicode Scalar Value, which means it can represent a lot more than just ASCII."
    let heart_eyed_cat = '😻';
    println!("{i} - {f} - {ope} - {bln} - {heart_eyed_cat}");

    //Compound Types
    let tuple: (i32, f64, u8, &str) = (500, 6.4, 1, "Yep");
    //"To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value[...]"
    let (x, y, z, g) = tuple;
    println!("{x} - {y} - {z} - {g}");

    //[type, length]
    let a = [1, 2, 3, 4, 5]; //Same type and fixed length.
    let b = a[0];
    println!("{b}");

    //Documentation examples about functions:
    another_function();
    print_labeled_measurement(5, 'h');
    let five_number = five();
    println!("{five_number}");

    //Expressions
    let y = {
        let x = 3;
        //"[...]If you add a semicolon to the end of an expression, you turn it into a statement, and it will then not return a value. [...]"
        x + 1
    };
    println!("{y}");

    //If Statements
    let number = 3;

    if number < 5 {
        println!("Condition was true.");
    } else {
        println!("Condition was false.");
    }

    let condition = true;
    let number = if condition { 5 } else { 6 };
    println!("{number}");

    //Loops with doc's examples
    let mut counter = 0;
    let result = loop {
        counter += 1;
        print!("Iteration:{counter} ");
        if counter == 10 {
            println!();
            break counter * 2;
        }
    };
    println!("{result}");

    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    //.rev() to reverse the range!
    for num in (1..5).rev() {
        println!("{num}!");
    }

    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("The value is: {element}");
    }
}

fn another_function() {
    println!("Another function.");
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}");
}

fn five() -> i32 {
    5
}

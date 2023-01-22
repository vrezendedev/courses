class Warrior {
    public health: number = 100;
    protected mana: number = 10;

    constructor(health: number) {
        this.health = health;
    }

    public scream(): void {
        console.log('UGA BUGA!');
    }

    protected hit(): void {
        console.log('Take that!');
    }

    protected showMana(): void {
        console.log(this.mana);
    }
}

class Templar extends Warrior {
    public healPower: number;

    constructor(health, healPower: number) {
        super(health);
        this.healPower = healPower;
    }

    public healAndScream() {
        this.heal();
        console.log('SCREAMING!!');
    }

    public hitAndScream() {
        this.hit();
        this.mana--;
        this.showMana();
    }

    private heal(): void {
        console.log('HEALED!');
    }
}

const warrior = new Warrior(200);
warrior.scream();

const templar = new Templar(400, 100);
templar.healAndScream();
templar.hitAndScream();
console.log(templar.health);

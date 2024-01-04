class Creature{
    static number = 0;
    #id;    
    get ID(){return this.#id;}
    name;
    healthPoints;
    damage;
    constructor(name,healthPoints,damage){
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage = damage;
        this.#id = ++Creature.number;
    }
    defeat(){alert(`${this.name} умер!!`);}
}
class Player extends Creature{
    #lvl = 1;
    get LVL(){return this.#lvl;}
    constructor(name,healthPoints,damage){
        super(name,healthPoints,damage)
    }
    attack(other){
        if((other.healthPoints -= this.damage)<=0){
            other.defeat();
            ++this.#lvl;
            return true;
        }
        else return false;
    }
}
class Enemy extends Creature{
    constructor(name,healthPoints,damage){
        super(name,healthPoints,damage)
    }
    attack(other){
        if((other.healthPoints -= this.damage)<=0){
            other.defeat();
            return true;
        }
        else return false;
    }
}
let player = new Player('Horec',100,16);
let monstr = new Enemy('Dracula',150,10);
while(!player.attack(monstr) && !monstr.attack(player)){}
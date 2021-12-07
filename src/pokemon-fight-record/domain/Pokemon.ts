export default class Pokemon {

    private _attack: string;
    private _defense: string;
    private _health: string;
    private _name: string;
    private _type: string;

    constructor(attack: string, defense: string, health: string, name: string, type: string) {
        this._attack = attack;
        this._defense = defense;
        this._health = health;
        this._name = name;
        this._type = type;
    }

    public get attack(): string {
        return this._attack;
    }

    public set attack(attack: string) {
        this._attack = attack;
    }

    public get defense(): string {
        return this._defense;
    }

    public set defense(defense: string
    ) {
        this._defense = defense;
    }

    public get health(): string {
        return this._health;
    }

    public set health(health: string
    ) {
        this._health = health;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string
    ) {
        this._name = name;
    }

    public get type(): string {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

}
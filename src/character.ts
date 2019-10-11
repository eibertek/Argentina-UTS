export default class Character {
    private name:String;
    private lastname:String;
    private age:String;
    private degree:String;
    private party:String;
    private stats:{
        honesty: number,
        loyalty: number,
        culture: number,
        intelligence: number,
        publicRelations: number,
    }
    private chargeId: string | null = null;

    constructor({ name, lastname, age, degree, party, stats }){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.degree = degree;
        this.party = party;
        this.stats = stats;
    }

    public asignTo = (chargeId) => {
        this.chargeId = chargeId;
    }

}
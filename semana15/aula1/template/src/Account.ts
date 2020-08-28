export class Account {
 
    private name: string
    private cpf: string
    private age: number

    constructor( 
        name: string, 
        cpf: string,
        age: number)
        {
        //this.id = Date.now().toString() + Math.random().toString()
        this.name = name
        this.cpf = cpf
        this.age =age
        }

    
    public getName(): string{
        return this.name
    }
    public getCpf():string{
        return this.cpf
    }
    public getAge(): number{
        return this.age
    }

    //  Setters
    //public like():void{
       // this.likes ++
    //}
}

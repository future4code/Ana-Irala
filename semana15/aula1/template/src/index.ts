import { JSONFileManager } from './JSONFileManager';
import * as fs from 'fs';


class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

class Account {
 
    private name: string;
    private cpf: string;
    private age: number;
    //private balance: number = 0;
    //private transactions: Transaction[];

    constructor( 
        name: string, 
        cpf: string,
        age: number)
        {
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
    public getBalance(): any {
       
        }
    
    public addBalance(value: number): void { 
          console.log('Saldo atualizado com sucesso')
        }

}

class createAccount {

}


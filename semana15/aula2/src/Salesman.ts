import {Employee} from "./Employee";


export class Seller extends Employee {
	private salesQuantity: number = 0

	public getSalesQuantity(): number {
		return this.salesQuantity
	}

  public setSalesQuantity(quantity: number): void{
    this.salesQuantity = quantity;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + 400 + this.salesQuantity*5;
  }
}
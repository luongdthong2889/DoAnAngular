import { Product } from './../product/product.model';
export class User{
    name:string;
    phone:number;
    address:string;
    city:string;
    payment:string;
    constructor( name:string,phone:number,address:string, city:string,payment:string){
        this.name=name;
        this.phone=phone;
        this.address=address;
        this.city=city;
        this.payment=payment;
    }
}
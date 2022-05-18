export class Product{
    public id:number;
    public name:string;
    public price:number;
    public size!:string;
    public imagePath:string;
    public description:string;
    public types!:string;
    public information:string;
    public cateid:number;
    constructor(id:number,name:string,price:number,imagePath:string,description:string,information:string,cateid:number)
    {
        this.id=id;
        this.name=name;
        this.price=price;
        this.imagePath=imagePath;
        this.description=description;
        this.information=information;
        this.cateid = cateid;
    }
}
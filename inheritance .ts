class Car{
    Color : string;
    constructor(color:string)
    {
        this.Color = color;
    }
}

class Audi extends Car{
    Price : number;
    constructor(color:string,price:number)
    {
        super(color) ;
        this.Price = price;
    }

    display(): void
    {
        console.log("Color of Audi :"+ this.Color);
        console.log("Price of Audi :"+ this.Price);
    }
}

let obj  = new Audi("orange" ,500000);
obj.display();
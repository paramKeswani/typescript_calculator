interface shape<T>
{
    length:T;
    width:T;
    getArea():T;
    getPerimeter():T;

}

class Circle implements shape<number>
{
    length:number;
    width:number;
    constructor(width:number , length:number)
    {
        this.length = length;
        this.width = width;

    }

    getArea(): number {
   return Math.PI *this.length * this.width;       
    }
    getPerimeter(): number {
        return 2* Math.PI * this.width;       
         }


}

class rectangle implements shape<number>
{
    length:number;
    width:number;
    constructor(width:number , length:number)
    {
        this.length = length;
        this.width = width;

    }

    getArea(): number {
   return this.length * this.width;       
    }
    getPerimeter(): number {
        return 2*(this.length + this.width);       
         }


}

class square implements shape<number>
{
    length:number;
    width:number;
    constructor(width:number , length:number)
    {
        this.length = length;
        this.width = width;

    }

    getArea(): number {
   return this.length * this.width;       
    }
    getPerimeter(): number {
        return 2*(this.length + this.width);       
         }


}

let cir = new Circle(10,10);
console.log("Circle");
console.log(cir.getArea());
console.log(cir.getPerimeter());
console.log("rectangle");
let rect = new rectangle(10,10);
console.log(rect.getArea());
console.log(rect.getPerimeter());
console.log("square");
let sq = new square(10,10);
console.log(sq.getArea());
console.log(sq.getPerimeter());

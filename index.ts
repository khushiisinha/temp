enum VehicleTyre{
    TWO_TYRE,
    THREE_TYRE,
    FOUR_TYRE
}
class Vehicle {
    ownerName:string|undefined;
    vehicleTyre:VehicleTyre|undefined;
    isMoving:boolean=false;
    constructor(ownerName:string , vehicleTyre:VehicleTyre){
        this.ownerName = ownerName;
        this.vehicleTyre=vehicleTyre;
    }
    move(){
        this.isMoving=true;
    }
    stop(){
        this.isMoving=false;
    }
}

class Person{
    name:string="";
    age:number=0;
    constructor(name:string ,age:number){
        this.name = name ; 
        this.age = age ;
    }
}

class Car extends Vehicle{
    constructor(ownerName:string){
        super(ownerName,VehicleTyre.FOUR_TYRE);
    }
}

const enableBrakes = <T extends Vehicle> ()


//template literal
// var a= 10;
// var b= 20;
// var c= a+b;
// console.log(`The sum of a and b =>
// a= ${a} b= ${b} Resultant sum is c= ${c}`)

//this keyword
// console.log(this); //display global object
// console.log(this.location); //display global object location alone

// const car1={
//    Brand:"Hyundai",
//    Model:"i20",
//    Color:"Black",
//    Year:"2023",
//    drive: function()//method because it is inside the object
//    {
//     console.log(`Drive the car carefully:${this.Brand}`);//"this" will take the object from car1
//    }

// }
// const car2={
//     Brand:"Volvo",
//     Model:"X90",
//     Color:"White",
//     Year:"2022",
//  brake: function()
//  {
//     console.log(`Apply brakes in speed brakers: ${this.Model}`);//"this" will take the object from car2
//  }
//  }
// car1.drive();//call using object name.method name
// car2.brake();
// console.log(car1);

//class
class Car{
    drive(){      //class using method

     console.log("Drive the car carefully");
    }
    brake(){
      console.log("Apply brake in speed breakers");
    }
}
let car= new Car() //creating new object using class =>Car
car.drive();
car.brake();

//reuse the class number of times
let car1= new Car() //creating new object using class =>Car
car1.drive();
car1.brake();

let car2= new Car() //creating new object using class =>Car
car2.drive();
car2.brake();

let car3= new Car() //creating new object using class =>Car
car3.drive();
car3.brake();

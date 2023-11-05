
let User = {
    name: "",
    age: 20,
    
    
    information: function() {
      console.log("Имя: " + this.name + ", Возраст: " + this.age);
    }
  };
  
  
  User.имя = "Иван";
  User.возраст = 30;
  
  
  User.information();
  

  let car = {
        carMine: "BMW",


  myCar: function() {
    console.log( "моя машина: " + this.carMine);

  }

  };

  car.myCar();



  var Круг = {
    радиус: 0,
  
    // Метод для вычисления площади круга
    площадь: function() {
      return Math.PI * this.радиус * this.радиус;
    }
  };
  
  // Установка значения радиуса
  Круг.радиус = 5;
  
  // Вызов метода для вычисления площади круга
  var площадьКруга = Круг.площадь();
  console.log("Площадь круга: " + площадьКруга);
  //?  ничего нне понял\0/
//! калькулятор

  let calculator = {
    num1: 0,
    num2: 0,
  
    
    сложить: function() {
      return this.num1 + this.num2;
    },
  
    
    умножить: function() {
      return this.num1 * this.num2;
    }
  };
  
  
  calculator.num1 = 10;
  calculator.num2 = 5;
  
 
  let summ = calculator.сложить();
  let result = calculator.умножить();
  
  console.log("Сумма: " + summ);
  console.log("Произведение: " +result);


  let products = {
    namme: "",
    cost: 0,
    
    prod: function() {
        console.log("продукт " +this.namme + " стоит " + this.cost + " сомов");
    }
    
  };
  products.namme = "яблоко";
  products.cost = "200";


  products.prod();


  let animal = {
    imya:"",
    zvuk: "",

    anim: function() {
        console.log("животное " + this.imya + " издает звук " + this.zvuk + " slishish");
    }
  };
  animal.imya = "sobaka";
  animal.zvuk = "gavBliat";

  animal.anim()

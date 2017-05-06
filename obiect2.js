function Human (firstname, lastname, age, gender, city, info){

this.firstname = firstname;
this.lastname = lastname;
this. age = age;
this.gender = gender;
this.city = city;
this.info = function (){
  console.log(`Eu sunt ${firstname} si am ${age}`)
  }
}

var p1 = new Human("jjjjj", "gggggg" , "12");

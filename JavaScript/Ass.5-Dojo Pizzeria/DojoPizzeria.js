function pizzaoven(crustType,sausetype,cheeses,toppings){
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sausetype = sausetype;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizza1=pizzaoven("deep dish","traditional","mozzarella","pepperoni");
console.log(pizza1);

var pizza2=pizzaoven("hand tossed","marinara",["mozzarella","feta"],["mashrooms","olives","onions"]);
console.log(pizza2);


var pizza3=pizzaoven("stuffed crust","pesto",["cheddar","parmesan"],["mashrooms","olives","onions"]);
console.log(pizza3);

var pizza4=pizzaoven("thin crust","white garlic sause",["mozzarella","feta","provolone"],["chiken cutlet","sausage"]);
console.log(pizza4);




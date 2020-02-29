
$(document).ready(function()
{
/*regularpizza function start*/
  function Regularpizza(regula)
  {
    this.regularSize=regula;
    this.regularCost=[];
  }
  function Costregular(shillings)
  {
    this.regshs=shillings;
  }
  var regula=new Regularpizza("regular");
  var pesaReg=new Costregular(250);
$("#regular").click(function()
{
  regula.regularCost.push(pesaReg);
  var total=regula.regularCost[0].regshs;
  $("#displayPizza").empty();
  $("#displayPizza").append(total);

});
/*regularpizza function ends*/
/*mediumpizza function starts*/
function Mediumpizza(medium)
{
  this.mediumSize=medium;
  this.mediumCost=[];
}
function Costmedium(mediumShillings)
{
  this.medshs=mediumShillings;
}
var media=new Mediumpizza("Medium");
var pesaMed=new Costmedium(500);
$("#medium").click(function()
{
  media.mediumCost.push(pesaMed);
  var totalMed=media.mediumCost[0].medshs;
  $("#displayPizza").empty();
  $("#displayPizza").append(totalMed);
});
/*mediumpizza function ends*/
/*largepizza function starts*/
function Largepizza(large)
{
  this.largeSize=large;
  this.largeCost=[];
}
function Costlarge(largeShillings)
{
  this.largshs=largeShillings;
}
var larger=new Largepizza("Large");
var pesalag=new Costlarge(750);
$("#large").click(function()
{
  larger.largeCost.push(pesalag);
  var totallarg=larger.largeCost[0].largshs;
  $("#displayPizza").empty();
  $("#displayPizza").append(totallarg);
});
/*largepizza function ends*/
/*megapizza function starts*/
function Megapizza(mega)
{
  this.megaSize=mega;
  this.megaCost=[];
}
function Costmega(megaShillings)
{
  this.megashs=megaShillings;
}
var meg=new Megapizza("mega");
var pesameg=new Costmega(1000);
$("#mega").click(function()
{
  meg.megaCost.push(pesameg);
  var totalmega=meg.megaCost[0].megashs;
  $("#displayPizza").empty();
  $("#displayPizza").append(totalmega);
});
/*megapizza function ends*/
/*pepperoni topping function starts*/
function Pepperoni(pepperoni)
{
  this.toppingPepperoni=pepperoni;
  this.pepperoniCost=[];
}
function Costpepperoni(pepperoniShillings)
{
  this.pepperonishs=pepperoniShillings;
}
var pepp=new Pepperoni("Pepperoni");
var pesapepp=new Costpepperoni(100);
$("#Pepperoni").click(function()
{
  pepp.pepperoniCost.push(pesapepp);
  var totalpep=pepp.pepperoniCost[0].pepperonishs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalpep);
});
/*pepperoni topping function ends*/
$("#Mushrooms").click(function()
{
  alert("Mushrooms");
});
$("#Onions").click(function()
{
  alert("Onions");
});
$("#Sausage").click(function()
{
  alert("Sausage");
});
$("#Bacon").click(function()
{
  alert("Bacon");
});

$("#cheese").click(function()
{
  alert("Extra cheese");
});
$("#olives").click(function()
{
  alert("Black olives");
});
$("#peppers").click(function()
{
  alert("Green peppers");
});
$("#Pineapple").click(function()
{
  alert("Pineapple");
});
$("#Spinach").click(function()
{
  alert("Spinach");
});
/*crust crispy function starts*/
function Crispy(crispy)
{
  this.crustCrispy=crispy;
  this.crispyCost=[];
}
function Costcrispy(crispyShillings)
{
  this.crispyshs=crispyShillings;
}
var crisp=new Crispy("crispy");
var pesacrispy=new Costcrispy(120)
$("#Crispy").click(function()
{
  crisp.crispyCost.push(pesacrispy);
  var totalcrispy=crisp.crispyCost[0].crispyshs;
  $("#displayCrust").empty();
  $("#displayCrust").append(totalcrispy);
});
/*crust crispy function ends*/
/*crust stuffed function starts*/
function Stuffed(stuffed)
{
  this.crustStuffed=stuffed;
  this.stuffedCost=[];
}
function Coststuffed(stuffedShillings)
{
  this.stuffedshs=stuffedShillings;
}
var stuff=new Stuffed("Stuffed");
var pesastuffed=new Coststuffed(150)
$("#Stuffed").click(function()
{
  stuff.stuffedCost.push(pesastuffed);
  var totalStuffed=stuff.stuffedCost[0].stuffedshs;
  $("#displayCrust").empty();
  $("#displayCrust").append(totalStuffed);
});
/*crust stuffed function ends*/
/*Gluten stuffed function starts*/
function Gluten(gluten)
{
  this.crustgluten=gluten;
  this.glutenCost=[];
}
function Costgluten(glutenShillings)
{
  this.glutenshs=glutenShillings;
}
var glut=new Gluten("Stuffed");
var pesagluten=new Costgluten(200)
$("#Gluten").click(function()
{
  glut.glutenCost.push(pesagluten);
  var totalgluten=glut.glutenCost[0].glutenshs;
  $("#displayCrust").empty();
  $("#displayCrust").append(totalgluten);
});
/*Gluten stuffed function ends*/

  $("button#placeOrder").click(function()
{
  var pizzas=parseInt($("#displayPizza").html());
  var tops =parseInt($("#displayTopping").html());
  var crusts=parseInt($("#displayCrust").html());
  var add = pizzas+tops+crusts;
  $("#heading").show();
  $("#payables").show();
  $("#payables").empty();
  $("#payables").append(add);
});

});

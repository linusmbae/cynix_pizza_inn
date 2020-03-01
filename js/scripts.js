
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
/*Mushrooms topping function starts*/
function Mushrooms(mushrooms)
{
  this.toppingMushrooms=mushrooms;
  this.mushroomsCost=[];
}
function Costmushrooms(mushroomsShillings)
{
  this.mushroomsshs=mushroomsShillings;
}
var mush=new Mushrooms("Mushrooms");
var pesamushrooms=new Costmushrooms(120);
$("#Mushrooms").click(function()
{
  mush.mushroomsCost.push(pesamushrooms);
  var totalmush=mush.mushroomsCost[0].mushroomsshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalmush);
});
/*Mushrooms topping function ends*/
/*Onions topping function starts*/
function Onions(onions)
{
  this.toppingOnions=onions;
  this.onionsCost=[];
}
function Costonions(onionsShillings)
{
  this.onionsshs=onionsShillings;
}
var onion=new Onions("Onions");
var pesaonions=new Costonions(100);
$("#Onions").click(function()
{
  onion.onionsCost.push(pesaonions);
  var totalonion=onion.onionsCost[0].onionsshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalonion);
});
/*Onions topping function ends*/
/*Sausage topping function starts*/
function Sausage(sausage)
{
  this.toppingSausage=sausage;
  this.sausageCost=[];
}
function Costsausage(sausageShillings)
{
  this.sausageshs=sausageShillings;
}
var sausag=new Sausage("Sausage");
var pesasausage=new Costsausage(110);
$("#Sausage").click(function()
{
  sausag.sausageCost.push(pesasausage);
  var totalsausag=sausag.sausageCost[0].sausageshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalsausag);
});
/*Sausage topping function ends*/
/*Bacon topping function starts*/
function Bacon(bacon)
{
  this.toppingBacon=bacon;
  this.baconCost=[];
}
function Costbacon(baconShillings)
{
  this.baconshs=baconShillings;
}
var bac=new Bacon("Bacon");
var pesabacon=new Costbacon(180);
$("#Bacon").click(function()
{
  bac.baconCost.push(pesabacon);
  var totalbacon=bac.baconCost[0].baconshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalbacon);
});
/*Bacon topping function ends*/
/*cheese topping function starts*/
function Cheese(cheese)
{
  this.toppingCheese=cheese;
  this.cheeseCost=[];
}
function Costcheese(cheeseShillings)
{
  this.cheeseshs=cheeseShillings;
}
var chees=new Cheese("cheese");
var pesacheese=new Costcheese(200);
$("#cheese").click(function()
{
  chees.cheeseCost.push(pesacheese);
  var totalcheese=chees.cheeseCost[0].cheeseshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalcheese);
});
/*cheese topping function ends*/
/*olives topping function starts*/
function Olives(olives)
{
  this.toppingOlives=olives;
  this.olivesCost=[];
}
function Costolives(olivesShillings)
{
  this.olivesshs=olivesShillings;
}
var olive=new Olives("olives");
var pesaolives=new Costolives(190);
$("#olives").click(function()
{
  olive.olivesCost.push(pesaolives);
  var totalolive=olive.olivesCost[0].olivesshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalolive);
});
/*olives topping function ends*/
/*peppers topping function starts*/
function Peppers(peppers)
{
  this.toppingPeppers=peppers;
  this.peppersCost=[];
}
function Costpeppers(peppersShillings)
{
  this.peppersshs=peppersShillings;
}
var pepper=new Peppers("peppers");
var pesapeppers=new Costpeppers(150);
$("#peppers").click(function()
{
  pepper.peppersCost.push(pesapeppers);
  var totalpepper=pepper.peppersCost[0].peppersshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalpepper);
});
/*peppers topping function ends*/
/*Pineapple topping function starts*/
function Pineapple(pineapple)
{
  this.toppingPineapple=pineapple;
  this.pineappleCost=[];
}
function Costpineapple(pineappleShillings)
{
  this.pineappleshs=pineappleShillings;
}
var pine=new Pineapple("pineapple");
var pesapineapple=new Costpineapple(170);
$("#Pineapple").click(function()
{
  pine.pineappleCost.push(pesapineapple);
  var totalpine=pine.pineappleCost[0].pineappleshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalpine);
});
/*Pineapple topping function ends*/
/*Spinach topping function starts*/
function Spinach(spinach)
{
  this.toppingSpinach=spinach;
  this.spinachCost=[];
}
function Costspinach(spinachShillings)
{
  this.spinachshs=spinachShillings;
}
var spinac=new Spinach("Spinach");
var pesaspinach=new Costspinach(80);
$("#Spinach").click(function()
{
  spinac.spinachCost.push(pesaspinach);
  var totalspinac=spinac.spinachCost[0].spinachshs;
  $("#displayTopping").empty();
  $("#displayTopping").append(totalspinac);
});
/*Spinach topping function ends*/
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

/*place order function starts*/
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

  $("#pay").append("<br><br><input type='number' id='payput' class='payIput' placeholder='Quantity'>"+
                    "<br><br><button class='btn-primary' id='subm'>Submit</button>"
                  );
  $("button#subm").click(function()
{
var addPizza=parseInt($("input#payput").val());
var myTotal=addPizza*add;
$("#delivery").empty();
$("#delivery").append("<br><br><h5 id='heads'>Total Amount:</h5><br><br><br><p id='myTot'>"+myTotal+"</p><hr>"+
                      "<h4>Do You Want Your Pizza(s) delivered?</h4>"+
                      "<div class='row' id='locator'>"+
                        "<div class='col-md-4'>"+
                          "<button class='btn-primary' id='yes'>Yes</button>"+
                        "</div>"+
                          "<div class='col-md-6'>"+
                            "<button class='btn-primary' id='no'>No</button>"+
                          "</div>"+
                      "</div>"
                     );
  $("button#yes").click(function()
{
  $(".col-50").empty();
  $("#locator").append("<div class='col-50'>"+
                          "<h2>Peyment Details:</h2><br>"+
                          "<h3>Nairobi: Ksh.100</h3><br>"+
                          "<h3>50km Outside Nairobi: Ksh.200</h3><br>"+
                          "<h3>Others: Ksh.50 per Km</h3><br>"+
                          "<h2>Pay Goods Upon Delivery</h2><br>"+
                          "<h2>Billing Address</h2><br>"+
                          "<div class='contai'>"+
                          "<form action='https://gmail.us19.list-manage.com/subscribe/post?u=7bf61a73df978ad6a44e8e27f&amp;id=ea7f8f85d1' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' class='validate' target='_blank' novalidate>"+
                          "<input id='fname' type='name' name='NAME' class='form-control' placeholder='Name..'><br>"+
                          "<input id='fmail' type='email' name='EMAIL' class='form-control' placeholder='Email..'><br>"+
                          "<input id='faddress' type='address' name='ADDRESS' class='form-control' placeholder='Address'><br>"+
                          "<input id='fcity' type='city' name='CITY' class='form-control' placeholder='City'><br>"+
                          "<button class='btn-secondary' id='payDelivery' type='submit'>Continue to Checkout</button>"+
                          "</form>"+
                          "</div>"+
                      "</div>");
});
$("button#no").click(function()
{
  $(".col-50").empty();
  $("#locator").append("<div class='col-50'>"+
                          "<h2>Pay Goods Upon Delivery</h2><br>"+
                          "<button class='btn-secondary' id='pickUp'>Continue to Checkout</button>"+
                      "</div>");
});
$("#payDelivery").submit(function()
{
  var name=$("#fname").val();
  var email=$("#fmail").val();
  var address=$("#faddress").val();
  var city=$("#fcity").val();
  alert(name+"Thankyou for reaching out to us");
});
});

});
/*place order function ends*/

});

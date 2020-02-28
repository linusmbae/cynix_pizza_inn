
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
  var pesaReg=new Costregular(200);
$("#regular").click(function()
{
  regula.regularCost.push(pesaReg);
  var total=regula.regularCost[0].regshs;
  alert(total);
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
  alert(totalMed);
});
/*mediumpizza function ends*/
/*largepizza function starts*/
$("#large").click(function()
{
  alert("large");
});
/*largepizza function ends*/
$("#mega").click(function()
{
  alert("mega");
});

$("#Pepperoni").click(function()
{
  alert("Pepperoni");
});
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

$("#Crispy").click(function()
{
  alert("Crispy");
});
$("#Stuffed").click(function()
{
  alert("Stuffed");
});
$("#Gluten").click(function()
{
  alert("Gluten");
});

  $("button").click(function()
{
  alert("your submission was successful");
});

});

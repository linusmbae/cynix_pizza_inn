
$(document).ready(function()
{
/*regularpizza function start*/
  function Regularpizza(size)
  {
    this.regularSize=regula;
    this.regularCost=[];
  }
  function Cost(shillings)
  {
    this.shs=shillings;
  }
  var regula=new Regularpizza("regular");
  var pesaReg=new Cost(200);
$("#regular").click(function()
{
  regula.regularCost.push(pesaReg);
  var total=regula.regularCost[0].shs;
  alert(total);
});
/*regularpizza function ends*/
$("#medium").click(function()
{
  alert("medium");
});
$("#large").click(function()
{
  alert("large");
});
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

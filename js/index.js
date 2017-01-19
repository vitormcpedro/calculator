var operands = [0,""];
var operation = "+";
var history = [];

var operators = {
  "+": function(num1, num2) {
    return num1 + num2;
  },
  "-": function(num1, num2) {
    return num1 - num2;
  },
  "x": function(num1, num2) {
    return num1 * num2;
  },
  "/": function(num1, num2) {
    return num1 / num2;
  },
}

function numberTyped(num) {
  operands[1] += num;
  $("#mainDisplay").text(operands[1]);
}

function operationTyped(op) {
  console.log(op);
  var result = operators[operation](operands[0], Number(operands[1]));
  operands[0] = result;
  operands[1] = "";
  operation = op;
  $("#mainDisplay").text(operation);
  console.log(result);
}

$(document).ready(function() {
  $("#mainDisplay").text(0);
  $("#secondDisplay").text(0);
});

$( ".numberBtn" ).click(function() {
  numberTyped($(this).attr('id'));
});

$( ".operationBtn" ).click(function() {
  operationTyped($(this).attr('id'));
});

$( "#equals" ).click(function() {
  var result = operators[operation](operands[0], Number(operands[1]));
  operands[0] = 0;
  operands[1] = "";
  operation = "+";
  $("#mainDisplay").text(result);
  console.log(result);
});

$( "#resetBtn" ).click(function() {
  operands[0] = 0;
  operands[1] = "";
  operation = "+";
  $("#mainDisplay").text(0);
});

$( "#clearBtn" ).click(function() {
  operands[1] = "";
  $("#mainDisplay").text(0);
});
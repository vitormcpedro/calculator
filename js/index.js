(function(){
  var app = angular.module('calculator', [ ]);

  app.controller("CalculatorController", function() {
    var operands = [0,""];
    var operation = "+";
    var history = [];
    var equalsPressed = false;
    var secondDisplayText = "";

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

    function reset() {
      operands[0] = 0;
      operands[1] = "";
      operation = "+";
      equalsPressed = false;
    }


    this.mainDisplay = "0";
    this.secondDisplay = "0";

    this.numberTyped = function(num) {
      if(equalsPressed) {
        reset();
      }
      operands[1] += num;
      this.mainDisplay = operands[1];
    }

    this.operationTyped = function(op) {
      console.log(op);
      equalsPressed = false;
      var result = operators[operation](operands[0], Number(operands[1]));
      operands[0] = result;
      operands[1] = "";
      operation = op;
      this.mainDisplay = operation;
      console.log(result);
    }

    this.equalsTyped = function() {
      var result = operators[operation](operands[0], Number(operands[1]));
      operands[0] = result;
      operands[1] = "0";
      operation = "+";
      equalsPressed = true;
      this.mainDisplay = result;
      console.log(result);
    };

    this.resetTyped = function() {
      reset();
      this.mainDisplay = "0";
    };

    this.clearTyped = function() {
      if(operands[1] !== "0") {
        operands[1] = "";
      }
      this.mainDisplay = "0";
    }

  });
})();
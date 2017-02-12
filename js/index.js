(function(){
  var app = angular.module('calculator', [ ]);

  app.controller("CalculatorController", ['$scope', function($scope) {
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

    function appendToSecondDisplay(str) {
      if($scope.secondDisplay === "0") {
        $scope.secondDisplay = str;
      } else {
        $scope.secondDisplay += str;
      }
    }

    $scope.mainDisplay = "0";
    $scope.secondDisplay = "0";

    $scope.numberTyped = function(num) {
      if(equalsPressed) {
        reset();
        $scope.secondDisplay = "0";
      }
      operands[1] += num;
      $scope.mainDisplay = operands[1];
      appendToSecondDisplay(num);
    }

    $scope.operationTyped = function(op) {
      console.log(op);
      var result = operators[operation](operands[0], Number(operands[1]));
      console.log(result);
      operands[0] = result;
      operands[1] = "";
      operation = op;
      $scope.mainDisplay = operation;
      if(equalsPressed) {
        equalsPressed = false;
        $scope.secondDisplay = String(result) + operation;
      } else {
        appendToSecondDisplay(operation);
      }
    }

    $scope.equalsTyped = function() {
      if(equalsPressed) {
        return;
      }
      var result = operators[operation](operands[0], Number(operands[1]));
      console.log(result);
      operands[0] = result;
      operands[1] = "0";
      operation = "+";
      equalsPressed = true;
      $scope.mainDisplay = result;
      appendToSecondDisplay("="+String(result));
    };

    $scope.resetTyped = function() {
      reset();
      $scope.mainDisplay = "0";
      $scope.secondDisplay = "0";
    };

    $scope.clearTyped = function() {
      if(operands[1] !== "0") {
        operands[1] = "";
      }
      $scope.mainDisplay = "0";
    }

  }]);
})();
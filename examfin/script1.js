
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function appendToResult(value) {
  document.getElementById("result").value += value;
}
//funcion para solicitar variable
function calculate() {
  try {
      var expression = document.getElementById("result").value;
      if (expression.includes('Math.sin') || expression.includes('Math.cos') || expression.includes('Math.tan')) {
          expression += '))';
      }
      //funcion para ejecutar variable segun las condiciones
      var result = eval(expression);
      document.getElementById("history").innerHTML += expression + " = " + result + "<br>";
      document.getElementById("result").value = result;
  } catch (error) {
      document.getElementById("result").value = "Error";
  }
}
//funcion solicitar resultado
function clearResult() {
  document.getElementById("result").value = "";
}
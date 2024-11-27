const visor = document.querySelector(".visor")
const btnOp = document.querySelectorAll(".btnOp");
const btnNum = document.querySelectorAll(".btnNum");
const btnAc = document.querySelector(".btAc")
let primerNum = [];
let segundoNum = [];
let subTotal = 0;
let oper = undefined;
let historia = ""


btnNum.forEach((e) => {
  e.addEventListener("click", () => {
    if (oper == undefined) {
      primerNum.push(e.textContent);
    } else {
      segundoNum.push(e.textContent);
    }
  });
});

btnOp.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent != "=") {
      if (oper == undefined) {
        primerNum = parseInt(primerNum.join(""));
        oper = e.textContent;
      } else {
        segundoNum = parseInt(segundoNum.join(""));
        switch (oper) {
          case "+":
            subTotal = sumar(primerNum, segundoNum);
            segundoNum = [];
            break;
          case "-":
            subTotal = restar(primerNum, segundoNum);
            segundoNum = [];

            break;
          case "/":
            subTotal = div(primerNum, segundoNum);
            segundoNum = [];
            break;
          case "*":
            subTotal = multi(primerNum, segundoNum);
            segundoNum = [];
            break;
          default:
            break;
        }
        primerNum=subTotal;
        oper = e.textContent
      }
    } else {
      segundoNum = parseInt(segundoNum.join(""));
      switch (oper) {
        case "+":
          subTotal = sumar(primerNum, segundoNum);

          break;
        case "-":
          subTotal = restar(primerNum, segundoNum);

          break;
        case "/":
          subTotal = div(primerNum, segundoNum);

          break;
        case "*":
          subTotal = multi(primerNum, segundoNum);

          break;
        default:
          break;
      }
      console.log(subTotal);
      visor.textContent = subTotal
      
    }
  });
});
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function multi(a, b) {
  return a * b;
}

function crearHistoria (char){
  historia = historia.concat(char)
  return visor.textContent = historia
}

function clearAll (){
  let primerNum = [];
let segundoNum = [];
let subTotal = 0;
let oper = undefined;
let historia = ""
}
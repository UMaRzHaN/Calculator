let calc = document.querySelector(".calc");
let box = document.querySelector(".box");
let a, b, c, d;
calc.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    a = document.querySelector(".calc").value;
    let array = Array.from(a);
    for (let i = 0; i < array.length; i += 1) {
      switch (array[i]) {
        case "+":
          c = array.splice(i+1, array.length);
          d = array.splice(0, i);
          b = Number(d.join('')) + Number(c.join(''));
          break;
        case "-":
          c = array.splice(i+1, array.length);
          d = array.splice(0, i);
          b = Number(d.join('')) - Number(c.join(''));
          break;
        case "*":
          c = array.splice(i+1, array.length);
          d = array.splice(0, i);
          b = Number(d.join('')) * Number(c.join(''));
          break;
        case "/":
          c = array.splice(i+1, array.length);
          d = array.splice(0, i);
          b = Number(d.join('')) / Number(c.join(''));
          break;
        case "^":
          c = array.splice(i+1, array.length);
          d = array.splice(0, i);
          b = Number(d.join('')) ** Number(c.join(''));
          break;
      }
    }
    box.innerHTML = b;
    console.log("Alish Qutoooooooooooooq")
  }
});

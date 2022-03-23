class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function entregarDinero() {
  let t = document.getElementById("value");
  dinero = parseInt(t.value);

  for (let b of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / b.valor);
      if (div > b.cantidad) {
        papeles = b.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(b.valor, papeles));
      dinero = dinero - b.valor * papeles;
    }
  }
  if (dinero > 0) {
    resultado.innerHTML = "No tengo el dinero suficiente";
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML +=
          e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
  console.log(entregado);
}

let button = document.getElementById("extraer");
let res = document.getElementById("resultado");
let caja = [];
let entregado = [];
let dinero = 200;
let div = 0;
let papeles = 0;
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 20));

button.addEventListener("click", entregarDinero);

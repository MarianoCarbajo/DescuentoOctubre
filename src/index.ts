let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese la cantidad de productos";
rotulo2.innerHTML = "Ingrese el precio unitario";
rotulo3.innerHTML = "Ingrese el mes de la compra";

btnEnviar.addEventListener("click", () => {
  let cantidad: number = Number(dato1.value);
  let precio: number = Number(dato2.value);
  let mes: number = Number(dato3.value);

  let compra: number = precio * cantidad;

  if (mes < 1 || mes > 12) {
    console.log("El mes es incorrecto");
  } else if (mes == 10) {
    compra = compra - compra * 0.15;
    console.log("Felicitaciones! Obtuviste un descuento : $ ", compra);
  } else {
    console.log("El total de su compra es : $", compra);
  }
});

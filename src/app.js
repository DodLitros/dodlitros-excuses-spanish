/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  const sujeto = [
    "perro",
    "iguana",
    "chinchilla",
    "nevera",
    "compañero de piso",
    "mejor amiga",
    "vecina",
    "silla",
    "ukelele",
    "lavadora",
    "judia verde",
    "pez",
    "gato",
    "cacatúa",
    "hermana",
    "sofá",
    "escoba",
    "estropajo",
    "elfo doméstico",
    "gamusino"
  ];
  const verbo = [
    "comido",
    "reciclado",
    "borrado",
    "enterrado",
    "twiteado",
    "robado",
    "instagrameado",
    "perdido",
    "escrito sobre",
    "bañado",
    "escapado",
    "casado",
    "congelado",
    "empaquetado",
    "roto",
    "tirado",
    "mordido",
    "cantado",
    "saltado",
    "escalado",
    "volado"
  ];
  const atributo = [
    "el café",
    "sus ataques de ansiedad",
    "sus agobios",
    "sus movidas",
    "la felicidad",
    "un familiar",
    "los papeles",
    "el coche",
    "la bici",
    "al miedo",
    "la puerta",
    "el váter",
    "el enchufe",
    "la varita",
    "sus sentimientos",
    "a un dinosaurio",
    "un calcetín"
  ];

  const whoDidWhat = a => a[Math.round(Math.random() * (a.length - 1))];
  let excusa;
  const getExcuse = function() {
    const who = whoDidWhat(sujeto);
    const did = whoDidWhat(verbo);
    const what = whoDidWhat(atributo);
    excusa =
      "<h1> No me vas a creer, pero  mi " +
      who +
      " ha " +
      did +
      " " +
      what +
      ".<h1>";
    return excusa;
  };

  document.write(getExcuse());
  //console.log(getExcuse());
};

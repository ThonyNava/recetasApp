class Plato {
  constructor(nombre, chef, descripcion, preparacion, img, ...contornos) {
    this.nombre = nombre;
    this.chef = chef;
    this.contornos = contornos;
    this.descripcion = descripcion;
    this.preparacion = preparacion;
    this.img = img;
  }
}

class Contorno {
  constructor(nombre, chef, preparacion, img, ...ingrediente) {
    this.nombre = nombre;
    this.chef = chef;
    this.ingrediente = ingrediente;
    this.preparacion = preparacion;
    this.img = img;
  }
}

class Ingrediente {
  constructor(nombre, cantidad, uniMed, img) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.uniMed = uniMed;
    this.img = img;
  }
}

let ingrediente_1 = new Ingrediente(
  "Harina",
  "100",
  "g",
  "https://http2.mlstatic.com/harina-pan-D_NQ_NP_649572-MLU41101869804_032020-F.jpg"
);
let ingrediente_2 = new Ingrediente(
  "Agua",
  "155",
  "ml",
  "https://sintesis.com.mx/wp-content/uploads/2020/07/cdn-3.expansion-1.jpg"
);
let ingrediente_3 = new Ingrediente(
  "Sal",
  "10",
  "g",
  "https://panypizza.com/wp-content/uploads/2019/09/Arti%CC%81culo-sal.jpg"
);

let contorno_1 = new Contorno(
  "Arepa",
  "Eraudo",
  "1.- Lo primero pesamos bien todos los ingredientes. Los ponemos en un bol y amasamos bien hasta formar una masa que no se pegue. La dejamos reposar unos 10 minutos. 2.- Saldrá como un kilo de masa, por ello he hecho arepas medianas de unos 100 gramos. Hacemos una bola y las aplanamos para formar las arepas. 3.- Las dejamos reposar en una paño húmedo para que no se sequen.4.- En una sartén untamos un poco de aceite y las cocinamos unos 5-6 minutos por cada lado, hasta que se forme una costra. 5.- Una vez hechas, las abrimos y las rellenamos con lo que más nos guste.",
  "https://recetasdecocina.elmundo.es/wp-content/uploads/2019/02/receta-arepas-venezolanas.jpg",
  ingrediente_1,
  ingrediente_2,
  ingrediente_3
);

let ingrediente_4 = new Ingrediente(
  "Queso",
  "150",
  "g",
  "https://matutinazo.com/wp-content/uploads/2019/03/QUESO.jpg"
);

let contorno_2 = new Contorno(
  "Queso",
  "Soprolet",
  "Listo para usar.",
  "https://matutinazo.com/wp-content/uploads/2019/03/QUESO.jpg",
  ingrediente_4
);

let plato_1 = new Plato(
  "Arepa con Queso",
  "Eraudo",
  "Arepas son sin duda uno de mis platos favoritos de la comida Colombiana y estas Arepas Rellenas de Queso son absolutamente deliciosas. ¡Buen provecho!",
  "Abrir la arepa y meter el queso. Daaa!",
  "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/102355503_248255849942280_3611374047638751003_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=GjGG0423jA0AX_vgRZY&oh=b4f0a736afddaa13c04adda3940f3954&oe=5F9ED235",
  contorno_1,
  contorno_2
);
console.log(plato_1);

let platosTodos = [plato_1, plato_1, plato_1, plato_1];

let printPlatos = (arrDePlatos) => {
  arrDePlatos.forEach((obj) => {
    let contornos = obj.contornos;
    let div = document.createElement("div");
    div.classList = "card col-lg-4 mt-4";
    div.innerHTML = `
        <img
        class="card-img-top w-100 rounded mt-3"
            class="card-img-top"
            src="${obj.img}"
            alt="${obj.nombre}"
        />
        <div class="card-body">
            <h5 class="mt-3 card-title">${obj.nombre}</h5>
            <p class="card-text">${obj.descripcion}</p>
            <h5 class="mt-3 card-title">Preparación</h5>
            <p class="card-text">${obj.preparacion}</p>
            <p class="card-text"> Chef del plato: ${obj.chef}</p>
        </div>`;

    contornos.forEach((obj) => {
      let contorno = document.createElement("div");
      let html = `<h5 class="mt-3 card-title">${obj.nombre}</h5>
                      <img class="card-img-top w-100 rounded"
                      src="${obj.img}"
                      alt="${obj.nombre}"/>
                      <p class="card-text"> Chef del plato: ${obj.preparacion}</p>`;
      contorno.innerHTML = html;

      let ingredientes = obj.ingrediente;
      ingredientes.forEach((obj) => {
        let ingrediente = document.createElement("div");
        let html = `<h5 class="mt-3 card-title">${obj.nombre}</h5>
                            <img class="card-img-top w-100 rounded"
                            src="${obj.img}"
                            alt="${obj.nombre}"/>
                            <p class="card-text">Se prepara con ${obj.cantidad}${obj.uniMed} de ${obj.nombre}</p>`;
        contorno.innerHTML = html;
        contorno.appendChild(ingrediente);
      });

      div.appendChild(contorno);
    });
    document.getElementById("recetasBox").appendChild(div);
  });
};

printPlatos(platosTodos);

// nombre, chef, descripcion, preparacion, img
// nombre, chef, preparacion, img, ...ingrediente

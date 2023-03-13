(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const styles = "";
const header = {
  template: `<div class="container-fluid">
    <div class="row">
        <div class="col-12 text-center">
            <h1>Zeus Sorroche Perez</h1>
        </div>
    </div>
</div>`
};
const home = {
  template: `      
    <div class="container-fluid p-5">
        <div class="row">
          <div class="col-12 d-flex shadow">
              <div class="col-6 formulario"></div>
              <div class="col-6 descripcion d-flex"></div>
          </div>
        </div>
        <div class="col-12 shadow pedidos pt-5"></div>
    </div>`,
  script: () => {
    console.log("Estas en la pagina del Home");
  }
};
const cervezas = [
  {
    id: 1,
    nombre: "Mahou Cinco Estrellas",
    tipo: "Lager",
    origen: "Madrid",
    descripcion: "Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",
    imagen: "https://www.mahou.es/wp-content/themes/mahou_v2/template-contents/mahou-familia/dist/images/Botella_Mahou_5_Estrellas.png"
  },
  {
    id: 2,
    nombre: "Estrella Galicia",
    tipo: "Lager",
    origen: "Galicia",
    descripcion: "Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",
    imagen: "https://cdn.shopify.com/s/files/1/0271/8158/0388/products/estrella-galicia-escerveza-3.jpg?v=1648893181"
  },
  {
    id: 3,
    nombre: "Alhambra Reserva 1925",
    tipo: "Lager",
    origen: "Granada",
    descripcion: "Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",
    imagen: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"
  },
  {
    id: 4,
    nombre: "San Miguel Especial",
    tipo: "Lager",
    origen: "Barcelona",
    descripcion: "Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",
    imagen: "https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png"
  },
  {
    id: 5,
    nombre: "Damm Estrella",
    tipo: "Lager",
    origen: "Barcelona",
    descripcion: "Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",
    imagen: "https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png"
  }
];
const formulario = {
  template: `<h1>Selecciona tu cerveza y haz tu pedido</h1>
<form class="m-3" id="validar">
    <div class="form-group">
      <label class="text-white fs-3"    >Nombre de grupo</label>
      <input type="text" class="form-control bg-black text-white" id="nombre" required maxlength="10" minlength="4"placeholder="Nombre" required>
        <!-- mensaje si valida -->
        <div class="valid-feedback">Todo correcto </div>
        <!-- mensaje si no valida -->
        <div class="invalid-feedback">Minimo de caracteres 4 y maximo 10</div>
    </div>
    <div class="form-group">
    <label class="text-white fs-3" for="validation02">Mesa</label>
      <input type="number" class="form-control bg-black text-white" id="Mesa" placeholder="Numero de la mesa"  min="1" max="15" required>
         <!-- mensaje si valida -->
         <div class="valid-feedback">Todo correcto </div>
         <!-- mensaje si no valida -->
        <div class="invalid-feedback">El nuemro de la mesa tiene que ser entre 1 y 15</div>
    </div>
    <div class="form-group">
        <label class="text-white fs-3" for="validation02">Cerveza</label>
        <select name="cerveza" id="cerveza" class="bg-black text-white"></select>
    </div>
    <div class="form-group">
        <label class="text-white fs-3" for="validation02">Cantidad</label>
        <input type="number" class="form-control bg-black text-white" id="cantidad" placeholder="Cantidad de cervezas" min="1" required>
        <!-- mensaje si valida -->
        <div class="valid-feedback">Todo correcto </div>
        <!-- mensaje si no valida -->
       <div class="invalid-feedback">No puedes pedir 0 consumiciones</div>
    </div>
    <div>
        <button type="submit" class=" w-100 btn btn-primary" id="enviar">Submit</button>
    </div> 
</form>`,
  script: () => {
    var html = `<option>Catalogo Cervezas</option>`;
    cervezas.forEach((cervezas2) => {
      html += `<option value="${cervezas2.id}">${cervezas2.nombre}</option>`;
    });
    const select = document.querySelector("#cerveza");
    select.innerHTML = html;
    select.addEventListener("change", (event) => {
      descripcionCerveza.script(event.target.value);
    });
    document.querySelector("#validar").classList.add("was-validated");
    document.querySelector("#enviar").addEventListener("click", (e) => {
      e.preventDefault();
      const formEditar = document.querySelector("#validar");
      formEditar.classList.add("was-validated");
      if (formEditar.checkValidity()) {
        formEditar.classList.remove("was-validated");
        router.editarEnviar();
      }
    });
  }
};
const descripcionCerveza = {
  template: ``,
  script: (id) => {
    const posicionCerveza = cervezas.findIndex((nombre) => nombre.id == id);
    const html = `<div>
    // Seleccionamos del array un elemento y llamamos a las const posiconCerveza que tendra id de la cerveza que tengamos para posicionarnos
    <h1 class="text-white text-center">${cervezas[posicionCerveza].nombre}</h1>
    <p class="text-bold text-white fw-bold fs-4">${cervezas[posicionCerveza].descripcion}</p>
    <img class="w-25 m-3" src="${cervezas[posicionCerveza].imagen}" alt="FotoCerveza">
</div>
`;
    const descripcionCerveza2 = document.querySelector(".descripcion");
    descripcionCerveza2.innerHTML = html;
  }
};
const tablaPedidos = {
  template: `<h1>Esto es lo que te has tomado ya...</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Cerveza</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
  `
};
document.querySelector("header").innerHTML = header.template;
document.querySelector("main").innerHTML = home.template;
document.querySelector(".descripcion").innerHTML = descripcionCerveza.template;
document.querySelector(".formulario").innerHTML = formulario.template;
formulario.script();
document.querySelector(".pedidos").innerHTML = tablaPedidos.template;
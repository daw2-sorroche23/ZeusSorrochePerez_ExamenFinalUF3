import { cervezas } from "./cervezas";

export const formulario = {
    template: `<form class="m-3">
    <div class="form-group">
      <label class="text-white fs-3" for="validation01">Nombre</label>
      <input type="text" class="form-control bg-black text-white" id="nombre" 
             placeholder="Nombre" required>
    </div>
    <div class="form-group">
    <label class="text-white fs-3" for="validation02">Mesa</label>
      <input type="number" class="form-control bg-black text-white" id="Mesa" placeholder="Numero de la mesa" required>
    </div>
    <div class="form-group">
        <label class="text-white fs-3" for="validation02">Cerveza</label>
        <select name="cerveza" id="cerveza" class="bg-black text-white"></select>
    </div>
    <div class="form-group">
        <label class="text-white fs-3" for="validation02">Cantidad</label>
        <input type="text" class="form-control bg-black text-white" id="cantidad" placeholder="Cantidad de cervezas" required>
    </div>
    <div>
        <button type="submit" class=" w-100 btn btn-primary">Submit</button>
    </div> 
</form>`,

script:()=>{

    //Le ponemos un placeHolder en el option para que el usuario seleccione una ceveza
    var html=`<option>Catalogo Cervezas</option>`

    //Recorremos el arrayCerveza con un forEach y añadimos en los options los nombres de nuestro array
    cervezas.forEach(cervezas => {
        html+=`<option value="${cervezas.id}">${cervezas.nombre}</option>`
    });

    const select = document.querySelector("#cerveza")

    select.innerHTML = html

    //Llamamos la esta funcion cada vez que se aplique un cambio en el select y guardamos la id
    select.addEventListener("change",(event)=>{
        descripcionCerveza.script(event.target.value)
    });
}

}

export const descripcionCerveza = {
    template:``,
    script: (id)=>{
        //Buscamos la posicion del id en nuestro array con findIndex
        const posicionCerveza = cervezas.findIndex(nombre=>nombre.id == id)

        const html=`<div>
    <h1 class="text-white">${cervezas[posicionCerveza].nombre}</h1>
    <img class="w-25 m-3" src="${cervezas[posicionCerveza].imagen}" alt="FotoCerveza">
    <p class="text-bold text-white fw-bold fs-4">${cervezas[posicionCerveza].descripcion}</p>
</div>
`

        const descripcionCerveza = document.querySelector(".descripcion")

        descripcionCerveza.innerHTML = html

    }
}
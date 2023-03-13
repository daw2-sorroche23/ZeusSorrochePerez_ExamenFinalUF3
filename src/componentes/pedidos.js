import { cervezas } from "./cervezas";

export const formulario = {
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

    //Validamos los inputs
    document.querySelector('#validar').classList.add('was-validated');

    //Le añadimos un addEventListener al nuestro boton de enviar 
    document.querySelector('#enviar').addEventListener('click', (e)=>{
        e.preventDefault();
        //Añadimos la clase was-validated para que se muestre la validación de boostrap
        const formEditar = document.querySelector('#validar')
        formEditar.classList.add('was-validated');
        if(formEditar.checkValidity()){
            formEditar.classList.remove('was-validated')
            router.editarEnviar()
        }
    });
}

}

//Hacemos el apartado donde nos mostrara el nombre la imagen y la descripcion de la cerveza que seleccionemos de nuestro select
export const descripcionCerveza = {
    template:``,
    script: (id)=>{
        //Buscamos la posicion del id en nuestro array con findIndex
        const posicionCerveza = cervezas.findIndex(nombre=>nombre.id == id)

        const html=`<div>
    // Seleccionamos del array un elemento y llamamos a las const posiconCerveza que tendra id de la cerveza que tengamos para posicionarnos
    <h1 class="text-white text-center">${cervezas[posicionCerveza].nombre}</h1>
    <p class="text-bold text-white fw-bold fs-4">${cervezas[posicionCerveza].descripcion}</p>
    <img class="w-25 m-3" src="${cervezas[posicionCerveza].imagen}" alt="FotoCerveza">
</div>
`

        const descripcionCerveza = document.querySelector(".descripcion")

        descripcionCerveza.innerHTML = html

    }
}
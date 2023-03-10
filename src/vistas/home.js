//Hacemos la vista home donde inyectaremos todos nuestros compnentes

export const home ={
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

    script: ()=>{
        console.log('Estas en la pagina del Home')
    }
}
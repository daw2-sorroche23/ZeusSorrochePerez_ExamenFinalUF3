export const tablaPedidos = {
    template: `<h1>Esto es lo que te has tomado ya...</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Cerveza</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estrella Galicia</td>
      <td>5</td>
      <td><button class="btn bg-danger">Eliminar</button></td>
      <td><button class="btn bg-primary">Editar</button></td> 
    </tr>
    <tr>
      <td>San Miguel Especial</td>
      <td>2</td>
      <td><button class="btn bg-danger">Eliminar</button></td>
      <td><button class="btn bg-primary">Editar</button></td> 
    </tr>
  </tbody>
</table>`
}
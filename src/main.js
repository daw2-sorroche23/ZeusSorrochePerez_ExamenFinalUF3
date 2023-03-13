import './scss/styles.scss'

import { header } from "./componentes/header";
import { home } from "./vistas/home";
import { formulario } from "./componentes/pedidos";
import { descripcionCerveza } from "./componentes/pedidos";
import { tablaPedidos} from './componentes/tablaPedidos';


document.querySelector('header').innerHTML = header.template

document.querySelector('main').innerHTML = home.template

document.querySelector('.descripcion').innerHTML = descripcionCerveza.template

document.querySelector('.formulario').innerHTML = formulario.template
formulario.script()

document.querySelector('.pedidos').innerHTML = tablaPedidos.template


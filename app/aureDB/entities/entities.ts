// import { Validators } from "@angular/forms";
import { Validators } from "../../enums.ts";

/*
  tipoid               Int
*/

const entities = {


   'public."User"':
      [
         { name: 'name', type: 'text', title: 'Nombre', validators: [Validators.required] },
         { name: 'email', type: 'text', title: 'Email', validators: [Validators.required, Validators.email] },
         { name: 'password', type: 'password', title: 'Password', validators: [Validators.required], default: '12345678' },
         { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_UserEstado', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'roleid', type: 'select', title: 'Role', validators: [Validators.required], multiple: false, coleccion: 'TC_UserRole', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide: true },
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required], hide: true },
      ],

   'finanzas.empresa':
      [
         { name: 'descripcion', type: 'text', title: 'Descripción', validators: [Validators.required] },
         { name: 'abreviatura', type: 'text', title: 'Abreviatura', validators: [Validators.required] },
         { name: 'color', type: 'text', title: 'Color', validators: [Validators.required] },
      ],

   'finanzas.cartera':
      [
         { name: 'empresaid', type: 'select', title: 'Empresa', multiple: false, noTC: true, coleccion: 'finanzas/empresa', id: 'id', desc: 'descripcion', validators: [Validators.required] },
         { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },
         { name: 'acciones', type: 'number', title: 'Acciones', disabled: true, validators: [Validators.required], default: 0 },
         { name: 'beneficios', type: 'number', title: 'Beneficios', disabled: true, validators: [Validators.required], default: 0 },
      ],

'finanzas.fondo':
      [
         { name: 'empresaid', type: 'select', title: 'Empresa', multiple: false, noTC: true, coleccion: 'finanzas/empresa', id: 'id', desc: 'descripcion', validators: [Validators.required] },
         { name: 'fechainicio', type: 'date', title: 'Fecha I', validators: [Validators.required], useAlways: true },
         { name: 'fechafin', type: 'date', title: 'Fecha F', validators: [Validators.required] },
         { name: 'meses', type: 'number', title: 'Meses', disabled: true, validators: [Validators.required], useAlways: true },
         { name: 'importe', type: 'number', title: 'Importe', disabled: true, validators: [Validators.required] },
         { name: 'interes', type: 'number', title: 'Interes', disabled: true, validators: [Validators.required], default: 0 },
         { name: 'beneficios', type: 'number', title: 'Beneficios', disabled: true, validators: [Validators.required], useAlways: true },
      ],


      'finanzas.fondoxmes':
      [
         { name: 'fondoid', type: 'number', validators: [Validators.required] },         
         { name: 'anno', type: 'number',  validators: [Validators.required] },
         { name: 'mes', type: 'number',  validators: [Validators.required] },
         { name: 'importe', type: 'number',  validators: [Validators.required]},         
      ],





   'finanzas.compra':
      [
         { name: 'carteraid', type: 'number', title: 'Cartera', validators: [Validators.required], hide: true, useAlways: true },
         { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },
         { name: 'acciones', type: 'number', title: 'Acciones', validators: [Validators.required], default: 0 },
         { name: 'precio', type: 'number', title: 'Precio', validators: [Validators.required], default: 0 },
         { name: 'impuestos', type: 'number', title: 'Impuestos', validators: [Validators.required], default: 0 },
         { name: 'comision', type: 'number', title: 'Comisión', validators: [Validators.required], default: 0 },
         { name: 'total', type: 'number', title: 'Total', validators: [Validators.required], default: 0 },
      ],


   'finanzas.venta':
      [
         { name: 'carteraid', type: 'number', title: 'Cartera', validators: [Validators.required], hide: true, useAlways: true },
         { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },
         { name: 'acciones', type: 'number', title: 'Acciones', validators: [Validators.required], default: 0 },
         { name: 'precio', type: 'number', title: 'Precio', validators: [Validators.required], default: 0 },
         { name: 'impuestos', type: 'number', title: 'Impuestos', validators: [Validators.required], default: 0 },
         { name: 'comision', type: 'number', title: 'Comisión', validators: [Validators.required], default: 0 },
         { name: 'total', type: 'number', title: 'Total', validators: [Validators.required], default: 0 },
      ],



   'finanzas.dividendo':
      [
         { name: 'carteraid', type: 'number', title: 'Cartera', validators: [Validators.required], hide: true, useAlways: true },
         { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },
         { name: 'acciones', type: 'number', title: 'Acciones', validators: [Validators.required], default: 0 },
         { name: 'precio', type: 'number', title: 'Precio', validators: [Validators.required], default: 0 },
         { name: 'impuestos', type: 'number', title: 'Impuestos', validators: [Validators.required], default: 0 },
         { name: 'total', type: 'number', title: 'Total', validators: [Validators.required], default: 0 },
      ],

   'casa.compra_producto':
      [
         { name: 'descripcion', type: 'text', title: 'Descripción', validators: [Validators.required] },
      ],

   'casa.compra_producto_selected':
      [
         { name: 'id', type: 'number', title: 'Producto', validators: [Validators.required], hide: true, useAlways: true },
      ],

   'casa.gasto_tipo':
      [
         { name: 'descripcion', type: 'text', title: 'Descripción', validators: [Validators.required] },
      ],

   'casa.gasto':
      [         
         { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },
         { name: 'gastotipoid', type: 'select', title: 'Tipo', validators: [Validators.required], noTC: true, multiple: false, coleccion: 'casa/gasto_tipo', id: 'id', desc: 'descripcion' },
         { name: 'importe', type: 'number', title: 'Importe', validators: [Validators.required], default: 0 },         
         { name: 'observaciones', type: 'text', title: 'Observaciones' },
      ],
      'casa.evento_tipo':
      [
         { name: 'descripcion', type: 'text', title: 'Descripción', validators: [Validators.required] },
         { name: 'color', type: 'text', title: 'Color', validators: [Validators.required] },
         { name: 'bkcolor', type: 'text', title: 'BK Color', validators: [Validators.required] },

      ],

   'casa.evento':
      [         
         { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },
         { name: 'eventotipoid', type: 'select', title: 'Tipo', validators: [Validators.required], noTC: true, multiple: false, coleccion: 'casa/evento_tipo', id: 'id', desc: 'descripcion' },
         { name: 'observaciones', type: 'text', title: 'Observaciones' },
      ],

      'inmueble.catastro_tipo':
      [
         { name: 'descripcion', type: 'text', title: 'Descripción', validators: [Validators.required] },
      ],


      'inmueble.catastro':
      [         
         { name: 'catastrotipoid', type: 'select', title: 'Tipo', validators: [Validators.required], noTC: true, multiple: false, coleccion: 'inmueble/catastro_tipo', id: 'id', desc: 'descripcion', default: 2 },
         { name: 'felipe', type: 'checkbox', title: 'Felipe', default: true, validators: [Validators.required] },
         { name: 'referenciacatastral', type: 'text', title: 'R. Catastral', validators: [Validators.required] },
         { name: 'direccion', type: 'text', title: 'Dirección', validators: [Validators.required]},
         { name: 'poligono', type: 'text', title: 'Polígono'},
         { name: 'parcela', type: 'text', title: 'Parcela'},
         { name: 'superficieconstruida', type: 'number', title: 'Sup. Contruida (m2)', validators: [Validators.required], default: 0 },         
         { name: 'superficieparcela', type: 'number', title: 'Sup. Parcela (m2)', validators: [Validators.required], default: 0 },         
         { name: 'uso', type: 'text', title: 'Uso', validators: [Validators.required]},
         { name: 'valorsuelo', type: 'number', title: 'Valor suelo', validators: [Validators.required], default: 0 },         
         { name: 'valorconstruccion', type: 'number', title: 'Valor Construcción', validators: [Validators.required], default: 0 },         
         { name: 'valorcatastral', type: 'number', title: 'Valor Catastral', validators: [Validators.required], default: 0 },         
      ],

      'inmueble.arriendo':
      [  
         { name: 'catastroid', type: 'number',  validators: [Validators.required] },         
         { name: 'fechapago', type: 'date', title: 'Fecha pago', validators: [Validators.required] }, 
         { name: 'fechainicio', type: 'date', title: 'Fecha inicio', validators: [Validators.required] },       
         { name: 'fechafin', type: 'date', title: 'Fecha fin', validators: [Validators.required] },       
         { name: 'importe', type: 'number', title: 'Importe', disabled: true, validators: [Validators.required] },
         { name: 'quien', type: 'text', title: 'Arrendado a', validators: [Validators.required] },
         { name: 'observaciones', type: 'text', title: 'Observaciones' },
      ],


};

export default entities;
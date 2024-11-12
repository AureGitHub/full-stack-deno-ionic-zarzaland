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
         { name: 'password', type: 'password', title: 'Password', validators: [Validators.required] , default : '12345678'},
         { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_UserEstado', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'roleid', type: 'select', title: 'Role', validators: [Validators.required], multiple: false, coleccion: 'TC_UserRole', id: 'id', desc: 'descripcion', default: 3  },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide : true },         
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required], hide : true },         
      ],



    'bolsa.empresa':
    [       
      { name: 'descripcion', type: 'text', title: 'Descripción', validators: [Validators.required] },      
      { name: 'color', type: 'text', title: 'Color', validators: [Validators.required] },      
   ],


   'bolsa.cartera':
   [       
      { name: 'empresaid', type: 'select', title: 'Acción', multiple: false, noTC:true ,  coleccion: 'bolsa/empresa', id: 'id', desc: 'descripcion', validators: [Validators.required] },   
      { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },         
      { name: 'acciones', type: 'number', title: 'Acciones',disabled : true, validators: [Validators.required] , default: 0},
      { name: 'beneficios', type: 'number', title: 'Beneficios',disabled : true, validators: [Validators.required] , default: 0},
  ],



  'bolsa.compra':
  [       
    { name: 'carteraid', type: 'number', title: 'Cartera', validators: [Validators.required], hide : true, useAlways : true },
    { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },         
    { name: 'acciones', type: 'number', title: 'Acciones', validators: [Validators.required] , default: 0},
    { name: 'precio', type: 'number', title: 'Precio', validators: [Validators.required] , default: 0},
    { name: 'impuestos', type: 'number', title: 'Impuestos', validators: [Validators.required] , default: 0},
    { name: 'comision', type: 'number', title: 'Comisión', validators: [Validators.required] , default: 0},
    { name: 'total', type: 'number', title: 'Total', validators: [Validators.required] , default: 0},
 ],


   'bolsa.venta':
   [   
    { name: 'carteraid', type: 'number', title: 'Cartera', validators: [Validators.required], hide : true, useAlways : true },
     { name: 'fecha', type: 'date', title: 'Fecha', validators: [Validators.required] },         
     { name: 'acciones', type: 'number', title: 'Acciones', validators: [Validators.required] , default: 0},
     { name: 'precio', type: 'number', title: 'Precio', validators: [Validators.required] , default: 0},
     { name: 'impuestos', type: 'number', title: 'Impuestos', validators: [Validators.required] , default: 0},
     { name: 'comision', type: 'number', title: 'Comisión', validators: [Validators.required] , default: 0},
     { name: 'total', type: 'number', title: 'Total', validators: [Validators.required] , default: 0},     
  ],

  accion_compra_venta:
  [ 
    { name: 'compraid', type: 'number', title: 'Acciones', validators: [Validators.required]},
    { name: 'ventaid', type: 'number', title: 'Precio', validators: [Validators.required]},    
    { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide : true },         
     { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required], hide : true },       
 ],



};

export default entities;
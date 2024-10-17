// import { Validators } from "@angular/forms";
import { Validators } from "../../enums.ts";

/*
  tipoid               Int
*/

const entities = {


   User:
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

   empleada:
      [
         { name: 'nombre', type: 'text', title: 'Nombre', validators: [Validators.required] },
         { name: 'baja', type: 'checkbox', title: 'Baja', default: false },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide : true },         
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required], hide : true },         
      ],

      servicio:
      [
        { name: 'empleadaId', type: 'select', title: 'Empleada', multiple: false, coleccion: 'empleada', id: 'id', desc: 'nombre', validators: [Validators.required] },
        { name: 'fecha', type: 'date', title: 'fecha', validators: [Validators.required] },
        { name: 'horaInicio', type: 'time', title: 'Hora inicio', validators: [Validators.required] },
        { name: 'horaFin', type: 'time', title: 'hora fin', validators: [Validators.required] },
        { name: 'suplLevantar', type: 'checkbox', title: 'sup. Levantar', default: true },
        { name: 'pagado', type: 'checkbox', title: 'pagado', default: false },
        { name: 'observacion', type: 'text', title: 'observación' },
     ],


};

export default entities;
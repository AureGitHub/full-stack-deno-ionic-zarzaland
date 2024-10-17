import { Validators } from "@angular/forms";

export const entities = {

   User:
      [
         { name: 'name', type: 'text', title: 'Nombre', validators: [Validators.required] },
         { name: 'email', type: 'text', title: 'Email', validators: [Validators.required, Validators.email] },
         { name: 'password', type: 'password', title: 'Password', validators: [Validators.required] , default : '12345678'},
         { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_UserEstado', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'roleid', type: 'select', title: 'Role', validators: [Validators.required], multiple: false, coleccion: 'TC_UserRole', id: 'id', desc: 'descripcion', default: 3  },
      ],

      Apuesta : 
      [
         { name: 'fecha', type: 'date', title: 'fecha', validators: [Validators.required] },         
         { name: 'apostado', type: 'number', title: 'Apostado', validators: [Validators.required], default: 0, disabled : true },
         { name: 'ganado', type: 'number', title: 'Ganado', validators: [Validators.required] , default: 0, disabled : true},
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_ApuestaEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },


      ],

      userxbizum : 
      [
         { name: 'importe', type: 'number', title: 'Importe', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_BizumEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },
         { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },

      ],
  
};
import { Role } from 'app-base-lib';

export const  menuItems =   [
   {
     title: 'Gestión Acciones',
     icon: 'ticket-outline',
     path: '/inversiones/acciones/',
     key: 'acciones',  // para encontar la ruta en los guard
     roles: [Role.god]
   } ,
   {
    title: 'Compra Acciones',
    icon: 'push-outline',
    path: '/inversiones/acciones_compra/',
    key: 'acciones_compra',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,
  {
   title: 'Venta Acciones',
   icon: 'download-outline',
   path: '/inversiones/acciones_venta/',
   key: 'acciones_venta',  // para encontar la ruta en los guard
   roles: [Role.god]
 }      
 ]
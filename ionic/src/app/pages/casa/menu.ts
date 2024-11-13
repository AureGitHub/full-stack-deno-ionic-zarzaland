import { Role } from 'app-base-lib';

export const  menuItems =   [

   {
    title: 'Compras',
    icon: 'cart-outline',
    path: '/casa/compras/',
    key: 'compras',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,
 ]
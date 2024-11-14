import { Role } from 'app-base-lib';

export const  menuItems =   [

   {
    title: 'Compras',
    icon: 'cart-outline',
    path: '/casa/compras/',
    key: 'compras',  // para encontar la ruta en los guard
    roles: [Role.admin]
  } ,

  {
    title: 'Gastos',
    icon: 'cash-outline',
    path: '/casa/gastos/',
    key: 'gastos',  // para encontar la ruta en los guard
    roles: [Role.admin]
  } ,

 ]
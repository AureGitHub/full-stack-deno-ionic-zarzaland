import { Role } from "app-base-lib";

export const  menuItems =   [
  {
    title: 'Catastro',
    remixicon: 'ri-community-line',
    path: '/inmuebles/catastro/',
    key: 'catastro',  // para encontar la ruta en los guard
    roles: [Role.admin]
  } ,
 ]
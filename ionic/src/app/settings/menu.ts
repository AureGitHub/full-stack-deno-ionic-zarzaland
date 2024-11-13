import { Role } from 'app-base-lib';

export const  menuItems =   [
   {
     title: 'Inmuebles',
     icon: 'business-outline',
     path: '/inmuebles/',
     key: 'inmuebles',  // para encontar la ruta en los guard
     roles: [Role.god, Role.admin]
   },

   {
    title: 'Casa',
    icon: 'storefront-outline',
    path: '/casa/',
    key: 'casa',  // para encontar la ruta en los guard
    roles: [Role.god, Role.admin],
    // hide : true
  },

  {
    title: 'Inversiones',
    icon: 'cash-outline',
    path: '/inversiones/',
    key: 'inversiones',  // para encontar la ruta en los guard
    roles: [Role.god],
    // hide : true
  },
 ]
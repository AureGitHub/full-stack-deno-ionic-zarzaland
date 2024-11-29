import { Role } from 'app-base-lib';

export const  menuItems =   [
  {
    ppal : true,
    title: 'Casa',
    icon: 'storefront-outline',
    path: '/casa/',
    key: 'casa',  // para encontar la ruta en los guard
    // hide : true
  },
   {
    ppal : true,
     title: 'Inmuebles',
     icon: 'business-outline',
     path: '/inmuebles/',
     key: 'inmuebles',  // para encontar la ruta en los guard
     roles: [Role.god, Role.admin]
   },
  {
    ppal : true,
    title: 'Finanzas',
    icon: 'cash-outline',
    path: '/finanzas/',
    key: 'finanzas',  // para encontar la ruta en los guard
    roles: [Role.god],
    // hide : true
  },
 ]
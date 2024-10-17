import { Role } from 'app-base-lib';

export const  menuItems =   [
  {
    title: 'Inicio',
    icon: 'home',
    path: '//',
    key: 'inicio'
  },
   {
     title: 'empleadas',
     icon: 'woman',
     path: '/empleadas/',
     key: 'empleadas',  // para encontar la ruta en los guard
     roles: [Role.god, Role.admin]
   },

   {
    title: 'Usuarios',
    icon: 'people',
    path: '/users/',
    key: 'users',  // para encontar la ruta en los guard
    roles: [Role.god]
  },
  {
    title: 'Administracion',
    icon: 'construct-outline',
    path: '/administracion/',
    key: 'administracion',  // para encontar la ruta en los guard
    roles: [Role.god]
  },
  {
    title: 'Bizum',
    icon: 'logo-bitcoin',
    path: '/bizum/',
    key: 'bizum',  // para encontar la ruta en los guard
    roles: [Role.god]
  },

  {
    title: 'Apuestas',
    icon: 'trophy',
    path: '/apuesta/',
    key: 'apuesta',  // para encontar la ruta en los guard
    roles: [Role.god, Role.normal]
  },

  {
    title: 'Movimientos',
    icon: 'newspaper',
    path: '/movimiento/',
    key: 'movimiento',  // para encontar la ruta en los guard
    roles: [Role.normal]
  },

  {
    title: 'Auditoria',
    icon: 'walk',
    path: '/auditoria/',
    key: 'auditoria',  // para encontar la ruta en los guard
    roles: [Role.god]
  },


 ]
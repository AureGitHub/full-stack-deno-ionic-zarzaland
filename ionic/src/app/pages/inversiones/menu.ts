import { Role } from 'app-base-lib';

export const  menuItems =   [

   {
    title: 'Bolsa',
    icon: 'bar-chart-outline',
    path: '/inversiones/bolsa/',
    key: 'bolsa',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,

  {
    title: 'Depósitos, letras..',
    remixicon: 'ri-bank-fill',
    path: '/inversiones/fondo/',
    key: 'fondo',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,

  {
    title: 'Estadísticas',
    remixicon: 'ri-bar-chart-grouped-line',
    path: '/inversiones/estadisticas/',
    key: 'estadisticas',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,

  
 ]
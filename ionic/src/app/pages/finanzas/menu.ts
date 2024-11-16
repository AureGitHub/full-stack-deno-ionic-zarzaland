import { Role } from 'app-base-lib';

export const  menuItems =   [

   {
    title: 'Bolsa',
    icon: 'bar-chart-outline',
    path: '/finanzas/bolsa/',
    key: 'bolsa',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,

  {
    title: 'Depósitos, letras..',
    remixicon: 'ri-bank-fill',
    path: '/finanzas/fondo/',
    key: 'fondo',  // para encontar la ruta en los guard
    roles: [Role.god]
  } ,

  {
    title: 'Estadísticas',
    remixicon: 'ri-bar-chart-grouped-line',
    path: '/finanzas/estadisticas/',
    key: 'estadisticas',  // para encontar la ruta en los guard
    roles: [Role.god] 
  } ,

  
 ]
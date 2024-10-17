import { reduce } from 'rxjs'
import  {menuItems} from './menu'
import  {message} from './message'



export const settings = {

  Title: 'ZARZAland', //para mostar en pantalla
  Title_color: 'red' ,
  app: '',         // pra acceder al server (no se si lo voy a usar)
  menuItems,
  message,
  table : {
    pageSize: 10
  }

  

}


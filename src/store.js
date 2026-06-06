export const initialStore=()=>{
  return{
    personajes: [],
    planetas: [],
    vehiculos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_personajes':
      return { ...store, personajes: action.payload }
    case 'set_planetas':
      return { ...store, planetas: action.payload }
    case 'set_vehiculos':
      return { ...store, vehiculos: action.payload }
    default:
      throw Error('Unknown action.');
  }
}

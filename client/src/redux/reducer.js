import { FILTER_VIDEOGAMES_ORDER, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from './actions'

const initialState = {
  videogames: [],
  auxVideogames: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        auxVideogames: action.payload
      }
    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        auxVideogames: state.videogames,
        videogames: action.payload
      }
    case FILTER_VIDEOGAMES_ORDER:
      return {
        ...state,
        auxVideogames: state.videogames,
        videogames: state.videogames.sort()
      }
    default:
      return {
        ...state
      }
  }
}

// function selectOrder (state, order) {
//   if (order === 'a-z') {
//     console.info('a-z')
//     return [...state.videogames].sort((a, b) => a.name - b.name)
//   } else if (order === 'z-a') {
//     console.info('z-a')
//     return [...state.videogames].sort((a, b) => b.name - a.name)
//   } else {
//     console.info('random')
//     return state.auxVideogames
//   }
// }

export default rootReducer

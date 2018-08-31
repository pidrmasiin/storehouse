
import itemService from '../services/itemService'

const itemsReducer = (store = [], action) => {
  if (action.type === 'GET_ALL') {
    return action.data
  }
  return store
}

export const getItems = () => async (dispatch) => {
  const all = await itemService.getAll()
  dispatch({
    type: 'GET_ALL',
    data: all,
  })
}


export default itemsReducer

import axios from 'axios'

const baseUrl = '/api/categories'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const add = async (category) => {
  const response = await axios.post(baseUrl, category)
  return response.data
}

export default {
  getAll,
  remove,
  add,
}

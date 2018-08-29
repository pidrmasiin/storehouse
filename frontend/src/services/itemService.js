import axios from 'axios'

const baseUrl = '/api/items'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  }

const add = async (item) => {
    const response = await axios.post(baseUrl, item)
    return response.data
  }

  export default {
    getAll,
    remove,
    add
  }
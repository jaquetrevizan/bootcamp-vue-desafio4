import axios from 'axios'

const getAlbumsList = async () => {
  const resp = await axios.get(
    'https://jsonplaceholder.typicode.com/users/1/albums'
  )
  return resp.data
}

const getPhotos = async id => {
  const resp = await axios.get(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos`
  )
  return resp.data
}

export { getAlbumsList, getPhotos }

import axios, { AxiosResponse } from 'axios'
import { GenericResponse } from '../../../@types/global'
import { Feed } from '../types/feedTypes'

const fetchFeeds = async ({ pageParam }: { pageParam: number | '' }) => {
  const apiRes = await axios.get<object, AxiosResponse<GenericResponse<Feed>>>(
    `https://localhost:4000/app-api/v1/photo-gallery-feed-page/page/${pageParam}`,
  )

  if (apiRes.status !== 200) {
    throw new Error(`page ${pageParam} fetch not ok`)
  }

  return apiRes.data
}

export default fetchFeeds

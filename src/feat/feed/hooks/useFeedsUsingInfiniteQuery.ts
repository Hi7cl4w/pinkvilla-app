import { useInfiniteQuery } from '@tanstack/react-query'
import fetchFeeds from '../api/fetchFeeds'

const useFeedsUsingInfiniteQuery = () => {
  const query = useInfiniteQuery({
    queryKey: ['fetchFeeds', { page: 1 }],
    queryFn: fetchFeeds,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages, lastPageParam) => {
      const index = allPages.findLastIndex((page) => page.nodes.length === 0)
      if (index !== -1) {
        return undefined
      }
      return lastPageParam + 1
    },
  })

  return query
}
export default useFeedsUsingInfiniteQuery

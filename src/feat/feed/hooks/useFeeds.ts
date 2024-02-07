import { useQuery } from '@tanstack/react-query'
import { useMachine } from '@xstate/react'
import { useEffect } from 'react'
import fetchFeeds from '../api/fetchFeeds'
import { feedMachine } from '../state/feedMachine'

const useFeeds = (loadNextPage: boolean) => {
  const [state, send] = useMachine(feedMachine)
  const query = useQuery({
    queryKey: ['fetchFeeds', { pageParams: state.context.page }],
    queryFn: () => fetchFeeds({ pageParam: state.context.page }),
  })

  useEffect(() => {
    if (query.data && query.data?.nodes.length > 0 && loadNextPage) {
      send({ type: 'FETCH_FEEDS_NEXT_PAGE', page: state.context.page + 1 })
    }
  }, [loadNextPage, query.data])

  useEffect(() => {
    if (!query.isLoading) {
      send({ type: 'LOADED_FEEDS' })
    }
  }, [query.isLoading])

  useEffect(() => {
    if (!query.isFetching) {
      send({ type: 'FEEDS_NEXT_PAGE_COMPLETE' })
    }
  }, [query.isFetching])

  useEffect(() => {
    if (query.data && query.data?.nodes.length > 0) {
      send({ type: 'FEEDS_LOADED', value: query.data?.nodes })
    }
  }, [query.data])

  return { state }
}
export default useFeeds

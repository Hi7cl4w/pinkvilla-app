'use client'
import { useCallback, useRef, useState } from 'react'
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver'
import useFeeds from '../../hooks/useFeeds'
import { FeedItem } from '../FeedItem'

export interface FeedListProps {}

const FeedList: React.FC<FeedListProps> = (props) => {
  const [page, setPage] = useState(1)
  const pageLastRef = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(pageLastRef)

  const nextPage = useCallback(() => {}, [])

  // const [state, send, todoMachineService] = useMachine(feedMachine)

  const { state } = useFeeds(isIntersecting)
  const { feeds } = state.context

  return (
    <div className="flex flex-col gap-2">
      {state.value === 'loading'
        ? Array(10)
            .fill(0)
            .map((_, i) => <FeedItem key={i} loading={true} />)
        : feeds && (
            <>
              {feeds.map((feed) => (
                <FeedItem
                  key={feed.node?.nid}
                  loading={state.value === 'loading'}
                  data={feed.node}
                />
              ))}
            </>
          )}
      {state.value === 'fetching' &&
        Array(10)
          .fill(0)
          .map((_, i) => <FeedItem key={i} loading={true} />)}
      <div ref={pageLastRef}></div>
    </div>
  )
}

export default FeedList

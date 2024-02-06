'use client'

import { Skeleton } from '@nextui-org/react'
import clsx from 'clsx'
import { toDateTimeZoneFormat } from '../../../../util/date'
import { Feed } from '../../types/feedTypes'
import styles from './FeedItem.module.scss'

export interface FeedItemProps {
  loading?: boolean
  data?: Feed
}

const FeedItem: React.FC<FeedItemProps> = ({ loading, data }) => {
  return (
    <div
      className={clsx(
        'p-6 w-unit-8xl mx-auto bg-white rounded-xl  grid  grid-cols-12 items-stretch justify-stretch space-x-4',
        styles.feedItem,
      )}
    >
      {/*  <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div> */}
      <div className="col-span-5 flex justify-center items-center">
        {loading ? (
          <Skeleton className="rounded-lg w-full h-full">
            <div
              className={clsx('rounded-3xl object-cover w-full', styles.image)}
            />
          </Skeleton>
        ) : (
          <img
            className={clsx('rounded-3xl  object-cover w-full', styles.image)}
            src={data?.field_photo_image_section}
            alt={data?.title}
          />
        )}
      </div>
      <div className="col-span-7 flex flex-col items-start gap-1">
        {loading ? (
          <div className={clsx('space-y-2 w-full', styles.title)}>
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        ) : (
          <div
            className={clsx(
              'text-xl font-semibold  title-font text-gray-700',
              styles.title,
            )}
          >
            {data?.title}
          </div>
        )}
        {loading ? (
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        ) : (
          <p className="text-slate-500">
            {data?.last_update && toDateTimeZoneFormat(data.last_update)}
          </p>
        )}
      </div>
    </div>
  )
}

export default FeedItem

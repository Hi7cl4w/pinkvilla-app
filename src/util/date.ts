import * as dayjs from 'dayjs'
import advanced from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(advanced)

export const toDateTimeZoneFormat = (unixTime: number): string | undefined => {
  const date = dayjs.unix(unixTime).tz('Asia/Kolkata')
  if (date.isValid()) {
    const str = date.format('YYYY-MM-DD HH:mm z')
    return str
  }
  return undefined
}

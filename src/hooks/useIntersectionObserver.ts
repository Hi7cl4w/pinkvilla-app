import { MutableRefObject, useEffect, useRef, useState } from 'react'

const useIntersectionObserver = (ref: MutableRefObject<HTMLElement | null>) => {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    )
  }, [])

  useEffect(() => {
    if (ref.current) observerRef.current?.observe(ref.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [ref])

  return isIntersecting
}
export default useIntersectionObserver

import { render } from '@testing-library/react'
import FeedItem from './FeedItem'

describe('FeedItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedItem />)

    expect(baseElement).toBeTruthy()
  })
})

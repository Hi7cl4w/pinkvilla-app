import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <></>
    </QueryClientProvider>
  )
}

export default App

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/main'
import ActiveTickerProvider from './providers/activeTickerProvider'

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <ActiveTickerProvider>
      <Main />
    </ActiveTickerProvider>
  </Suspense>
)

ReactDOM.render(<App />, document.getElementById('app'))

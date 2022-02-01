import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/main'

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Main />
  </Suspense>
)

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import MyRoutes from './Routes/MyRoutes'
const App = () => {
  return (
    <div>
      <Router>
        <MyRoutes/>
      
      </Router>


    </div>

  )
}

export default App
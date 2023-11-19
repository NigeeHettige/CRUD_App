import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './Student';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' elemant={<Student/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './student';
import 'bootstrap/dist/css/bootstrap.css';
import CreateStudent from './createStudent';
import UpdateStudent from './UpdateStudent';


function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>}></Route>
          <Route path='/create' element={<CreateStudent/>}></Route>
          <Route path='/update/:id' element={<UpdateStudent/>}></Route>
          
        </Routes>
      </BrowserRouter>
  
  );
}

export default App

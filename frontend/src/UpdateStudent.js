import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateStudent() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,{name,email})
        .then(res =>{
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

  return (
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='John' className='form-control' onChange={e => setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='abc@gmail.com' className='form-control' onChange={e => setEmail(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>Update</button>


            </form>
        </div>
   </div>
  )
}


export default UpdateStudent

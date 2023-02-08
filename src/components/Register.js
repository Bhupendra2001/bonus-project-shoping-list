//import {Navbar,  Nav} from 'react-bootstrap/'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import React,{useState} from 'react';

import {NavLink} from 'react-router-dom'
const Register = () => {
    const [input , setInput] = useState({
      name : '',
      email : '',
      date : '',
      password : ''
    })

    const [data , setData ]=useState([])
   
   const getData = (e)=>{
   const { value , name } = e.target;
  
   setInput(()=>{
    return {
      ...input,
      [name]: value
    }    
   })
  }

  const addData = (e)=>{
    e.preventDefault();
    const {name, email ,date , password} = input;

    if(name === ""){
      alert("name field is requred")
    }
    else if(email === "" ){
      alert("email field is requred")
    }
    else if(!email.includes('@')||!email.includes('.')){
      alert("email field is incorrect requred")
    }
    else if(date === "" ){
      alert("date field is requred")
    }else if(password === "" | password.length < 5){
      alert("password field is requred and greater then 5")
    }else{
      console.log('data added succesfully');
      localStorage.setItem("bhupendra" , JSON.stringify([...data, input]))
    }

  }

  return (
    <>
      <div className='container'>
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3 p-3' style={{ width: '100%' }}>
            <h3 className='text-center col-lg-6'>sign Up</h3>
            <Form>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" name = 'name'  onChange={ getData} placeholder="Enter Your Name" />
              </Form.Group>



              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" name = 'date' onChange={ getData} placeholder="Enter Your birth-Day" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name = 'email'  required onChange={ getData}  placeholder="Enter email" />
              </Form.Group>


              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                <Form.Control type="password"  name = 'password' onChange={ getData} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" className='col-lg-6' onClick={addData} type="submit">
                Submit
              </Button>
            </Form>
            
            <p> Already Have an Account <span><NavLink to='/login'>Login</NavLink></span></p>
          </div>
         
         <Sign_img/>

        </section>

      </div>

    </>
  )
}
export default Register
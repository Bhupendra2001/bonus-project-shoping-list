import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from "./Sign_img";
import { NavLink , useNavigate} from 'react-router-dom'
const Login = ()=>{

    const history = useNavigate();
    const [input , setInput] = useState({
       
        email : '',
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

    const getUserArr = localStorage.getItem('bhupendra')
   console.log(getUserArr);
    const { email , password} = input;

    if(email === "" ){
      alert("email field is requred")
    }
    else if(!email.includes('@')||!email.includes('.')){
      alert("email field is incorrect requred")
    }else  if(password === "" | password.length < 5){
      alert("password field is requred and greater then 5")
    }else{

     if(getUserArr && getUserArr.length){
        const userdata =  JSON.parse(getUserArr);
       const userLogin = userdata.filter((ele,k)=>{
        return ele.email === email && ele.password === password
       });

       if(userLogin.length === 0){
        alert('invalid details')
       }else{
        alert('user login successfully')
        localStorage.setItem("user_login",JSON.stringify(userLogin))
        history("/details")
       }
     }
     
    }

  }
    return (
        <>
         <div className='container'>
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3 p-3' style={{ width: '100%' }}>
            <h3 className='text-center col-lg-6'>sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name = 'email' onChange={ getData}  placeholder="Enter email" />
              </Form.Group>


              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password"  name = 'password' onChange={ getData} placeholder="Password" />
              </Form.Group>

        <Button className="y" variant="danger">Danger</Button>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" className='col-lg-6' onClick={addData} type="submit">
                Submit
              </Button>
            </Form>
             
            <p> If you new user First <span><NavLink to='/'>Ragister</NavLink> After Login</span></p>
          </div>
         
          <Sign_img/>

        </section>

      </div>
</>
    )
}

export default Login
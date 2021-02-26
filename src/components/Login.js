import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ user, setUser ] = useState({
    login: {
      username: '',
      password: '',
    },
  });
  const [ error, setError ] = useState('')

  const handleChange = (e) => {
    setUser({
      login: {
        ...user.login,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user.login)
      .then(res => {
        // console.log(res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblespage');
      })
      .catch(err => {
        console.log(err)
        setError('Username or Password not valid')
      })
  }

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input 
              name='username'
              type='text'
              placeholder='Username'
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              name='password'
              type='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <p style={{ color: `red`, fontSize: "12px" }}>{error}</p>

          <button>Log In</button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
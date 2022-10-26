import React, { useState } from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import {useNavigate} from 'react-router-dom'; //navigation on enter
import styled from 'styled-components';


function Search() {

const [input, setInput] = useState("");  
// use state on the input to get the value from the input
const navigate = useNavigate();

const submitHandler = (e) =>{
    e.preventDefault();
    //* normal behavior on forms is for a page refresh, this prevents it - fase 1 - */
    navigate('/searched/' + input);
}

  return (
    <div>
        <FormStyle onSubmit={submitHandler}> {/* connets form to submit handler*/}
            <div>
                <BiSearchAlt2/>
                <Input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/> {/*e target value is how you get the value of the target*/}
            </div>
             </FormStyle>

    </div>
  )
}

export default Search

const FormStyle = styled.form`

div {
    width: 100%;
    position: relative;
  }

svg {
    position: absolute;
    top:5px;
    right: 5%;
    color: white;
    font-size: 20px;
  }
`;

const Input = styled.input`
color: white;
font-family: 'Inter', sans-serif;
height: 28px;
width: 258px;
background: rgba(196, 196, 196, 0.3);
border-radius: 8px;
border: none;
padding-left: 28px;

:focus{
    outline: none;
}

@media (max-width:800px){
    width: 100%;
    padding-left: 8px;
  }



`;
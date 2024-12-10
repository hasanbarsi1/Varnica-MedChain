import React from 'react'
import CardNeo from '../component/cardNeo'
import './Expense.css';
import {useForm} from 'react-hook-form';
import ButtonNeo1 from '../component/ButtonNeo1'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const {register,handleSubmit,formState,reset} = useForm();
    const {errors} = formState;
    const navigate = useNavigate();
  
  
    const onSubmit = (data) => {
      console.log(data); // Log the form data
      reset();
    };
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#e5ebf0]'>
      <CardNeo className = "flex flex-col items-center justify-center" w = "250px" h = "400px" >
      <i className="bx bx-lock-alt text-[75px] bg-transparent "></i>
     
        
        <form onSubmit={handleSubmit(onSubmit)}  noValidate className="form">
            <input type="text" className="input" id="Nama" placeholder="Nama" {...register('Nama',{required: 'Budget is required'})}/>
            <input type="text" className="input" id="Kolej" placeholder="Kolej" {...register('Kolej',{required: 'Expense is required'})}/>
            <input type="text" className="input" id="Universiti" placeholder="Universiti" {...register('Universiti',{required: 'Bank is required'})}/>
            <ButtonNeo1 onClick2={() => navigate('/Home')} w="150px" h= "40px" className="mt-[20px] text-black" type="submit" >Submit</ButtonNeo1>
           
        </form>
    
      </CardNeo>
    </div>
  )
}

export default Login

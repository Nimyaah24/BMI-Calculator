
import { useState } from 'react'
import './App.css'

function App() {
const [Weight,setWeight] = useState(0)
const [height,setHeight] =useState(0)
const [bmi,setBmi] = useState('')
const [msg,setMsg] = useState('')

let findBMI =(e)=>{

  e.preventDefault()
  
  if(Weight === 0 || height === 0){
    alert('please enter your height and weight  ')
  }else{
    let bmi = (Weight/(height*height)*703)
    setBmi(bmi.toFixed(2))

    if(bmi<25){
      setMsg('You are underweight')
    }
    else if(bmi >=25 && bmi < 30){
      setMsg('You are healthy body')
    }
    else{
      setMsg('You are overweight')
    }
  }
}

let reaload =()=>{
  window.location.reload()
}
  return (
    <>
      
     <div  className='d-flex justify-content-center p-4  aligin-items-center mt-5'>

     <div className='bg-transparent shadow-xl shadow-black shadow p-5 rounded' style={{ width: "350px" }}>

     <h3><span style={{color:"brown"}} >BMI</span> Calculator </h3>
  
        <form onSubmit={findBMI} className='mt-4 '>
          <div>
           <h6>Height <span className='text-secondary'>(in)</span></h6>
            <input value={height || ""} onChange={(e)=>setHeight(e.target.value)}   type="text" placeholder='enter your height' className='form-control' />
            
          </div>
          <div>
          <h6 className='mt-3'>Weight <span className='text-secondary'>(kg)</span></h6>
          <input type="text"  value={Weight || ""} onChange={(e)=>setWeight(e.target.value)} placeholder='enter your Weight' className='form-control' />
          </div>
          <div className='d-flex p-3 ' >
            <button  className=' btn1 btn-secondary rounded mt-3 ms-2 me-4 '  style={{width:"40%"}}>Calculate</button>
            <button onClick={reaload} className='btn btn-dark rounded mt-3 ' style={{width:"40%"}}>Reload</button>
          </div>
        </form>



<div className='output mt-3'>
<h6>Your BMI is : </h6>
<p id='bi'>{bmi}</p>
<h5 style={{color:"brown"}}>{msg}</h5>
</div>

        </div>

      </div>

   

    </>
  )
}

export default App

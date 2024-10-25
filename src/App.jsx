
import './App.css'
import { useDispatch , useSelector } from 'react-redux'
import { decrement, increment , reset , changeRange} from './redux/counterSlice'
import { useState } from 'react'

function App() {
  const [range,setRange]=useState(0)
  const count=useSelector((state)=>state.counter.value)
  console.log(count);
  const dispatch=useDispatch()

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'  style={{width:"100%",height:"100vh",backgroundColor:"black",}}>
      <div className="p-5 bg-light rounded-0" style={{width:"500px"}}>

        <h1 className='text-center text-primary'>Counter Application</h1>
        <h1 className='my-5 text-center' style={{fontSize:"70px"}}>{count}</h1>
        <div className="d-flex justify-content-evenly">
          <button onClick={()=>dispatch(decrement())} className="btn btn-warning">Decrement</button>
          <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
          <button onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
          

        </div>
        <div className='d-flex  mt-5'>
            <input type="text" className="form-control" placeholder='range' onChange={(e)=>setRange(e.target.value)}/>
            <button className='btn btn-primary ms-3' onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>
          </div>
      </div>

      </div>
    </>
  )
}

export default App

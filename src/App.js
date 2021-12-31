import React,{useState ,useEffect}  from "react"
import "./App.css";
import Home from "./Home"
function App() {
  const [count,setCount]=useState(0)
  const [show,setShow]=useState(false);
  const handleIncrement=()=>{
    setCount(count+1)
  }

  const handleDecrement=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  const handleShow=()=>{
    show ? setShow(false):setShow(true)
  }
 useEffect(()=>{
  console.log('this component is mounting')
 },[])
/*  useEffect(()=>{
   console.log('the component is updationg ')
 },[count]) */
  
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={handleIncrement}>+</button>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>-</button>
      <div>
      <button onClick={handleShow}>Show</button> 
      </div>
     {show ? <Home/>:'no component'} 
    </div>
  );
}

export default App;

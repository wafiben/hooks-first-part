import React, {useEffect}from 'react'
 const Home = () => {
     useEffect(()=>{
         return ()=>{
             console.log('this component is removed')
         }
     })
    return (
        <div>
            <h1>Home component</h1>
        </div>
    )
}

export default Home

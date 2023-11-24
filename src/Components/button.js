import React, {useState} from 'react'

function Button(){
    
    const [count,setCount] = useState(0)
    
    function click(){
        setCount = count + 1
    }
    return(
        <button onClick={click}>Clicked {count} times</button>
    );
}

export default Button;
import React, { useState } from "react";
import reactLogo from './../assets/react.svg'

const Home = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
        <div>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <div className="card">
            <button onClick={()=>setCount((count)=>count-1)}>-</button>
            <button>
            count is {count}
            </button>
            <button onClick={()=>setCount((count)=>count+1)}>+</button>
        </div>
            <h2>A Simple PWA App </h2>
        </div>
    );
};

export default Home;

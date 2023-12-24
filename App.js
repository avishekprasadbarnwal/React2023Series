// importing React, ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

let element = <div>
    <h2 className="first_class">First Element</h2>
</div>;

let ReactChildComponent = () => {
    return (
        <div>
            <p>This is a child Component!!</p>
        </div>
    )
}

let ReactComponent = () => {
    return (
        <div>
            {element}
            {/* 
                All the below 3 method of calling the Child component will give the same output
                Note: The last calling is like a func because the React component is basically a normal function
            */}
            <ReactChildComponent />
            <ReactChildComponent></ReactChildComponent>
            {ReactChildComponent()}
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

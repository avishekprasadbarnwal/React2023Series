{
    /* 
        <div class="parent">
            <div class="child">
                <h1 class="sibling1">Sibling 1 text</h1>
                <h2 class="sibling2">Sibling 2 text</h2>
            </div>
        </div> 
    */
}

// importing packages from node modules
import React from "react";
import ReactDOM from "react-dom/client"; 

let createdelement = React.createElement(
    "div", 
    {
        id: "parent",
        data_core_react: "core react element"
    },
    React.createElement(
        "div", 
        {
            id: "child"
        },
        [
            React.createElement(
                "h1", 
                {
                    id: "sibling1"
                },
                "Sibling 1"
            ),
            React.createElement(
                "h2", 
                {
                    id: "sibling2"
                },
                "Sibling 2"
            )
        ]
    )
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createdelement);
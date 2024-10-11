import React from "react"

import  ReactDOM  from "react-dom/client"

// h1 tag using JSX

const jsx = (<h1 className="head">Hello Everyone By JSX</h1>)

const root = ReactDOM.createRoot(document.getElementById('root'))

// Babel transpiles JSX into React Element and React Element will be converted into HTML by rendering

root.render(jsx)

// React Element

const Element = React.createElement(
    'p',
    {id:"para"},
    "Hello Everyone"
    );

// React functional Component

const ReactComponent = () =>{
    return <div className="component">
    <h1 id="component-1"> React Functional Component</h1>
    </div>
}
 // component composition - component inside component

 const variable = "Variable"

const SecondComponent = () =>{
   return (<div className="Comp">
   {Element}
    <ReactComponent/>
    </div>)
}

const Element1 = React.createElement(
    "h3",
    {id:"element"},
    "React Component inside React Component"
)

const Component1 = () =>{
    return( 
     {Element1}
    )   
}

root.render(<Component1/>)




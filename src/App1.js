import React from 'react'
export default function App() {

       const thingsArray = ["Thing 1", "Thing 2"]
    const element=thingsArray.map(ele=>{return(<p>{ele}</p>)});

    return (
        <div>
            <button onClick={handleAdd}>Add Item</button>
            {element}
            
        </div>
    )

    function handleAdd(){
        thingsArray.push('Thing '+(thingsArray.length+1));
        console.log(thingsArray);

    }
}

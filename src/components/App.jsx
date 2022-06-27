import React from "react";

function App() {
const [item, setitem] = React.useState("")
const [additem, setadditem] = React.useState([])

function handlechange(event){
  const newitem = event.target.value
  setitem(newitem)
  
  // setitem([...item])
  // console.log(item);
}

function handleclick(){
  setadditem(function (prevValue){
    return [...prevValue, item]
  });

 setitem("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange= {handlechange} type="text" />
        <button onClick = {handleclick} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>

          {additem.map(function(singleitem){
            return (<li>{singleitem}</li>)
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;

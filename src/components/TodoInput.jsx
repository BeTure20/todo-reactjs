import {useState} from "react";

function TodoInput(props) {
    const {handleAddTodo} = props;
    const [inputValue, setinputValue] = useState('');
    return (
       <div className="input-container">
           <input value={inputValue} onChange={(e)=>setinputValue(e.target.value)} placeholder="Add Task"/>
           <button onClick={()=>{if (!inputValue){return}
               handleAddTodo(inputValue)
               setinputValue("")
           }}>
               <i className="fa-solid fa-plus"></i></button>
       </div>
    )
}

export default TodoInput
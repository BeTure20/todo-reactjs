import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState,useEffect} from "react";

function App() {
    // const todos = [
    //     { input: 'Hello! Add your first todo!', complete: true },
    //     { input: 'Get the groceries!', complete: false },
    //     { input: 'Learn how to web design', complete: false },
    //     { input: 'Say hi to gran gran', complete: true },
    // ]
    const [todos, setTodos] = useState([]);
    const [selectedTab, setSelectedTab] = useState("All");

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, {input: newTodo, complete: false}];
        setTodos(newTodoList)
        handleSaveData(newTodoList);
    }

    function handleCompleteTodo(index)
    {
        //update/edit
        let newTodoList = [...todos];
        let completedTodo = todos[index];
        completedTodo['complete']= true;
        newTodoList[index] = completedTodo;
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }
function handleSaveData(currTodo)
{
    localStorage.setItem("todo-app",JSON.stringify({todos:currTodo}))
}
    function handleDeleteTodo(index)
    {
        let newTodoList = todos.filter((val,valIndex)=>{
            return valIndex !== index;
        })
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    useEffect(() => {
        if (!localStorage || !localStorage.getItem("todo-app")) {return;}
        let db=[];
        db=JSON.parse(localStorage.getItem("todo-app"));
        setTodos(db.todos);


    }, []);
    return (
        <>
            <Header todos={todos}/>
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                todos={todos}/>
            <TodoList
                handleCompleteTodo={handleCompleteTodo}
                selectedTab={selectedTab}
                       handleDeleteTodo={handleDeleteTodo}
                       todos={todos}/>
            <TodoInput handleAddTodo={handleAddTodo}/>
        </>
    )
}

export default App

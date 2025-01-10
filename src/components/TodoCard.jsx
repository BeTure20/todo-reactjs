function TodoCard(props) {
    const {todo,handleDeleteTodo,handleCompleteTodo,todoindex} = props;

    return (
        <div className="card todo-item">
            <p className="card-text">{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={()=>{
                    handleCompleteTodo(todoindex)
                }} disabled={todo.complete}><h6>Done</h6></button>
                <button onClick={()=>{
                    handleDeleteTodo(todoindex)
                }}><h6>Delete</h6></button>
            </div>
            </div>
    )
}

export default TodoCard
import TodoCard from "./TodoCard.jsx";


function TodoList({todos,selectedTab,handleDeleteTodo,handleCompleteTodo}) {
   const openTasks = todos.filter((todo) => !todo.complete);
    const completedTasks = todos.filter((todo) => todo.complete);

    const filterTodosList =
        selectedTab === "All" ? todos :
            selectedTab === "Open" ? openTasks :
                completedTasks;

    return (
        <>
            {filterTodosList.map((todo, todoindex) => {
                return (
                    <TodoCard

                        key={todoindex}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCompleteTodo={handleCompleteTodo}
                        todoindex={todos.findIndex(val => val.input===todo.input)}
                        todo={todo}/>
                )
            })}
        </>
    )
}

export default TodoList
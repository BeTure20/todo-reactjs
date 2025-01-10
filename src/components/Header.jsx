function Header(props) {
    const todos = props;
    const todolength = todos.length;
    const isTasksPlural = todos.length !== 1;
    const taskOrTasks = isTasksPlural ? "tasks" : "task";

    return (
        <header className="App-header">
            <h1 className="text-gradient">You have {todolength} open {taskOrTasks}.</h1>
        </header>
    )
}

export default Header

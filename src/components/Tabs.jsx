function Tabs({todos,selectedTab,setSelectedTab}) {

    const tabs = ["All", 'Open', "Completed"];
    // Precompute task counts
    const totalTasks = todos.length;
    const openTasks = todos.filter((todo) => !todo.complete).length;
    const completedTasks = todos.filter((todo) => todo.complete).length;

    return (
        <nav className="tab-container">
            {tabs.map((tab, index) => {
                const numOfTasks =
                    tab === "All" ? totalTasks :
                        tab === "Open" ? openTasks :
                            completedTasks;

                return (
                    <button  onClick={() => setSelectedTab(tab)} key={index} className={"tab-button " + (tab === selectedTab ?'tab-selected':'')}>
                        <h4>{tab} ({numOfTasks})</h4>
                    </button>
                );
            })}
            <hr/>
        </nav>
    )
}

export default Tabs
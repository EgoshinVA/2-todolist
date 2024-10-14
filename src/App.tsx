import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const [tasks1, setTasks1] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const createTask = (title: string) => {
        setTasks1([...tasks1, {id: tasks1[0] ? tasks1[tasks1.length-1].id + 1 : 1, title: title, isDone: false}])
    }

    const completeTask = (taskId: number) => {
        setTasks1(tasks1.map(task => task.id === taskId ? {...task, isDone: !task.isDone} : task))
    }

    const removeTask = (taskId: number) => {
        setTasks1(tasks1.filter(task => task.id !== taskId))
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let filteredTasks = tasks1
    if (filter === 'active') {
        filteredTasks = filteredTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = filteredTasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <Todolist completeTask={completeTask} title="What to learn" tasks={filteredTasks} removeTask={removeTask}
                      changeFilter={changeFilter} createTask={createTask}/>
        </div>
    );
}

export default App;

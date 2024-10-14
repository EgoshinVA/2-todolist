import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {Input} from "./Input";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValuesType) => void
    completeTask: (taskId: number) => void
    createTask: (title: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, completeTask, createTask}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <Input createTask={createTask}/>
            </div>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {tasks.map((task) => {
                            return <li key={task.id}><input onChange={() => completeTask(task.id)} type="checkbox" checked={task.isDone}/><span>{task.title}</span>
								<Button callBack={() => removeTask(task.id)} title={'x'}/>
                            </li>
                        })}
                    </ul>
            }
            <div>
                <Button callBack={() => {changeFilter('all')}} title={'All'}/>
                <Button callBack={() => {changeFilter('active')}} title={'Active'}/>
                <Button callBack={() => {changeFilter('completed')}} title={'Completed'}/>
            </div>
        </div>
    )
}

import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type InputPropsType = {
    createTask: (title: string) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    const [title, setTitle] = useState<string>('')

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickCreateTask = () => {
        props.createTask(title)
        setTitle('')
    }

    return (
        <div>
            <input onChange={onInputChangeHandler} value={title} type="text"/>
            <Button callBack={onClickCreateTask} title={'+'}/>
        </div>
    );
};

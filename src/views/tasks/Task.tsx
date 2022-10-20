import React, {useState} from "react";
import {List} from "../../types/list";
import {Switch} from "@mui/material";
import "../../assets/scss/list-item.scss";
import "../../assets/scss/custom-switch.scss";

type TaskItemListProps = {
    task: List.TaskItem,
}
function Task(props: TaskItemListProps) {
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return (
        <div className={"task__list-item list-item"}>
            <span className={"task__decor"}></span>
            <div className={"list-item__info"}>
                <p className={`list-item__title ${checked ? 'is-checked' : ''}`}>
                    {props.task.title}
                </p>
                <p className={"list-item__description"}>
                    {props.task.description}
                </p>
            </div>
            <div className={"list-item__switch"}>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    className={"custom-switch"}/>
            </div>
        </div>
    );
}

export default Task;

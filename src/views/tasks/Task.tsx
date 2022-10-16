import React from "react";
import {List} from "../../types/list";

type TaskItemListProps = {
    task: List.TaskItem,
}
function Task(props: TaskItemListProps) {
    return (
        <div className={"task__list-item list-item"}>
            <span className={"task__decor"}></span>
            <div className={"list-item__info"}>
                <p className={"list-item__title"}>
                    {props.task.title}
                </p>
                <p className={"list-item__description"}>
                    {props.task.description}
                </p>
            </div>
        </div>
    );
}

export default Task;

import React from 'react';
import {useTasksList} from "./use/useTasksList";
import {List} from "../../types/list";
import "./../../assets/scss/task.scss";
import TaskAccordion from "./TaskAccordion";
import {DateTask} from "./enum";
import TodayTask from "./TodayTask";

function TasksList() {
    const { list } = useTasksList();

    return (
        <div>
            {list.map((task: List.Item) =>
                <div key={task.id} className={"task"}>
                    {(task.date.toUpperCase() === DateTask.TODAY.toUpperCase()) ?
                        <TodayTask task={task}/> :
                        <TaskAccordion task={task}/>
                    }
                </div>
            )}
        </div>
    );
}

export default TasksList;

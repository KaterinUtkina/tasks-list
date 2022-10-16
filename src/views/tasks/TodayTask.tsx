import {List} from "../../types/list";
import Task from "./Task";
import React from "react";
import {Checkbox, Paper} from "@mui/material";
import "./../../assets/scss/task.scss";

type TodayTaskProps = {
    task: List.Item
};
function TodayTask(props: TodayTaskProps) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <div className={"task--today"}>
            <div className={"task__summary"}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    sx={{
                        color: "white",
                        "&.Mui-checked": {
                            color: "white",
                        },
                    }}
                />
                <p className={"list-item__title"}>
                    {props.task.date} Tasks
                </p>
            </div>
            {(checked) ?
                <Paper
                    variant="outlined"
                    className={"task__paper"}>
                    {props.task.tasks.map((item, index) =>
                        <Task key={index} task={item}/>
                    )}
                </Paper> : <></>}
        </div>
    );
}

export default TodayTask;

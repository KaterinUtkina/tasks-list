import React from 'react';
import {List} from "../../types/list";
import {Accordion, AccordionDetails, AccordionSummary, Paper} from "@mui/material";
import "../../assets/scss/accordion.scss";
import "../../assets/scss/task.scss";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Task from "./Task";

type TaskItemProps = {
    task: List.Item
};
function TaskAccordion(props: TaskItemProps) {
    return (
        <Paper
            variant="outlined"
            className={"task__paper"}>
            <Accordion className={"accordion"}>
                <AccordionSummary
                    expandIcon={<ExpandCircleDownIcon />}
                >
                    <span className={"task__decor"}></span>
                    {props.task.date} Tasks
                </AccordionSummary>
                <AccordionDetails>
                    {props.task.tasks.map((item, index) =>
                        <Task key={index} task={item}/>
                    )}
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
}

export default TaskAccordion;

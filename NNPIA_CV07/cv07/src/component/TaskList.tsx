import React, {useState} from "react";
import {Task} from "../data/init-data";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TaskCard from "./TaskCard";
interface Props{
    taskList: Array<Task>
}
export const TaskList = ({taskList}: Props) =>{

    //const [taskList, setTaskList] = useState<Array<Task>>(tasks);


    const taskDoneHandle = (task: Task) =>{
        //setTaskList([...taskList]);
    }

    return <Container  maxWidth="sm">
        <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
        >Aktuální tasky</Typography>

        {taskList.filter(t => !t.done).map(t =>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>)}

        <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
        >Splněné tasky</Typography>

        {taskList.filter(t => t.done).map(t =>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>)}

    </Container>
}
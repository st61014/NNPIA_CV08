import TaskCard from "../component/TaskCard";
import {Task, tasks} from "../data/init-data";
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {TaskList} from "../component/TaskList";
interface Props{

}
const Tasks = ({}: Props) => {
    const [taskList, setTaskList] = useState<Array<Task>>(tasks);
    useEffect(()=>{
        fetchData();

    }, [])

    const fetchData = async () =>{
        const result = await fetch("http://localhost:9000/api/v1/task")
        const data = (await result.json() as Array<Task>);
        /*
        data.map(t: Task =>{
        })
        */
        console.log(data);
    }
return <TaskList taskList={taskList}/>

}

export default Tasks;
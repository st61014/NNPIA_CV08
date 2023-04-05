import TaskCard from "../component/TaskCard";
import {tasks} from "../data/init-data";
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {TaskList} from "../component/TaskList";
interface Props{

}
const Tasks = ({}: Props) => {
    useEffect(()=>{
        fetchData();

    }, [])

    const fetchData = () =>{
        const result = fetch("http://localhost:9000/api/v1/task")
        console.log(result);
    }
return <TaskList tasks={tasks}/>

}

export default Tasks;
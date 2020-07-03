import { useState, useEffect } from 'react';
import axios from 'axios';


const useTasks = () => {
    const[tasks,setTasks] = useState([]);

    const requestTasks = async() =>{
        await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-ana-irala')
        .then((response) => {
            setTasks(response.data)
            }).catch((error) => {
                console.log("erro")
            });
        
    };

    useEffect(() => {
        requestTasks();
        
    }, []);

    return [tasks,requestTasks];
};

export default useTasks;
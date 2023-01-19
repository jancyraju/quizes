import React,{useState,useEffect} from "react";
import {useHistory} from 'react-router-dom';

function Login () {
    const [name,setName]=useState();
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push("/add")
        }
    },[])

    return (
        <h1>Rank</h1>
    )
}

export default  Login;
import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/sanjana271')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github repositories: {data.public_repos}
        <img src={data.avatar_url} alt="git picture" width={"300"}/></div>
    )
}{/*followers is already a key in github so can access diectly*/}

export default Github
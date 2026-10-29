"use client"
import React, { useEffect, useState } from 'react'


const Dashboard = () => {
    const [time, setTime] = useState<Date | null>(null)
     
    useEffect(()=>{
        setTime(new Date());
    }, [])
   
    if(!time){
        return <div>Loading...</div>
    }

    

 
    return (
    <div className="ml-5 text-[25px]">{time.getHours()>12? "Good day": "Good morning"} <span className="text-primary">forex</span> trader!</div>
  )
}

export default Dashboard
"use client"
import React from 'react';
import { useTimer } from 'react-timer-hook';

function TimerFunc({ expiryTimestamp, onExpire}) {
  const {
    totalSeconds,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ 
        expiryTimestamp,
        onExpire: () => onExpire() 
       })
  
   return (
        <div className = "fixed w-screen text-center text-orange-400 font-bold text-6xl pt-3 pointer-events-none">{totalSeconds}s</div>
    );
}

export default function Timer({onExpire}) {
    const seconds = 15;
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    return (
        <>
        <TimerFunc expiryTimestamp={time} onExpire={onExpire}/>
        </>
    );
}
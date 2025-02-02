import React from 'react';
import { useNavigate } from 'react-router-dom';


import { useTimer } from 'react-timer-hook';

function MyTimer({duration}) {

const navigate=useNavigate()

  
  console.log(duration)
  let time = new Date();
  time = new Date(time.getTime() + duration * 60000)
  const expiryTimestamp=time;
  const {
   
    seconds,
    minutes,
    hours,
    days,
    
  } = useTimer({ expiryTimestamp, onExpire: ()=> navigate('result')});


  return (
    <div className='absolute -top-5 -left-5'>
      
      <div className='w-28   md:p-0.5 w- bg-indigo-100 rounded-2xl'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
    </div>
  );
}

export const MemorizedMyTimer= React.memo(MyTimer)
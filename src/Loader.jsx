import React, { useEffect, useState } from 'react'

const Loader = ({ onFinish}) => {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() =>{
    const duration = 2000; // total duration of the loader in milliseconds
    const intervalTime = duration / 200;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
    setCount(current);

    if (current >= 100) {
      clearInterval(interval);
      setTimeout(() => setExit(true), 200);
      setTimeout(onFinish, 1000); // call onFinish after exit animation
    }
  }, intervalTime);
  return () => clearInterval(interval);
}, [onFinish]);
  return (
    <div className={`fixed inset-0 z-50 transition-transform duration-1000 ease-in-out ${exit ? '-translate-y-full': 'translate-y-0'}`}>
      <div className='text-white absolute bottom-4 left-4'>
        <div className='font-semibold tracking-tight text-9xl'>{count}</div>
      </div>
    </div>
  )
}

export default Loader

import React, { useEffect, useRef } from 'react';


const Board = () => {
    const canvasRef=useRef(null);
    console.log(canvasRef)

    useEffect(()=>{
        if(!canvasRef.current) return;
        const canvas=canvasRef.current;
        const context=canvas.getContext('2d');
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
    },[])
  return (

        <canvas ref={canvasRef}></canvas>
 
  )
}

export default Board
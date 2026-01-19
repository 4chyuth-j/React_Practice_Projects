import { useState } from "react"

const ColorGenerator = () => {
   
  const [typeOfColor,setTypeColor] = useState('hex');
  const [color,setColor] = useState('#78DD50');

  function randomColorUtility(length:number){
    return Math.floor(Math.random()*length);
  }

  function handleCreateRandomColor(){
    if(typeOfColor=='hex'){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i=0; i<6; i++){
            hexColor+=hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    } else {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`)
    }
  }


  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        background:color,
    }}>
        <button onClick={()=>setTypeColor('hex')}>Create HEX</button>
        <button onClick={()=>setTypeColor('rgb')}>Create RGB</button>
        <button onClick={handleCreateRandomColor}>Generate Random Color</button>
        <p>ColorType:{typeOfColor}</p>
        <p>Color:{color}</p>
    </div>
  )
}

export default ColorGenerator
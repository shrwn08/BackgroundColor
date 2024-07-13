import React, {useState} from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('')

  const handleRandomBtn = () =>{
    const hexElement = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
      let hexNum = Math.floor(Math.random()*hexElement.length);
      hexColor += hexElement[hexNum];
    }
    setColor(hexColor);
    console.log(hexColor)

  }

  return (
    <div className="App h-screen w-full " style={{backgroundColor:color}}>
    <div className={`fixed bottom-5 left-[50%] translate-x-[-50%] bg-${color} h-12 w-1/2 flex justify-between items-center px-4`}>
      <button className="p-2 bg-[#FFAAAA] text-white font-bold rounded-lg w-20" onClick={()=>setColor('#FFAAAA')}>Pink</button>
      <button className="p-2 bg-[#478CCF] text-white font-bold rounded-lg w-20" onClick={()=>setColor('#478CCF')}>Blue</button>
      <button className="p-2 bg-[#fbee89] text-white font-bold rounded-lg w-20" onClick={()=>setColor('#fbee89')}>Yellow</button>
      <button className="p-2 bg-[#FF6969] text-white font-bold rounded-lg w-20" onClick={()=>setColor('#FF6969')}>Red</button>
      <button className="p-2 bg-[#EEA1EB] text-white font-bold rounded-lg w-20" onClick={()=>setColor('#EEA1EB')}>Purple</button>
      <button className="p-2 bg-[#4A4A48] text-white font-bold rounded-lg w-20" onClick={()=>setColor('#4A4A48')}>Black</button>
      <button className={`p-2 bg-white  font-bold rounded-lg w-20`} style={{color:color}} onClick={handleRandomBtn}>Random</button>
    </div>
     
    </div>
  );
}

export default App;

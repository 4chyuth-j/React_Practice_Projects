import React, { useState } from 'react'
import data from '../data';

import './styleAccordian.css'

const Accordian:React.FC = () => {
  const [selected,setSelected] = useState<string|null>(null);
  const [multiSelection,setMultiSelection] = useState<boolean>(false);
  const [multiple,setMultiple] = useState<string[]>([]);

  function handleSingleSelection(getCurrentId:string){
    console.log(getCurrentId);
    
      setSelected(selected==getCurrentId?null:getCurrentId);
    
  }

  function handleMultiSelection(getCurrentId:string){
      let cpyMultiple = [...multiple];
      const findInd = cpyMultiple.indexOf(getCurrentId);
      if(findInd>=0){
        cpyMultiple = cpyMultiple.filter(item=>item!=getCurrentId);
      } else {
        cpyMultiple.push(getCurrentId);
      }

      console.log(cpyMultiple)
      setMultiple(cpyMultiple);

  }
  function handleMultiSelectionButton(){
    if(multiSelection){
      console.log("MultiSelection disabled");
      setMultiSelection(false);
      setMultiple([]);
    }else{
      console.log("MultiSelection Enabled");
      setMultiple(selected?[selected]:[]);
      setSelected(null);
      setMultiSelection(true);
    }
  }

  return (
    <div className='wrapper'>
      <button onClick={()=>handleMultiSelectionButton()}>{multiSelection?'disable multiSelection':'Enable multiSelection'}</button>
      <div className='accordian'>
        {
          data && data.length>0?
          (
            data.map(item=><div key={item.id} className='item'>
            <div onClick={multiSelection?
                            ()=>handleMultiSelection(item.id)
                           :()=>handleSingleSelection(item.id)}
                 className='title'>
                <h3>{item.question}</h3>
                <span>+</span>
            </div>
            {
              selected===item.id || multiple.indexOf(item.id)!==-1 ?
              <div className='content'>{item.answer}</div>
              : null
            }
            </div>  )
          )  
          :<div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordian;
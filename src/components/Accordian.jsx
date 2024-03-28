import './accordian.css'
import data from "./data";
import { useState } from "react";
function Accordian() {
  const [select, setSelect] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enable, setEnable] = useState(false);

  function handleSingleSelection(id) {
    setSelect(id === select ? null : id);
  }
  function handleMultipleSelection(id){
   const cpymultiple = [...multiple];
    const findCurrentIndex = cpymultiple.findIndex((item) => item === id);
    if(findCurrentIndex === -1){
      cpymultiple.push(id)
    }else{
      cpymultiple.splice(findCurrentIndex, 1)
    }
    console.log(cpymultiple)
    setMultiple(cpymultiple)
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        <div className={!enable? 'button-wrapper enable' : 'button-wrapper disable'}>
        <button className='btn' onClick={()=>setEnable(!enable)}>enable multiple selection </button>
        
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className={select === dataItem.id || multiple.indexOf(dataItem.id) !== -1  ? 'item active' : 'item'} onClick={() => enable? handleMultipleSelection(dataItem.id) : handleSingleSelection(dataItem.id)}>
              <div
                className="title"
                
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {select === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="description">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default Accordian;

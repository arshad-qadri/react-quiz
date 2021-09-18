import React, { useState } from 'react'
import data from '../data'

const Quiz = () => {
    const [queNum, setQueNum]=useState(0)
    const [ansScore, setAnsScore] = useState(0);
    const [temp,settemp]=useState("")
    
    const ansChk = (elem) => {
        settemp(elem.ansText)
    console.log(elem);
        if(elem.ans){

            setAnsScore( ansScore+1)
        }
    };
 
    
    const next =()=>{
        console.log( "ans" , ansScore);
        
        if( queNum >= data.length-1){
            alert("hi")
        }
        else{
            setQueNum(queNum+1)
        }

        
            
    }
    
    return (
      <div>
        <h1>Quiz</h1>
        <div className="">
          <h3> {data[queNum].que} </h3>
          {/* <input type="radio" name="ans" />
          <label htmlFor="ans"> {data[queNum].a} </label><br /><br />
          <input type="radio" name="ans" />
          <label htmlFor="ans"> {data[queNum].b} </label><br /><br />
          <input type="radio" name="ans" />
          <label htmlFor="ans"> {data[queNum].c} </label><br /><br />
          <input type="radio" name="ans" />
          <label htmlFor="ans"> {data[queNum].d} </label><br /><br /> */}

          {data[queNum].ansOpt.map((elem,id)=>{
              return (
                <div key={id}>
                  <input
                    type="radio"
                    checked={elem.ansText ===  temp ? true : false}
                    name="ans"
                    onClick={() => ansChk(elem)}
                  />
                  <label htmlFor="ans"> {elem.ansText}</label>
                </div>
              );
          })}
          <br />
          <br />
          <button onClick={next}>next</button>
        </div>
      </div>
    );
}

export default Quiz

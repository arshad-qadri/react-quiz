import React, { useEffect, useState } from "react";
import data from "../data";

const Quiz = props => {
  useEffect(() => {
    console.log("test", window);
  }, []);
  const [queNum, setQueNum] = useState(0);
  const [ansScore, setAnsScore] = useState(0);
  const [temp, settemp] = useState("");
  const [val, setVal] = useState("");
  const index = data.indexOf(data[queNum]);

  const ansChk = elem => {
    settemp(elem.ansText);
    setVal(elem.ansText);
    if (elem.ans) {
      setAnsScore(ansScore + 2);
    }
  };

  const next = () => {
    setVal("");
    if (!val) {
      alert("Please select any option");
    } else {
      if (queNum >= data.length) {
        return;
      } else {
        setQueNum(queNum + 1);
      }
    }
  };

  return (
    <div className="quiz">
      <h1 className="title">Quiz</h1>

      {queNum >= data.length ? (
        <div className="score">
          <h3>Congratulations 😎 </h3>
          <h2>you scored {ansScore}/10 </h2>

          <div className="button">
            <button onClick={() => window.location.reload()}>play again</button>
          </div>
        </div>
      ) : (
        <div className="que">
          <h3>
            {index + 1}.{data[queNum].que}
          </h3>
          {data[queNum].ansOpt.map((elem, id) => {
            return (
              <div key={id}>
                <input
                  type="radio"
                  value={elem.ansText}
                  checked={elem.ansText === temp ? true : false}
                  onChange={() => (elem.ansText === temp ? true : false)}
                  // onChange={defaultChecked}
                  name="ans"
                  onClick={() => ansChk(elem)}
                />
                <label htmlFor="ans"> {elem.ansText}</label>
              </div>
            );
          })}
          <br />
          <div className="button">
            <button onClick={next}>next</button>
          </div>
        </div>
      )}
      <footer>All rights are reserved</footer>
    </div>
  );
};

export default Quiz;

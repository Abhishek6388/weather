import React, { useEffect, useState } from "react";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

function App() {
  const [newsList, setNewsList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    getNewsList("all");
  }, []);
  
  const getNewsList = (cate) => {
    fetch(`https://inshorts.deta.dev/news?category=${cate}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setNewsList(result.data);
      });
  };
  return (
    <>
      <select id="news" onChange={(e) => getNewsList(e.target.value)}>
        <option defaultValue={true} value="all">
          all
        </option>
        <option value="sports">sports</option>
        <option value="politics">politics</option>
        <option value="technology">technology</option>
        <option value="startup">startup</option>
        <option value="miscellaneous">miscellaneous</option>
        <option value="business">business</option>
        <option value="world">world</option>
        <option value="science">science</option>
      </select>
      {newsList.map((item, index) => (
        <div className="mainDiv" key={index}>
          <img className="newsImg" src={item.imageUrl} />
          <div className="contentDiv">
            <h3>{item.title}</h3>
            <div className="cta">
              {/* <span>categoy</span> */}
              <span>{item.date}</span>
              <span>{item.author}</span>
            </div>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";

function App() {
  // state (React)
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [movies, setMovies] = useState([
    { name: "AA", price: 2000 },
    { name: "BB", price: 3000 },
  ]);

  const nameOnChange = (event) => {
    setName(event.target.value);
  };

  const priceOnChange = (e) => {
    setPrice(e.target.value);
  };

  const buttonOnClick = () => {
    const temp = movies.concat({
      name: name,
      price: price,
    });
    setMovies(temp);
  };

  // HTML + CSS
  return (
    <div>
      <h2>영화 리스트</h2>
      {movies.map((movie) => {
        return (
          <div>
            <ul>
              <li>영화 제목: {movie.name}</li>
              <li>영화 가격: {movie.price}</li>
            </ul>
          </div>
        );
      })}
      <h2>영화 등록하기!</h2>
      <div>
        <span className="box">이름: </span>
        <input type="text" value={name} onChange={nameOnChange}></input>
      </div>
      <div>
        <span className="box">가격: </span>
        <input type="number" value={price} onChange={priceOnChange}></input>
      </div>
      <button onClick={buttonOnClick}>등록하기</button>
    </div>
  );
}

export default App;
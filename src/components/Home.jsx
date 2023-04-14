import React, { useState } from "react";
import movies from "./data";
import "../style/home.css";
console.log(movies);
const Home = () => {
  const [moviesdata, setmoviesData] = useState(movies);
  let dropmovie = (imdbID, Title) => {
    setmoviesData(moviesdata.filter((items) => items.imdbID !== imdbID));
    setTimeout(()=>{
    alert(`Movie with name ${Title} is deleted from the list`)
        
     } , 150);
  };
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      
      {moviesdata.map((data) => (
        <div key={data.imdbID} className="container">
          <div className="poster">
            <img src={data.Images[0]} alt="" />
          </div>
          <div className="content">
            <div
              className="title"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {data.Title}
            </div>
            <div className="genre">{data.Genre}</div>
            <div className="language">{data.Language}</div>
            <div className="Rating">{data.Rated}</div>
            <div className="imdb">{data.imdbRating}</div>
            <div className="plot" style={{ color: "#757575" }}>
              {data.Plot}
            </div>
            <div className="btn">
              <button
                style={{
                  backgroundColor: "lightsteelblue",
                  border: "none",
                  borderRadius: "12px",
                  padding: "5px",
                  marginTop: "5px",
                }}
                onClick={() => dropmovie(data.imdbID, data.Title)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

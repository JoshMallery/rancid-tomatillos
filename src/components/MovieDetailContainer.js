import React from "react";
import "./MovieDetailContainer.css";

function MovieDetailContainer({movie}) {
  const {title,tagline,budget,revenue,overview,runtime,genres} = movie

  const genresToDisplay = genres.map((genre,index)=> <p className="detail" key={index}>{genre} </p>)


  return (
    <div className="movie-detail-container">
      <h3 className="detail">{title}</h3>
      <h4 className="detail">{tagline}</h4>
      <div>
        <h4 className="detail">Overview:</h4>
        <p className="detail">{overview}</p>
      </div>
      <h4 className="detail">Runtime: {runtime} minutes</h4>
      <div>
        <h4 className="detail">Genres:</h4>
        {genresToDisplay}
      </div>
      <div>
        {budget !== 0 && <h4 className="detail">Budget: ${budget.toLocaleString("en-US")}</h4>}
        {revenue !==0 && <h4 className="detail">Revenue: ${revenue.toLocaleString("en-US")}</h4>}
      </div>

    </div>
  )
}

export default MovieDetailContainer;

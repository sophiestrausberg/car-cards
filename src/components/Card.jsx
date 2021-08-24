import React from "react";

function Card(props) {
  return (
    <div className="term" style={{backgroundColor: props.color}}>
      <dt>
        <div role="img" aria-label={props.color}>
          <img src={props.emoji} alt={props.emoji}></img>
        </div>
        <h1>{props.name}</h1>
      </dt>
      <p>{props.meaning}</p>
      <a className="btns" style={{color: props.color}} href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
        Learn More
      </a>
    </div>
  );
}

export default Card;
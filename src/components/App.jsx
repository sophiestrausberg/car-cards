import React from "react";
import Card from "./Card";
import Info from "../info";

function App() {
  return (
    <div>
      <div className="dictionary">
        {Info.map((card) => (
          <Card
            key={card.id}
            emoji={card.emoji}
            name={card.name}
            meaning={card.meaning}
            color={card.color}
          />
        ))}
      </div>

      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
      Coded by <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">Sophie Strausberg</a>.
      </div>

    </div>
  );
}

export default App;

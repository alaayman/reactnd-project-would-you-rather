import React from "react";
import image1 from "../avatars/Avatar-Sara.svg";
import image2 from "../avatars/Avatar-Tyler.svg";
import image3 from "../avatars/Avatar-John.svg";
import QuestionCard from "./QuestionCard";

const imgs = [image1, image2, image3];

function Question() {
  return (
    <div>
      {imgs.map((img, index) => (
        <li className="list-group-item" key={index}>
          <QuestionCard img={img} />
        </li>
      ))}
    </div>
  );
}

export default Question;

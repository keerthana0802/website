import React, { useState } from "react";
import Answer from "./Answer";

function Question(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick(e) {
    let self = e.target;
    let desc = e.target.parentElement.nextSibling;

    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);

    self.classList.toggle("active");
    desc.style.maxHeight
      ? (desc.style.maxHeight = null)
      : (desc.style.maxHeight = `${desc.scrollHeight}px`);
  }

  return (
    <div>
      <dt>
        <button
          className="faq__button"
          aria-expanded="false"
          aria-controls={`faq${props.index}`}
          onClick={handleClick}
        >
          {props.question}
        </button>
      </dt>
      <Answer in={isExpanded} index={props.index} answer={props.answer} />
    </div>
  );
}

export default Question;

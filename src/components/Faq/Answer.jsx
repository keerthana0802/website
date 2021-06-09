import React from "react";
import { CSSTransition } from "react-transition-group";

export default function Answer(props) {
  return (
    <CSSTransition in={props.in} timeout={200}>
      <dd>
        <p id={`faq${props.index}`} className="faq__desc">
          {props.answer}
        </p>
      </dd>
    </CSSTransition>
  );
}

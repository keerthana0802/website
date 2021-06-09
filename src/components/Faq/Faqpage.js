import React, { useState, useEffect } from "react";
import Question from "./Question";
import faqs from "./faq";

function Faqpage() {
  const [responsiveMode, setResponsiveMode] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setResponsiveMode(true);
    }
  }, []);
  const [item, setItem] = useState(false);

  const handleClick = () => setItem(!item);

  return (
    <div>
      <div className="container">
        <section className="faq">
          <div className="faq__right">
            <h2 className="faq__title">Trial Class</h2>
            <dl>
              {faqs.map((faq, index) => (
                <Question
                  index={index}
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </dl>
            <h3 className="faq__title1">Book a Class</h3>
            <dl>
              {faqs.map((faq, index) => (
                <Question
                  index={index}
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </dl>
            <h4 className="faq__title2">Purchase</h4>
            <dl>
              {faqs.map((faq, index) => (
                <Question
                  index={index}
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faqpage;

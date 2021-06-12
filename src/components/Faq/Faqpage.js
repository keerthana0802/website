import React, { useState, useEffect } from "react";
import Question from "./Question";
import SecondaryButton from "../buttons/SecondaryButton";

function Faqpage() {
  const [responsiveMode, setResponsiveMode] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setResponsiveMode(true);
    }
  }, []);
  const [item, setItem] = useState(false);

  const faqs = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(faqs);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(faqs);
    else {
      const filteredData = faqs.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div>
      <div className="container">
        <section className="faq">
          <div className="faq__right">
            <div className="all-courses-banner-filter__search">
              <label htmlFor="searchbar">
                <input
                  type="text"
                  name="searchbar"
                  id=""
                  placeholder="Search keywords"
                  value={searchText}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </label>
              <SecondaryButton buttonText="Search" version="version-3" />
            </div>

            <h2 className="faq__title">Trial Class</h2>
            <dl>
              {data.map((faq, index) => (
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
              {data.map((faq, index) => (
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
              {data.map((faq, index) => (
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

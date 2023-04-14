import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JobPortal } from "./JobPortal";

import { useState } from "react";

library.add(faPlus);

const QA = () => {
  const [active, setActive] = useState();

  let accordionData = [
    {
      title: "How does the free trial work?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ex illum nam vel exercitationem aliquid. Maxime quam aut, vitae quisquam natus eum distinctio? Sint veniam accusamus est tempore, recusandae libero.",
    },
    {
      title: "How do you find the different criteria in your process?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ex illum nam vel exercitationem aliquid. Maxime quam aut, vitae quisquam natus eum distinctio? Sint veniam accusamus est tempore, recusandae libero.",
    },
    {
      title: "What do you look for in a founding team?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ex illum nam vel exercitationem aliquid. Maxime quam aut, vitae quisquam natus eum distinctio? Sint veniam accusamus est tempore, recusandae libero.",
    },
    {
      title: "Do you recommend pay as you go or Pre pay?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ex illum nam vel exercitationem aliquid. Maxime quam aut, vitae quisquam natus eum distinctio? Sint veniam accusamus est tempore, recusandae libero.",
    },
    {
      title: "What do I get for $0 with my plan?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ex illum nam vel exercitationem aliquid. Maxime quam aut, vitae quisquam natus eum distinctio? Sint veniam accusamus est tempore, recusandae libero.",
    },
  ];

  // handleActive with index as variable
  // if active is exactly index, set active
  //else setActive to the index

  const handleActive = (index) => {
    if (active === index) {
      setActive();
    } else {
      setActive(index);
    }
  };
  console.log(active);
  // <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
  return (
    <>
    
      <section className="questions-answers">
        <h3>Questions & Answers</h3>

        <div className="content">
          {accordionData.map((accordion, index) => {
            return (
              <div
                className="accordion"
                onClick={() => handleActive(index)}
                key={index}
              >
                <div className="accordion-title">
                  <h5>{accordion.title}</h5>
                  <FontAwesomeIcon
                    icon="fa-solid fa-plus"
                    style={{
                      transform: `${
                        active === index ? "rotate(45deg)" : "rotate(0deg)"
                      }`,
                      background: `${active === index ? 'green' : 'white'}`,
                      color: `${active === index? `white` : 'black'}`
                      
                    }}
                  />
                </div>
                {active === index ? (
                  <div className="accordion-content">{accordion.content}</div>
                ) : null}
              </div>
            );
          })}
        </div>

        <p>
          Didn't find the answer? We can help.{" "}
          <span className="underline">Click here</span>
        </p>
      </section>

      <JobPortal />
    </>
  );
};

export default QA;

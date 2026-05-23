import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../Project/Projects.css";
import { myProjects } from "../Project/MyProjects";

export default function Projects() {
  const [currentActive, setCurrentActive] = useState("all projects");
  const [arr, setArr] = useState(myProjects);
  function handleClick(buttonCategory) {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const arrfilterd = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return arrfilterd === buttonCategory;
    });
    setArr(newArr);
  }
  return (
    <main className="d-flex flex-column py-5" id="projects">
      <div className="d-flex flex-column align-items-center">
      <h1 className="title py-2">Projects</h1>
      <p className="sup-title text-center pb-4">
        Explore my collection of web projects built with React, Next.js, and
        vanilla HTML, CSS, and JavaScript, showcasing responsive and modern UI
        designs.
      </p>
      </div>
      {/* filter buttons bar (centered) */}
      <section className="left-section d-flex gap-2 flex-wrap justify-content-center w-100 mb-4">
        <button
          className={currentActive === "all projects" ? "active" : ""}
          onClick={() => {
            setCurrentActive("all projects");
            setArr(myProjects);
          }}
        >
          all projects
        </button>

        <button
          className={currentActive === "css" ? "active" : ""}
          onClick={() => {
            handleClick("css");
          }}
        >
          html & css
        </button>

        <button
          className={currentActive === "js" ? "active" : ""}
          onClick={() => {
            handleClick("js");
          }}
        >
          javaScript
        </button>

        <button
          className={currentActive === "react" ? "active" : ""}
          onClick={() => {
            handleClick("react");
          }}
        >
          react
        </button>

        {/* <button
          className={currentActive === "next" ? "active" : ""}
          onClick={() => {
            handleClick("next");
          }}
        >
          next
        </button> */}
      </section>

      {/* projects section */}

      <section className="right-section row my-5 g-4 justify-content-center">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 8 }}
                className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
                key={item.id}
              >
                <div className="card p-4 rounded-3">
                  <img
                    src={item.imgPath}
                    alt={item.projectTitle}
                    className="p-4 rounded-3"
                  />

                  <div className="box p-4">
                    <h2 className="title">{item.projectTitle}</h2>
                    <p className="suptitle text-sm-start">{item.projDesc}</p>
                    <p className="suptitle text-sm-start">{item.projTools}</p>
                    <div className="tools mt-4 mb-5 d-flex flex-wrap gap-2">
                      {item.tools.map((tool, index) => (
                        <span
                          className="badge bg-info text-dark py-2 "
                          key={index}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="icons d-flex justify-content-center align-items-center flex-wrap w-100 gap-4">
                      <a
                        href={item.gitHubLink}
                        className="d-flex align-items-center gap-1 text-decoration-none text-bg-info text-dark py-2 px-3 fs-6 rounded-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github text-dark "></i>
                        Source
                      </a>

                      <a
                        href={item.liveLink}
                        className="d-flex align-items-center gap-1 text-decoration-none text-bg-info text-dark py-2 px-3 fs-6 rounded-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

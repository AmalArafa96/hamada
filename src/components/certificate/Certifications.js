import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Certifications.css";
import { myCertificate } from "./MyCertificate";

export default function Certifications() {
  const [arr] = useState(myCertificate);
  return (
    <main className="d-flex flex-column py-5" id="Certificates">
       <div className="d-flex flex-column align-items-center">
      <h1 className="title py-2">Education& Certificates </h1>
      <p className="sup-title">
        A collection of certifications and academic qualifications that reflect
        my skills and experience in front-end development.
      </p>
      </div>
      <div className="certificates py-5 px-3">
        {arr.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="card cert-card d-flex align-items-center justify-content-center">
                <i className={`${item.certIcon} cert-icon py-2 mt-3`}></i>

                <div className="cert-content d-flex flex-column">
                  <h2 className="cert-title">{item.certTitle}</h2>
                  <p className="cert-place">{item.certPlace}</p>
                  <p className="cert-descrption">{item.certDescription}</p>

                  <a
                    href={item.certLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-btn my-4 align-self-center text-decoration-none"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}

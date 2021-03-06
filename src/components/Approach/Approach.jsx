import React from "react";
import Styles from "./Approach.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";

const Approach = () => {
  return (
    <section className={`text-gray-800 body-font ${Styles.approach}`}>
      <div className=" py-16 ">
        <div className={`flex flex-col text-left  mb-0 pl-8 ${Styles.approachText}`}>
          <h1 className="text-gray-900 pb-5">
            Our Approach
          </h1>

          <span className='text-violet-400'><FaQuoteLeft size={40} /></span>
          <h2>An Excellent Process is the blueprint to success. </h2>
          <p>
            Inspired by the philosophy, Kookies discovered a Spectacular <br />
            formula to build brilliance with a perfect combination of Design{" "}
            <br />
            and Development Strategies.{" "}
          </p>

          <h3>We would love to share that secret with you</h3>
          <div>
            <button className="bg-gray-900 text-sm flex flex-row text-white px-5 py-2">
              CHECK NOW{" "}
              <span className="mt-1 ml-1 text-white ">
                <RiArrowRightUpLine />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

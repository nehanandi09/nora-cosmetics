import React from "react";

const HeroWidget = ({ text, styling }) => {
  return (
    <article className={`rounded-2xl ${styling} p-10 md:p-16 mb-3 text-center`}>
      <h2 className=" text-xl md:text-2xl font-semibold">{text}</h2>
    </article>
  );
};

export default HeroWidget;

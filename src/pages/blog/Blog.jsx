// import React from 'react';
import React from "react";
import question from "../../assets/questions.jpg";
import Questions from "./Questions";
import Pdf from "react-to-pdf";
const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="container mx-auto">
      <div className="px-2 lg:px-0">
        <p className="text-center lg:text-8xl font-serif text-white rounded rounded-b-none p-2 font-semibold bg-blue-800">
          Q & A SECTION
        </p>
        <img
          className="h-[400px] rounded rounded-t-none w-full"
          src={question}
          alt=""
        />
      </div>
      <div ref={ref} className="lg:px-36 lg:mt-8 lg:mb-16 px-4">
        <Questions  />
      </div>
      <Pdf targetRef={ref} filename="Question.pdf">
        {({ toPdf }) => <button className="bg-blue-700 ml-[20px] mt-4 lg:ml-[600px] mb-8 text-white p-2 rounded " onClick={toPdf}>Downloded</button>}
      </Pdf>
    </div>
  );
};

export default Blog;

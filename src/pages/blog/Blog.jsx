// import React from 'react';
import question from '../../assets/questions.jpg'
import Questions from "./Questions";

const Blog = () => {
    return (
        <div className="container mx-auto">
            <div className='px-2 lg:px-0'>
                <p className="text-center lg:text-8xl font-serif text-white rounded rounded-b-none p-2 font-semibold bg-blue-800">Q & A SECTION</p>
                <img className='h-[400px] rounded rounded-t-none w-full' src={question} alt="" />
            </div>
            <div className="lg:px-36 lg:mt-8 lg:mb-16 px-4">
                <Questions/>
            </div>
        </div>
    );
};

export default Blog;
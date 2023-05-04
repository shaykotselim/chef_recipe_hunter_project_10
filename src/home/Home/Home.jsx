// import Hero from "./Hero";

import BestService from "../menu/BestService";
import Chef from "../menu/Chef";
import ToServe from "../menu/ToServe";
import Hero from "./Hero";


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <BestService/>
           <Chef></Chef>
           <ToServe/>
            
        </div>
    );
};

export default Home;   
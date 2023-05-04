import curryGreen from "../../assets/curry-green.jpg";
import fish from "../../assets/fish-.jpg";
import friedRice from "../../assets/fried-rice.jpg";
import salad from "../../assets/meal-salad.jpg";
import vegCurry from "../../assets/curry-vegetable.jpg";
import eggNet from "../../assets/egg-net.jpg";
import nuddouls from "../../assets/friedNuddols.jpg";
import Marquee from "react-fast-marquee";
const ToServe = () => {
  return (
    <>
      <div className="text-center">
        <p className="font-serif text-7xl p-8 mt-8 underline">What We Serve</p>
      </div>
   
      <div className=" p-8  gap-4">
      <Marquee>
        <div>
          <img className="h-[300px] w-full" src={curryGreen} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full" src={fish} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full" src={friedRice} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full" src={salad} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full" src={vegCurry} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full" src={eggNet} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full" src={nuddouls} alt="" />
        </div>
        </Marquee>
      </div>
      
    </>
  );
};

export default ToServe;

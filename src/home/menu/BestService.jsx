import birthday from "../../assets/birthday.jpg";
import meatings from "../../assets/meatings.jpg";
import wedding from "../../assets/wedding.jpg";
import Marquee from "react-fast-marquee";
const BestService = () => {
  return (
    <>
    <div className="text-center p-8">
        <p className="font-serif text-6xl">Service We Provide</p>
        <p className="font-serif text-xl">Our 3 Michelin Stars ensure that your experience regarding our cuisine will be one that you will not forget.</p>
    </div>
    
      <div className=" container p-8 lg:mx-auto lg:grid gap-8 grid-cols-3">
        <div className="rounded-xl shadow-lg">
          <div className="flex justify-center">
            <img
              className="h-[300px] w-[300px] rounded-full"
              src={birthday}
              alt=""
            />
          </div>
          <div className="text-center p-4">
            <p className="font-serif text-2xl font-medium p-2">Birthdays</p>
            <p className="lg">
              Book a table for two with the best Italian dishes served for the
              anniversary. Or reserve a bigger one for a huge family to get
              together one sunny day. Gather your friends together
            </p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="flex justify-center">
            <img
              className="h-[300px] w-[300px] rounded-full"
              src={meatings}
              alt=""
            />
          </div>
          <div className="text-center p-4">
            <p className="font-serif text-2xl font-medium p-2">Meetings</p>
            <p>
              You can also impress your boss by choosing the best place for
              corporate party with your co-workers. Reserve a spacious room, set
              the menu, choose the drinks and invite guests.
            </p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="flex justify-center">
            <img
              className="h-[300px] w-[300px] rounded-full"
              src={wedding}
              alt=""
            />
          </div>
          <div className="text-center p-4">
            <p className="font-serif text-2xl font-medium p-2">Weddings</p>
            <p>
              75 seats for 75 guests are all at your disposal. Organize a party
              for a huge company and have fun in the restaurant. Show your
              friends the real world of European cuisine and especially Italian
              vibes.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default BestService;

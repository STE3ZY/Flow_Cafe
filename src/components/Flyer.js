import { JackInTheBox } from "react-awesome-reveal";

import "./Flyer.css";
import page1 from "../images/menu1.jpg";
import page2 from "../images/menu2.jpg";
import page3 from "../images/menu3.jpg";
import page4 from "../images/menu4.jpg";

const Flyer = () => {
  return (
    <div className="menu">
      <JackInTheBox triggerOnce>
        <img className="menu--image" src={page1} alt="Menu page 1" />

        <img className="menu--image" src={page2} alt="Menu page 2" />
        <img className="menu--image" src={page3} alt="Menu page 3" />
        <img className="menu--image" src={page4} alt="Menu page 4" />
      </JackInTheBox>
    </div>
  );
};

export default Flyer;

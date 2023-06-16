import Marquee from "react-fast-marquee";
import gootImg from '../../../assets/image/photo.png';
import paulImg from '../../../assets/image/Paul.png';
import metaImg from '../../../assets/image/meta.png';
import hooImg from '../../../assets/image/Habbo.png';
import epicImg from '../../../assets/image/Epic.png';
import airImg from '../../../assets/image/air.png';
import airtImg from '../../../assets/image/Airtable.png';

const OurPartner = () => {
  return (
    <div className="p-20">
        <h2 className="text-center text-3xl py-10 text-gray-500">Our Partners</h2>
      <Marquee>
        <img src={epicImg} alt="" className="h-24 mx-5" />
        <img src={gootImg} alt="" className="h-24 mx-5" />
        <img src={paulImg} alt="" className="h-24 " />
        <img src={metaImg} alt="" className="h-24 mx-5" />
        <img src={hooImg} alt="" className="h-24 mx-5" />
        <img src={airImg} alt="" className="h-24 mx-5" />
        <img src={airtImg} alt="" className="h-24 mx-5" />
      </Marquee>
    </div>
  );
};

export default OurPartner;

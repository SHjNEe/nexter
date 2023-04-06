import Realtor_1 from "../../../img/realtor-1.jpeg";
import Realtor_2 from "../../../img/realtor-2.jpeg";
import Realtor_3 from "../../../img/realtor-3.jpeg";

const Realtor = (props) => {
  return (
    <div className="realtors">
      <h3 className="heading-3">不動産業者 ランキング</h3>
      <div className="realtors__list">
        <img src={Realtor_1} alt="" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik Fainman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>

        <img src={Realtor_2} alt="" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </div>

        <img src={Realtor_3} alt="" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
          <p className="realtors__sold">197 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtor;

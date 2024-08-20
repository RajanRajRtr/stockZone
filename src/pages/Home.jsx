import { Fragment, useEffect ,useState} from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
// import { products, discoutProducts, StockProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import axios from "axios";
import Wrapper1 from "../components/wrapper/wrapper1";
import Testimonal from "../components/wrapper/Testimonal";
import News from "../components/wrapper/News";
import Training from "../components/wrapper/Training";
import Performance from "../components/SliderCard/Performance";

const Home = () => {
  const [data,setData]=useState([])

  // const newArrivalData = products.filter(
  //   (item) => item.category === "mobile" || item.category === "wireless"
  // );
  // const bestSales = products.filter((item) => item.category === "sofa");
  // useWindowScrollToTop();
  useEffect(() => {
    getData();
  }, []);

  //getData
  const getData = () => {
    axios
      // USE DYNAMIC API ----- ${process.env.REACT_APP_API_URL}
      .get(`${process.env.REACT_APP_API_URL}/Product-list`)
      .then((res) => {
        setData(res.data);
      });
  };



   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="StockZone Services"
        bgColor="#e3ecf2"
        productItems={data}
      />
      <Performance/>
      <Wrapper1/>
      <Training/>
      
      <News/>
      <Testimonal/>
      {/* <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      /> */}
      {/* <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} /> */}
    </Fragment>
  );
};

export default Home;

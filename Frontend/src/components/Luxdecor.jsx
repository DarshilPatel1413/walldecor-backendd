import { useEffect, useState } from "react";
// import {collection} from "./Dataset.js";
import Card from "./card.jsx";
import axios from "axios";
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";

function Luxdecor({ ADD }) {

  const url = process.env.REACT_APP_BACKEND;

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
          // "http://localhost/walldecor/getdata.php"
          // `${url}`
          
  //       );
  //       setData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect( ()=>{
    const getUserdata = async()=>{
      try{
      const reqData = await fetch("http://localhost:5000/walldecor/luxdecor");
      const resData= await reqData.json();
      setData(resData);
      console.log(resData);
      }catch (error){
        console.error('Error fetching data:', error);
      }

    }
    getUserdata();
  },[]);

  return (
    <>
      <Navbar />
      <div className=" bg-slate-100">
        <h2 className="text-4xl text-center pt-10 tracking-wide font-bold">
          Buy Luxury & Premium Wall Decor Online In India 
        </h2>
        <h5 className="text-xl px-20 py-10 tracking-wider">
          {" "}
          At <b>TheWallDecorEmporium</b>, you can find luxurious Wall Decor
          alternatives that redefine sophistication and elegance. Improve your
          living areas with our carefully picked selection of luxurious wall
          decor items that are intended to turn your house into a work of art.
        </h5>

        <div className="main grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-7 sm:mx-16 ml-2 pr-7 gap-12">
          {data.map((item, index) => (
            <Card
              ADD={ADD}
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price1={item.price1}
              price2={item.price2}
            />
          ))}
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default Luxdecor;

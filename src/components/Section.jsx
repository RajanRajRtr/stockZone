// import { Container, Row , Col } from "react-bootstrap";
// import ProductCard from "./ProductCard/ProductCard";
// import "../components/SeachBar/searchbar.css"
// import { useState } from "react";


// const Section = ({ title, bgColor, productItems }) => {
//   const [searchWord, setSearchWord] = useState(null);
//   const [filterList, setFilterList] = useState(null);
// console.log("filterList", filterList)
//   const handelChange = (input) => {
//     setSearchWord(input.target.value);
//     setFilterList(
//       productItems.filter((item) =>
//         item.product_Name?.toLowerCase().includes(searchWord?.toLowerCase())
//       )
//     );
//   };
//   return (
//     <section style={{ background: bgColor }}>
//       <Container>
//         <Row>

//           <Col md={9}>
//           <div className="heading">
//           <h1>{title}</h1>
//         </div>
//           </Col>
//           <Col md={3}>
//           <div className="search-container">
//       <input type="text" placeholder="Search..." 
//       onChange={handelChange}
//        />
//       <ion-icon name="search-outline" className="search-icon"></ion-icon>
//     </div>
//           </Col>
//         </Row>
       
//         <Row className="justify-content-center">
//           {filterList?filterList:productItems.map((productItem) => {
//             return (
//               <ProductCard
//                 key={productItem.id}
//                 title={title}
//                 productItem={productItem}
//               />
//             );
//           })}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Section;


import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import "../components/SeachBar/searchbar.css";
import { useState , useEffect} from "react";

const Section = ({ title, bgColor, productItems }) => {
  const [searchWord, setSearchWord] = useState("");
  const [filterList, setFilterList] = useState(productItems);

  useEffect(() => {
    setFilterList(productItems);
  }, [productItems]);

  const handelChange = (input) => {
    const searchValue = input.target.value.toLowerCase();
    setSearchWord(searchValue);
    setFilterList(
      productItems.filter((item) =>
        item.product_Name?.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <section style={{ background: bgColor }}>
      <Container>
        <Row>
          <Col md={9}>
            <div className="heading">
              <h1>{title}</h1>
            </div>
          </Col>
          <Col md={3}>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                onChange={handelChange}
              />
              <ion-icon name="search-outline" className="search-icon"></ion-icon>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {filterList.map((productItem) => (
            <ProductCard
              key={productItem.id}
              title={title}
              productItem={productItem}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section;

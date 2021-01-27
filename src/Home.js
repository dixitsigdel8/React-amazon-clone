import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.png"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated"
            price={19.9}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={250.09}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Rq-blwQiL.jpg"
          />
          {/** Product */}
        </div>
        <div className="home__row">
          <Product
            id="123456789"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcol Fabric "
            price={550}
            rating={3}
            image="https://i.gadgets360cdn.com/products/smart-home/large/1551964772_832_amazon_echo-plus-smart-speaker.jpg"
          />
          <Product
            id="9845392777"
            title="New Apple iPad Pro (12.9-inch,Wi-Fi ,128GB)-Silver 4th Generation"
            price={450}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156"
          />
          <Product
            id="4896324"
            title="Samsung Galaxy Fit 2 Bluetooth Fitness Tracking Smart Band – Black (US Version)"
            price={850.69}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71fGgoNALZL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1589657"
            title="SAMSUNG 65-inch Class Curved UHD TU-8300 Series - 4K UHD HDR Smart TV With Alexa Built-in (UN65TU8300FXZA, 2020 Model)"
            price={400}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/9138UedBC%2BL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

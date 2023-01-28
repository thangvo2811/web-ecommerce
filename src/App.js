import "./App.css";
import Banner from "./components/Banner";
import BannerProduct from "./components/BannerProduct";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import phone from "./assets/images/phone.svg";
import headphone from "./assets/images/keyboard.svg";
import laptop from "./assets/images/phone.svg";
import keyboard from "./assets/images/banner-laptop.svg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <BannerProduct />
      <div className="product">
        <Product
          name="Mac book M2"
          price="2000$"
          salesPrice="1800$"
          img={phone}
        />
        <Product
          name="Headphone"
          price="600$"
          salesPrice="300$"
          img={headphone}
        />
        <Product
          name="Iphone 12 ProMax"
          price="2000$"
          salesPrice="100$"
          img={laptop}
        />
        <Product
          name="KeyBoard"
          price="200$"
          salesPrice="900$"
          img={keyboard}
        />
      </div>
    </div>
  );
}

export default App;

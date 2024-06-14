import { Component } from "react"; 
import Navbar from "../Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa"
import "./index.css" 

class Home extends Component{
    render(){
        return (
            <>
            <Navbar />
            <div className="grocery-home-main-container">
                <div className="grocery-header-container">
                    <div className="organic-header-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1694075012/organic-products-hero_qiwhzk.png" className="organic-header-carrybag-image"/>
                        <div className="organic-leaf-container">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1694075021/logo-leaf-new_zrmhz0.png" className="organic-leaf-image"/>
                            <p class="grocery-discription"> Best Quality Products </p>
                            <h1 class="grocery-heading"> Join The Organic Movement! </h1>
                            <p class="grocery-des"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.SHOP NOW </p>
                            <div class="grocery-shop-button">
                                <button class="grocery-button"><FaShoppingCart className="shopping-icon"/> <span class="shopping-span-para">Shop Now </span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="organic-free-shipping-container">
                    <div className="organic-free-shipping">
                        <div>
                            <FaTruck className="shipping-truck-icon"/>
                        </div>
                        <div>
                            <h1 className="shipping-heading"> Free Shipping</h1>
                            <p className="shipping-para"> Above $5 Only </p>
                        </div>
                    </div>
                    <div className="organic-free-shipping">
                        <div>
                            <FaTruck className="shipping-truck-icon"/>
                        </div>
                        <div>
                            <h1 className="shipping-heading"> Certified  </h1>
                            <p className="shipping-para">100% Guarantee  </p>
                        </div>
                    </div>
                    <div className="organic-free-shipping">
                        <div>
                            <FaTruck className="shipping-truck-icon"/>
                        </div>
                        <div>
                            <h1 className="shipping-heading"> Huge Savings </h1>
                            <p className="shipping-para"> At Lowest price </p>
                        </div>
                    </div>
                    <div className="organic-free-shipping">
                        <div>
                            <FaTruck className="shipping-truck-icon"/>
                        </div>
                        <div>
                            <h1 className="shipping-heading"> Easy Returns </h1>
                            <p className="shipping-para">  No Questions Asked </p>
                        </div>
                    </div>
                </div>

            </div>
            </>
        )
    }
} 

export default Home 
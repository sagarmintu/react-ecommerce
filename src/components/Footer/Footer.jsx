import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
import "./Footer.scss";
const Footer = () => {
    return <footer className='footer'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At enim tempora aspernatur doloremque tempore facilis non quibusdam ad, reiciendis praesentium adipisci? Ducimus eaque dolor cupiditate. Quas nobis quaerat laboriosam sunt?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">lorem15Kozhikode-Mysore-Kollegal Hwy, JC Nagar, Mysore, Karnataka</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@ecommerce.com</div>
                    </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speaker</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    ECOMMERCE 2023 CREATED BY SAGAR BEHERA. PRIEMUM E-COMMERCE SOLUTIONS 😄
                </div>
                <img src={Payment} alt="payment-images" />
            </div>
        </div>
    </footer>;
};

export default Footer;

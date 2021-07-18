import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="background-img" 
                />
                <div className="home__row">
                    <Product 
                        id="25488157"
                        title='The Lean Startup: How COnstant Innovation Creates Radically Successful Businesses Paperback' 
                        price={11.96}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="14683495"
                        title='Dell Ultrasharp U2719DX 27-Inch WQHD 2560x1440 Resolution IPS Monitor with Infinity Edge Bezels, Black ' 
                        price={344.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71YqpUwrpBL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="90103701"
                        title="The History of Middle Earth, Volumes 1-12, and The Silmarillion" 
                        price={9500.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/51jOKIg9EkL.jpg"
                        rating={5}
                    />
                    <Product 
                        id="56176329"
                        title="Clara 92.5 Sterling Silver White Gold Plated Heart Solitaire Pendant Chain Necklace for Women & Girls " 
                        price={1499.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/516qD0%2Bt16L._UL1100_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="52009408"
                        title="JM Speakers Bluetooth Desktop Computer Speakers Notebooks Home Audio Subwoofers (Color : White) " 
                        price={177.72}
                        image="https://images-na.ssl-images-amazon.com/images/I/5159%2Bv1oedL._AC_SL1024_.jpg"
                        rating={0}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="88267948"
                        title="Luxsis Women's Slim Fit Jeans (Pack of 2) " 
                        price={495.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-VKWQ196L._UL1500_.jpg"
                        rating={4}
                    />
                </div>


            </div>
        </div>
    )
}

export default Home

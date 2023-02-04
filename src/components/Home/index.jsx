import React from 'react'

const Home = () => {
    return (
        <div className="container">
            {/* header section starts  */}

            <header className="header">

                <a href="/home" className="logo"> <i class="fas fa-heartbeat"></i> Mederma </a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    {/* <a href="#doctors">doctors</a> */}
                    <a href="#review">Review</a>
                    <a href="/appointment">Appointment</a>
                    {/* <a href="#blogs">blogs</a> */}
                </nav>

                <div id="menu-btn" class="fas fa-bars"></div>

            </header>

            {/* header section ends  */}

            {/* carousel section starts */}

            <div class="carousel"></div>
            
            {/* carousel section ends */}

            {/* <!-- home section starts  --> */}

            <section class="home" id="home">

                <div class="image">
                    <img src="image/home-img.svg" alt="" />
                </div>

                <div class="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <a href="#footer" class="btn"> contact us <span class="fas fa-chevron-right"></span> </a>
                </div>

            </section>

            {/* <!-- home section ends --> */}

            {/* <!-- icons section starts  --> */}

            <section class="icons-container">

                <div class="icons">
                    <i class="fas fa-user-md"></i>
                    <h3>20+</h3>
                    <p>doctors at work</p>
                </div>

                <div class="icons">
                    <i class="fas fa-users"></i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>

                <div class="icons">
                    <i class="fas fa-procedures"></i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>

                <div class="icons">
                    <i class="fas fa-hospital"></i>
                    <h3>20+</h3>
                    <p>available Medicares</p>
                </div>

            </section>

            {/* <!-- icons section ends --> */}

            {/* <!-- services section starts  --> */}

            <section class="services" id="services">

                <h1 class="heading"> our <span>services</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-notes-medical"></i>
                        <h3>free checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                </div>

            </section>

            {/* <!-- services section ends --> */}

            {/* !-- about section starts  --> */}

            <section class="about" id="about">

                <h1 class="heading"> <span>about</span> us </h1>

                <div class="row">

                    <div class="image">
                        <img src="image/about-img.svg" alt="" />
                    </div>

                    <div class="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                </div>

            </section>

            {/* <!-- about section ends --> */}

            {/* <!-- review section starts  --> */}

            <section class="review" id="review">

                <h1 class="heading"> client's <span>review</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src="image/pic-1.png" alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                    <div class="box">
                        <img src="image/pic-2.png" alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                    <div class="box">
                        <img src="image/pic-3.png" alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                </div>

            </section>

            {/* <!-- review section ends --> */}

            {/* <!-- blogs section starts  --> */}

            <section class="blogs" id="blogs">

                <h1 class="heading"> our <span>blogs</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src="image/blog-1.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="image/blog-2.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="image/blog-3.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                </div>

            </section>

            {/* <!-- blogs section ends --> */}

            {/* <!-- footer section starts  --> */}

            <section class="footer" id="footer">

                <div class="box-container">

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="#"> <i class="fas fa-chevron-right"></i> home </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> services </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> about </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> doctors </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> book </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> review </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> blogs </a>
                    </div>

                    <div class="box">
                        <h3>our services</h3>
                        <a href="#"> <i class="fas fa-chevron-right"></i> dental care </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> message therapy </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> cardioloty </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> diagnosis </a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> ambulance service </a>
                    </div>

                    <div class="box">
                        <h3>contact info</h3>
                        <a href="#"> <i class="fas fa-phone"></i> +94-112-280-450 </a>
                        <a href="#"> <i class="fas fa-fax"></i> +94-112-280-450 </a>
                        <a href="#"> <i class="fas fa-envelope"></i> info@mederma.lk </a>
                        <a href="#"> <i class="fas fa-at"></i> mederma@gmail.com </a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> Colombo 7, Sri Lanka </a>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                    </div>

                </div>

                <div class="credit"> created by <span>Pico Zen</span> SLIIT 3Y2S Project | all rights reserved </div>

            </section>

            {/* <!-- footer section ends --> */}
        </div>
    );
}

export default Home;

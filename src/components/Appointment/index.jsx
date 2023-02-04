import React from 'react'

const Appointment = () => {
    return (
        <div className="container">
            {/* header section starts  */}

            <header className="header">

                <a href="/home" className="logo"> <i class="fas fa-heartbeat"></i> Mederma </a>

                <nav className="navbar">
                    <a href="/home">home</a>
                    {/* <a href="#services">services</a> */}
                    {/* <a href="#about">about</a> */}
                    <a href="#doctors">Doctors</a>
                    <a href="#book">Appointment</a>
                    {/* <a href="#review">review</a> */}
                    {/* <a href="#blogs">blogs</a> */}
                </nav>

                <div id="menu-btn" class="fas fa-bars"></div>

            </header>

            {/* header section ends  */}

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

            {/* <!-- doctors section starts  --> */}

            <section class="doctors" id="doctors">

                <h1 class="heading"> our <span>doctors</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src="image/doc-1.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/doc-2.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/doc-3.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/doc-4.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/doc-5.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/doc-6.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                </div>

            </section>

            {/* <!-- doctors section ends --> */}

            {/* <!-- booking section starts   --> */}

            <section class="book" id="book">

                <h1 class="heading"> <span>book</span> now </h1>

                <div class="row">

                    <div class="image">
                        <img src="image/book-img.svg" alt="" />
                    </div>

                    <form action="">
                        <h3>book appointment</h3>
                        <input type="text" placeholder="your name" class="box" />
                        <input type="number" placeholder="your number" class="box" />
                        <input type="email" placeholder="your email" class="box" />
                        <input type="date" class="box" />
                        <input type="submit" value="book now" class="btn" />
                    </form>

                </div>

            </section>

            {/* <!-- booking section ends --> */}

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

                <div class="credit"> created by <span>'Pico Zen'</span> SLIIT 3Y2S Project | all rights reserved </div>

            </section>

            {/* <!-- footer section ends --> */}
        </div>
    );
}

export default Appointment;

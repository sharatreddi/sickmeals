import React, { useState, useEffect } from "react";
import Description from "./Description";
import Symptoms from "./Symptoms";
import Advised_food from "./advised_food";
import Restricted_food from "./restricted_food";
import Dos from "./dos";
import Donts from "./donts";
import Axios from "axios";


function Hero(){

  const [disease, setDisease] = useState("");
  const [diseaseData, setDiseaseData] = useState([]);
  //console.log(diseaseData)
  console.log(disease); 
  // const [dataa] = diseaseData;
  // console.log(dataa.dis_description);

useEffect(() => {
  Axios.get("http://localhost:3001/insert")
    .then((response) => {
      setDiseaseData(response.data.data[0]);
       console.log(diseaseData)
    })
    .catch((error) => {
      console.error(error);
    });
}, [diseaseData]);


  //This is happening (tick)-------------------------
  const submitDisease = ()=>{
    Axios.post("http://localhost:3001/insert",{
      diseasename : disease,
    }).then((data)=>{
      // console.log(data.data[0])
      setDiseaseData(data.data[0]);

      alert("successful reading")
    })
  }
  //This is happening (tick)-------------------------

  // takes the input and sets it to the disease name then goes to submitDisease
  function handleChange(event){
    const text = event.target.value 
    setDisease(text)
  }

    return (
      <div>
  <section id="hero" className="hero d-flex align-items-center">
  <div className="container">
    <div className="row gy-4 d-flex justify-content-between">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <h2 data-aos="fade-up">Your Friendly Food Suggestor</h2>
       
        <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
          <input type="text" className="form-control" placeholder="Enter your Disease" name="disease" onChange={handleChange}/>
          <button type="submit" className="btn btn-primary" onClick={submitDisease}>Search</button>
        </form>

      </div>

      <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
        {/* <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt=""/> */}
      </div>

      </div>
    </div>
  </section>
  <main id="main">

        {/* <!-- ======= Featured Services Section ======= --> */}
        <section id="featured-services" className="featured-services">
                 </section>
        {/* <!-- End Featured Services Section --> */}
    
        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about" className="about pt-0">
          <div className="container" data-aos="fade-up">
    
            <div className="row gy-4">
              <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                <img src="assets/img/children.jpg" className="img-fluid" alt=""/>
                <a title="nrml" href="https://youtu.be/p2LATm1ckk4" className="glightbox play-btn"></a>
              </div>
              <div className="col-lg-6 content order-last  order-lg-first">
                <h3>About Us</h3>
                <p>
                Staying healthy requires more than just luck. By proactively maintaining good health habits, you can greatly reduce your risk of becoming ill. This includes eating a well-balanced diet, exercising regularly, getting enough sleep, and practicing good hygiene. Additionally, keeping stress levels in check and getting regular check-ups and preventive care can also play a vital role in disease prevention. By prioritizing your health, you can live a happier and healthier life.
                </p>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="100">
                    
                    <div>
                      <h5>Adhere to a nutritious and well-balanced diet.</h5>
                      
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <div>
                      <h5>Incorporate whole and fresh foods into your meals.</h5>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <div>
                      <h5>Prioritize good eating habits for optimal health and disease prevention.</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
    
          </div>
        </section>
        {/* <!-- End About Us Section --> */}
    
       
    
        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">
    
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3> "Let food be thy medicine and medicine be thy food."</h3>
                <p> - Hippocrates</p>
              </div>
            </div>
    
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}
    
        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container">
    
            <Description desc={diseaseData.dis_description}/>

            <Symptoms desc={diseaseData.symptoms}/>

            <Advised_food desc={diseaseData.advised_food}/>

            <Dos desc={diseaseData.dos}/>

            <Restricted_food desc={diseaseData.restricted_food}/>

            <Donts desc={diseaseData.donts}/>
            {/* <!-- Features Item --> */}
    
            
            {/* <!-- Features Item --> */}
    
          </div>
        </section>
        {/* <!-- End Features Section --> */}
    
        
    
        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials">
          <div className="container">
    
            <div className="slides-1 swiper" data-aos="fade-up">
              <div className="swiper-wrapper">
    
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/aartu.jpg" className="testimonial-img" alt=""/>
                    <h3>Aarthi Komarneni</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Where did the tall person find a date? At the top of a step ladder
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
    
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/dp2_2.jpg" className="testimonial-img" alt=""/>
                    <h3>Sharat Reddi</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Suwiiiiiiiiiiiii
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
    
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/bubble2.jpg" className="testimonial-img" alt=""/>
                    <h3>NB Sathwik😂</h3>
                    <h4>Database Creator</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Don't be afraid of few extra pounds. Round people are harder to kidnap.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
    
              </div>
              <div className="swiper-pagination"></div>
            </div>
    
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}
    
        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
    
            <div className="section-header">
              <span>Frequently Asked Questions</span>
              <h2>Frequently Asked Questions</h2>
    
            </div>
    
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-10">
    
                <div className="accordion accordion-flush" id="faqlist">
    
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                        <i className="bi bi-question-circle question-icon"></i>
                        What?
                      </button>
                    </h3>
                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                      heh!!
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}
    
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                        <i className="bi bi-question-circle question-icon"></i>
                       How?
                      </button>
                    </h3>
                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}
    
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                        <i className="bi bi-question-circle question-icon"></i>
                        enga?
                      </button>
                    </h3>
                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}
    
                </div>
    
              </div>
            </div>
    
          </div>
        </section>
        {/* <!-- End Frequently Asked Questions Section --> */}
    
      </main>
    //   {/* <!-- End #main --> */}

</div>



)
// <!-- End Hero Section -->

}

export default Hero;
import React from "react";

function Advised_food(props){
    return(
        <div>
            <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
              <div className="col-md-5">
                <img src="assets/img/do_eat1.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7">
                <h3>Do's</h3>
                <p>Foods that are suggested to eat.</p>
                <ul>
                  <li><i className="bi bi-check"></i> 
                  {props.desc}
                  {/* Carrots, green beans, mushrooms, beets, asparagus tips, or peeled zucchini, white rice. */}
                  </li>
                  {/* <li><i className="bi bi-check"></i>  Mushrooms, beets, asparagus tips, or peeled zucchini.</li>
                  <li><i className="bi bi-check"></i> While white rice is beneficial to treating diarrhea, avoid barley, brown rice, bulgar, millet, or similar whole grains which can make diarrhea worse.</li> */}
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Advised_food;
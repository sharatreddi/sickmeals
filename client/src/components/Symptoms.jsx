import React from "react";

function Symptoms(props){
    return(
        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
        <div className="col-md-5 order-1 order-md-2">
          <img src="assets/img/symptoms.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-7 order-2 order-md-1">
          <h3>Symptoms</h3>
          <p className="fst-italic">
          {/* Watery,loose stools; frequent bowel movements; cramping or pain in the abdomen, nausea, bloating;  possibly fever or bloody stools.  */}
          {props.desc}
          </p>
        </div>
      </div>
    )
}

export default Symptoms;
import React from "react"

function Description(props){
 
    return(
        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
    
              <div className="col-md-5">
                <img src="assets/img/evil1.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7">
                <h3>Brief description</h3>
                <p className="fst-italic">
                {/* Many cases of diarrhea are due to an infection in the gastrointestinal tract. Most cases of diarrhea are due to bacteria, viruses, or parasites. Digestive system disorders can also cause chronic diarrhea. */}
                {props.desc}
                </p>
              </div>
            </div>
    )

}

export default Description;
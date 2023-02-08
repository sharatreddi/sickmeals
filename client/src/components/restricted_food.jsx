import React from "react";

function Restricted_food(props){
    return(
        <div>
            <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img src="assets/img/bubble.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-7 order-2 order-md-1">
                <h3>Dont's</h3>
                <p className="fst-italic">
                  Foods that are not suggestable to consume.
                </p>
                <p>
                {/* Diarrhea causes the rapid depletion of water and electrolytes from the system. Avoid milk-based, greasy, high-fiber, or very sweet foods, high sugar drinks, caffeine, alcohol. Avoid high sugar drinks, like apple juice, grape juice, and soda, which can pull water into the intestine and make the diarrhea persist. */}
                {props.desc}
                </p>
              </div>
            </div>
        </div>
    )
}

export default Restricted_food;
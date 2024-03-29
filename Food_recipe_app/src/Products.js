import React from "react";

const Products = ({data}) => {
    return(
        <div style={{"backgroundColor" : "beige"}}>
            <div className="row">
                {data.map(data => 
                <div className="col-md-4">
                    <div class="card" style={{"width": "18rem","marginLeft":"15%"}}>
                        <img class="card-img-top" src={data.recipe.image} alt="card image cap" /> 
                        <div class="card-body" />
                        <center>
                            <h5 class="card-title">{data.recipe.label}</h5>
                            <p class="card-text">Total amount of Calories :{data.recipe.calories}</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </center>
                    </div>
                </div> 
                )}
            </div>
        </div>
    )
}

export default Products
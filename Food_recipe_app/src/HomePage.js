import react from 'react';
import { useState } from 'react';
import Products from './Products';

function HomePage(){

    const APP_ID = "1f48af3c";
    const APP_KEY = "263e0d82a0d468ec234116d6c32c94de";
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&form=0&to12`).then(
            Response => Response.json().then(
                (data) => {
                    console.log(data)
                    setData(data.hits)
                }
            )
        )
    }
    return(
        <div style={{"backgroundColor" : "beige"}}>
            <h1>Food recipe Application</h1><br/>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br/><br/>
                <input type="submit" className="btn btn-primary" value="Search"/>
            </form>
            {data.length >= 1 ? <Products data={data}/>:null}
        </div>
    )
}

export default HomePage;
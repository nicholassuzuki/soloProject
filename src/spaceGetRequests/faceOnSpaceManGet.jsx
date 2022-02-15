import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function GetRequestHooks() {
    const [urlLink, setUrlLink] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://images-api.nasa.gov/asset/as11-40-5873')
            .then(response => response.json())
            .then(data => setUrlLink(data.collection.items[3].href));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5>Visiting from the Nasa API, a man facing us in a studio</h5>
            <div className="card-body">
                <img src={ urlLink }></img>
            </div>
            <Link to="/spaceButton">
                <button id="button">Back</button>
            </Link>

            <Link to="/">
                <button id="wayBack">Go Way Back</button>
            </Link>


        </div>
    );
}

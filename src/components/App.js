// create your App component here

import React, { useState, useEffect } from "react";

function App(){
    const [image, setImage] = useState(null)

    useEffect( () =>
        {fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setImage(data.message))},
        []
    )

    console.log(image)

    if (!image){
        return <h2>Loading</h2>
    }

    return <img src={image} alt="A Random Dog"/>
    
}

export default App
import React from "react";

import "../styles/meme.css"

function Meme() {

    const [meme, setMeme] = React.useState({

        topText: "",
        bottomText: "",
        image: "https://i.imgflip.com/3si4.jpg"
    })

    const [allImages, setAllImages] = React.useState([]);

    React.useEffect(() => {

        async function getImages() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllImages(data.data.memes);
            
        }
        getImages();
    });


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allImages.length);

        const url = allImages[randomNumber]?.url;


        setMeme((preveState)=> {

          return  {...preveState, image: url}
        })

        console.log(url);
    }

    // getMemeImage();

    return (

        <div className="form">

            <input

                type="text"
                placeholder="top text"
                className="form-input"

            />



            <input

                type="text"
                placeholder="bottom text"
                className="form-input"


            />

            <button className="form-btn"  onClick={getMemeImage}> get a new meme image</button>

        </div>
    )
}
export default Meme;
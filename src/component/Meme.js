import React from "react"

export default function MemeComponemt() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumbers = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumbers].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <section className="meme-component">
            <div className="form-container">
                <input 
                    type="text" 
                    className="form" 
                    placeholder="Enter Top"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form" 
                    placeholder="Enter Bottom"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button className="btn-form" onClick={getMemeImage}>
                Get a new meme <i className="fa-solid fa-image"></i>
            </button>

            <div className="meme">
                <img src = {meme.randomImage} className = "meme-img" />
                <h2 className="topText">{meme.topText}</h2>
                <h2 className="bottomText">{meme.bottomText}</h2>
            </div>
        </section>
    )
}
import Logo from "../images/Logo.png"

export default function Header() {
    return(
    <header className="header">
        <img src= {Logo} alt="Troll Face" className="header-logo" />
        <h2 className="header-title">Meme Generator</h2>
    </header>
    )
}
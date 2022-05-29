// import "./App.css";
import "./MobileHome.css";
import SocialIcons from "./SocialIcons.js";

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <h1 className="noselect">oliver bryan</h1>
                <a href="/work" className="Page-link noselect">
                    Work
                </a>
                <br className="noselect" />
                <a href="/about" className="Page-link noselect">
                    About
                </a>
            </header>

            <SocialIcons />
        </div>
    );
}

export default Home;

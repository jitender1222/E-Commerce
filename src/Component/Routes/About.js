import Footer from "../Page/Footer";
import HomePage from "../Page/HomePage";
import Services from "../Page/Services";
import Trusted from "../Page/Trusted";
import Contact from "./Contact";

const About=()=>{
    return(
        <div>
            <h2>About us</h2>
            <HomePage />
            <Services />
            <Trusted />
            <Contact />
            <Footer />
        </div>
    )
}

export default About;
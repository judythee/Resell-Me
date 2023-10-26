import image from "../assets/images/girl-in-glasses.webp"
import Button from "./Button";

const About = ({about}) => {
  return (
    <section className="about">
        <img src={image} alt="" />
        <div className="textBox">
            <h2 className="sm">{about.title}</h2>
            <p className="firstP">{about.text}</p>
            <p className="lastP">{about.text2}<span>{about.text3}</span></p>
        <Button title="Read More" />
        </div>
    </section>
  )
}

export default About
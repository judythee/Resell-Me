// import { ReactComponent as RegIcon } from "../assets/images/register-icon.svg"
// import { ReactComponent as ClientIcon } from "../assets/images/money-icon.svg"
// import { ReactComponent as MonIcon } from "../assets/images/find-client-icon.svg"
import Button from "./Button";



const GettingStarted = ({start}) => {
    // const icons = [RegIcon,ClientIcon,MonIcon];
    const numbs = ["1", "2", "3"]

  return (
    <section className="get-start">
        <h2 className="sm">{start.title}</h2>
        <div className="wrapper">
            {start.cards && start.cards.map(card => {
                return(
                    <div className="card">
                        <div className="img">
                            <img src={card.icon} alt="" />
                            <card.icon/>
                        </div>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <p>{card.text2}</p>
                        </div>
                        <span className="number">{card.num}</span>
                    </div>
                )
            })}
        </div>
        <Button toPath="/" title="Get started" />
    </section>
  )
}

export default GettingStarted
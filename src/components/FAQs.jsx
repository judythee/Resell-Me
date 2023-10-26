import { useState } from "react"

const FAQs = ({faq}) => {
    const[active, setActive] = useState(null)

    const toggle = (i) => {
        if(active == i){
            return setActive(null)
        }
        setActive(i)
    }

  return (
    <section className="FAQs">
        <div className="heading">
            <h2 className="sm">{faq.title}</h2>
            <p>{faq.text}</p>
            <p>{faq.text2}</p>
        </div>
        <div className="wrapper">
            {faq.cards && faq.cards.map((card, i) => {
                return(
                    <div className={active === i ? "card active": "card"} onClick={() => toggle(i)}>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default FAQs
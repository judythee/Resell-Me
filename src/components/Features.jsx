

const Features = ({feature}) => {
  return (
    <section className="features">
        <div className="heading">
            <h2 className="sm">{feature.title}</h2>
            <p>{feature.text}</p>
        </div>
        <div className="wrapper">
            {feature.cards && feature.cards.map(card => {
                return(
                    <div className="card">
                        <div className="icons">
                            <card.icon className="icon"/>
                        </div>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Features
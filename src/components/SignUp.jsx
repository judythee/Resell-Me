import Button from "./Button";

const SignUp = ({sign}) => {
  return (
    <section className="signup">
        <div className="wrapper">
            <h2 className="sm">{sign.title}</h2>
            <p>{sign.text}</p>
            <Button className="white-bg" toPath="/" title="sign up for free" />
        </div>
    </section>
  )
}

export default SignUp
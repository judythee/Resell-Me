import { Link } from "react-router-dom";

const Button = ({toPath, title}) => {
  return (
    <Link to={toPath} className="btn">{title}</Link>
  )
}

export default Button
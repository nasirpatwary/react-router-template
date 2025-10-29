import { Link } from "react-router";

const ButtonComponent = ({ children, to, className = "" }) => {
  return (
    <Link
      to={to}
      className={`${className} btn duration-500 hover:text-white font-semibold`}
    >
      {children}
    </Link>
  );
};

export default ButtonComponent;

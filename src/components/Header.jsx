import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { username, logOut } = useAuth();
  return (
    <header>
      <nav>
        {" "}
        <Link to="/home">Home</Link>
        {!username ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <span> Welcome {username} </span>
            <button onClick={logOut}>Log Out</button>
          </>
        )}
      </nav>
    </header>
  );
}

import { Link } from "wouter/preact";
import { useAuthContext } from "../hooks/useAuthContext";

const Nav = () => {
  const user = useAuthContext().user;
  return (
    <nav className="fixed min-w-full top-0">
      <div className="flex justify-between px-3">
        <ul className="flex space-x-3">
          <li>
            <Link className="text-white" href="/">Home</Link>
          </li>
          <li>
            <a className="text-white" href="https://www.instagram.com/gentlescratches/?hl=en">@GentleScratchesTattoo</a>
          </li>
          <li>
            <Link className="text-white" href="/custom">Request Custom Tattoo</Link>
          </li>
        </ul>

        <div>
          {user
             ? <Link className="text-white" href="/admin">Dashboard</Link>
             : <Link className="text-white" href="/login">Sign in</Link>
            }
        </div>
      </div>
    </nav>
  )
};

export default Nav
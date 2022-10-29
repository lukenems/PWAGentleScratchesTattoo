import { Link } from "wouter/preact";

const Nav = () => (
    <nav className="fixed min-w-full top-0">
      <div className="flex justify-between px-3">
        <ul className="flex space-x-3">
          <li>
            <a className="text-white" href="https://www.instagram.com/gentlescratches/?hl=en">@GentleScratchesTattoo</a>
          </li>
          <li>
            <Link className="text-white" href="/custom">Request Custom Tattoo</Link>
          </li>
          <li>
            <Link className="text-white" href="#">Email</Link>
          </li>
        </ul>

        <div>
          <Link className="text-white" href="/login">Sign in</Link>
        </div>
      </div>
    </nav>
);

export default Nav
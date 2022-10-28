import { Link } from "wouter/preact";

const Nav = () => (
    <nav className="fixed min-w-full top-0">
      <div className="flex justify-between">
        <ul className="flex space-x-3">
          <li>
            <Link className="text-white" href="/">@GentleScratchesTattoo</Link>
          </li>
          <li>
            <Link className="text-white" href="#">Request Custom Tattoo</Link>
          </li>
          <li>
            <Link className="text-white" href="#">Email</Link>
          </li>
        </ul>

        <div>
          <Link className="text-white" href="/sign-in">Sign in</Link>
        </div>
      </div>
    </nav>
);

export default Nav
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className="max-w-285 mx-auto">
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <MyNavLink href={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink href={"/about"}>About</MyNavLink>
          </li>
          <li>
            <MyNavLink href={"/career"}>Career</MyNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

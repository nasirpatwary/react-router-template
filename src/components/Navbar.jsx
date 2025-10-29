import { Link, NavLink, useLocation } from "react-router";
import Container from "../shard/Container";
import ButtonComponent from "../shard/ButtonComponent";
import { useEffect, useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
    </>
  );
  useEffect(() => {
    if (open) setOpen(false);
  }, [location.pathname]);
  return (
    <nav className="shadow fixed w-full bg-white/30 backdrop-blur-sm z-50">
      <Container className="navbar justify-between">
        <Link to="/" className="flex">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
            className="h-8 w-auto"
          />
        </Link>
        <div>
          <div className="hidden lg:flex gap-6 items-center">
            <ul className="gap-6 font-jost text-gray-700 font-medium menu-horizontal">
              {links}
            </ul>
            <ButtonComponent to="/" className="btn-sm bg-[#4F0FD1] text-white">
              Get Start
            </ButtonComponent>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            {open ? (
              <X
                size={22}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <Menu
                size={22}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
            )}

            {/* Mobile Drawer */}
            <div
              className={`fixed top-16 right-0 w-full md:w-1/3 h-screen bg-base-200 shadow-lg transition-transform duration-500 ease-in-out transform ${
                open ? "translate-x-0" : "translate-x-[100%]"
              }`}
            >
              <ul className="menu space-y-4 font-jost font-medium p-4">
                {links}
                <div className="group">
                  <ButtonComponent
                    to="/"
                    className="btn-sm bg-[#4F0FD1] text-white"
                  >
                    Get Started
                    <MoveRight
                      size={16}
                      className="translate-x-0 group-hover:translate-x-2 duration-500"
                    />
                  </ButtonComponent>
                </div>
              </ul>
            </div>

            {/* Background Overlay */}
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              ></div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

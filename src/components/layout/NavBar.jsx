import { useState } from "react";
import { NavItems } from "../../data/NavItems";

import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  NavList,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo.png" />
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero">
                    <Profile>
                      <img
                        src="./images/profile-picture.jpg"
                        alt="Bruno Pittini"
                      />
                      <span>Bruno Pittini</span>
                    </Profile>
                  </NavLink>
                ) : null}
                {navItem.text ? (
                  <NavLink href="{navItem.href">{navItem.text}</NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink href="#" target="_blank">
                      <FaYoutube />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaTwitter />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

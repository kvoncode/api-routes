import styled from "styled-components";

import Link from "next/link";

const StyledNavbar = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const StyledLink = styled.a`
  color: #808080;
  font-family: "Open Sans", sans-serif;
  margin: 1rem;
  text-decoration: none;

  &:hover {
    color: #fe8e7a;
  }
`;

const StyledLinks = styled.div`
  position: absolute;
  right: 200px;
`;

export const Navbar = () => {
  return (
    <div>
      <StyledNavbar>
        <Link href="/" passHref>
          <a>
            <Logo src="/logo.svg"></Logo>
          </a>
        </Link>
        <StyledLinks>
          <Link href="/login" passHref>
            <StyledLink>Login</StyledLink>
          </Link>
          <Link href="/registration" passHref>
            <StyledLink>Registration</StyledLink>
          </Link>
        </StyledLinks>
      </StyledNavbar>
    </div>
  );
};

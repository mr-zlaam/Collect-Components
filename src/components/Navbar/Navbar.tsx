import {} from "react";
import "./Navbar.scss";

interface NavbarProps {
  children?: React.ReactNode;
  height?: string | "" | undefined;
  width?: string | "" | undefined;
  backgroundColor?: string | "" | undefined;
  color?: string | "" | undefined;
  fixed?: boolean;
  sticky?: boolean;
  absolute?: boolean;
  relative?: boolean;
}
//Main Navbar
export const Navbar = ({
  children,
  height = "60px",
  width = "100%",
  backgroundColor = "#ffffff",
  color = "#000000",
  fixed = false,
  sticky = true,
  relative = false,
}: NavbarProps) => {
  const nav_fixed = fixed && "fixed";
  const nav_sticky = sticky && "sticky";
  const nav_relative = relative && "relative";
  return (
    <header
      className={`navbar_header ${nav_fixed}  ${nav_sticky} ${nav_relative}  `}
      style={{
        height: height,
        width: width,
        background: backgroundColor,
        color: color,
      }}
    >
      {children}
    </header>
  );
};
interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export const NavbarLogo = ({
  children = "NavbarLogo",
  ...rest
}: NavbarLogoProps) => {
  return <div {...rest}>{children}</div>;
};

export const NavbarLinksWrapper = ({ children }: NavbarLogoProps) => {
  return <div>{children}</div>;
};
interface NavLinkProps extends React.HTMLAttributes<HTMLHyperlinkElementUtils> {
  children?: React.ReactNode;
  href?: string | "" | undefined;
  to?: string | "" | undefined;
  color?: string | "" | undefined;
  backgroundColor?: string | "" | undefined;
}
export const NavLink = ({
  children = "Link",
  className,
  color = "#000000",
  backgroundColor = "",
  ...rest
}: NavLinkProps) => {
  return (
    <a
      {...rest}
      className={`hyperLink ${className}`}
      style={{ color: color, background: backgroundColor }}
    >
      {children}
    </a>
  );
};
import DropDownArrow from "./dropdown.svg";
interface DropDownProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const DropDown = ({ children = "Services" }: DropDownProps) => {
  return (
    <>
      <span className="dropdownContainer">
        {children} <img src={DropDownArrow} alt="dropdown" width={20} />
      </span>
    </>
  );
};

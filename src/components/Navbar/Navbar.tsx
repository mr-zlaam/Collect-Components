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
  return <div className="NavbarLinksWrapper">{children}</div>;
};
interface NavLinkProps extends React.HTMLAttributes<HTMLHyperlinkElementUtils> {
  children?: React.ReactNode;
  href?: string | "" | undefined;
  to?: string | "" | undefined;
  color?: string | "" | undefined;
  backgroundColor?: string | "" | undefined;
  target?: "_blank" | "_parent" | "_self" | "_top" | "" | undefined;
}
export const NavLink = ({
  children = "Link",
  className,
  color = "#000000",
  backgroundColor = "",
  ...rest
}: NavLinkProps) => {
  return (
    <div className={className}>
      <a
        {...rest}
        className={`hyperLink ${className}`}
        style={{ color: color, background: backgroundColor }}
      >
        {children}
      </a>
    </div>
  );
};
import DropDownArrow from "./dropdown.svg";
interface DropDownProps extends React.HTMLAttributes<HTMLSpanElement> {
  title?: string | undefined;
  backgroundColor?: string | undefined | "";
  color?: string | undefined | "";
}

export const DropDown = ({
  children,
  title = "Services",

  backgroundColor = "#ffffff",
  color = "#000000",
}: DropDownProps) => {
  return (
    <>
      <div className="dropdownContainer">
        {title} <img src={DropDownArrow} alt="dropdown" width={20} />
        <div
          className="dropDownModal"
          style={{ background: backgroundColor, color: color }}
        >
          <div className="dropdownLink">{children}</div>
        </div>
      </div>
    </>
  );
};

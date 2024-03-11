import React from "react";
import "./Modal.scss";
import cross from "./cross.svg";
interface ModalProps {
  children?: React.ReactNode;
  width?: string | "" | undefined;
  height?: string | "" | undefined;
  isOpen?: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundColor?: string | "" | undefined;
}
interface ChildrenProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string | "" | undefined;
  children?: React.ReactNode;
}
//Modal Wrapper
export const ModalWrapper = ({
  children,
  height,
  width,
  isOpen,
  onClose,
  backgroundColor = "#ffff",
  ...rest
}: ModalProps) => {
  const togglerModalClass = isOpen ? "visible_modal" : "hidden_modal";
  return (
    <>
      {isOpen && (
        <div
          className="modal_closer"
          onClick={() => {
            onClose(false);
          }}
        />
      )}
      <div
        {...rest}
        className={`modal_wrapper ${togglerModalClass} `}
        style={{ height: height, maxWidth: width, background: backgroundColor }}
      >
        <div className="cross_svg" onClick={() => onClose(false)}>
          <img src={cross} alt="close" />
        </div>
        {children}
      </div>
    </>
  );
};
//Modal header
export const ModalHead = ({
  children = "Modal Title",
  className = "",
  ...rest
}: ChildrenProps) => {
  return (
    <div {...rest} className={`modal_head ${className}`}>
      {children}
    </div>
  );
};
//modal Body
export const ModalBody = ({
  children = "Modal Description",
  className = "",
  ...rest
}: ChildrenProps) => {
  return (
    <div {...rest} className={`modal_body ${className}`}>
      {children}
    </div>
  );
};
//modal  Footer
export const ModalFooter = ({
  children = "Modal Buttons",
  className = "",
  ...rest
}: ChildrenProps) => {
  return (
    <div {...rest} className={`modal_footer ${className}`}>
      {children}
    </div>
  );
};

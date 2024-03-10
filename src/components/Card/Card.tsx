import "./Card.scss";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  src?: string | undefined;
  srcTitle?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  imgWidth?: number | string;
  imgHeight?: number | string;
  imgClass?: string | undefined;
  imgObjectFit?: "contain" | "cover" | undefined;
}
function Card({
  className,
  srcTitle,
  src,
  width,
  height,
  imgWidth,
  children,
  imgClass,
  imgObjectFit,
  imgHeight,
  ...rest
}: CardProps) {
  return (
    <>
      <div {...rest} className={`card_container ${className}`}>
        <div className="image_container">
          <img
            className={imgClass}
            src={src || "https://dummyimage.com/600x400/000/fff"}
            alt={srcTitle || "Image Not found"}
            width={imgWidth || 600}
            height={imgHeight || 400}
            style={{
              width: width || "100%",
              height: height || "100%",
              objectFit: imgObjectFit || "cover",
            }}
          />
        </div>
        <div className="content_container">{children}</div>
      </div>
    </>
  );
}

export default Card;

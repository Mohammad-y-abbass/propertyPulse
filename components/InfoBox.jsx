import Link from "next/link";

const InfoBox = ({description, link, linkText, title, style, linkStyle}) => {
  return (
    <div className={style}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='mt-2 mb-4'>
        {description}
      </p>
      <Link
        href={link}
        className={linkStyle}
      >
        {linkText}
      </Link>
    </div>
  );
}

export default InfoBox
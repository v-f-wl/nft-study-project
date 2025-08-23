import './Heading.scss'
type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  label: string;
};

const headingMap = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

const Heading = ({ level = 1, className = "", label }: HeadingProps) => {
  const Tag = headingMap[level];
  return <Tag className={`heading-h${level} ${className}`}>{label}</Tag>;
};

export default Heading;

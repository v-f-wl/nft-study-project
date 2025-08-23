import './Text.scss'
type TextProps = {
  className?: string;
  label: string
};

const Text = ({ className = "", label }: TextProps) => {
  return <p className={`text ${className}`}>{label}</p>;
};

export default Text;
import classNames from 'classnames';

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

const Button = ({ large = false, onClick, text, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(
        'w-full bg-orange-500 hover:bg-orange-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none',
        { 'py-3 text-base': large, 'py-2 text-sm': !large },
      )}
    >
      {text}
    </button>
  );
};
export default Button;

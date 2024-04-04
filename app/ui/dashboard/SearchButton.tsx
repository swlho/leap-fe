import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SearchButton({ children, className, ...rest }: ButtonProps){
    return (
      <div className='flex justify-center'>
        <button type="submit"
          {...rest}
          className={clsx(
            'btn btn-wide btn-lg btn-warning',
            className,
          )}
        >
          {children}Leap!
        </button>
      </div>
    );
  }
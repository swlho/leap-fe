import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFirstRequest:boolean;
}

export default function CreateJoinButton({ children, className, isFirstRequest}: ButtonProps){
    console.log(isFirstRequest)
    return (
      <button type="submit"
        className={clsx(
          'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          className,
        )}
      >
        {children}{isFirstRequest? 'Create & Join' : 'Join'}
      </button>
    );
  }
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`font-lemonRegular flex flex-row items-center leading-none text-white`}
    >
      {/* <AcademicCapIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <img src='/logo-white.svg'className="h-16 w-16 pt-3"/>
      <p className="text-[50px] pt-3 ">Leap</p>
    </div>
  );
}

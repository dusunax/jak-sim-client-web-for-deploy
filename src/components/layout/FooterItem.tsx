'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ComponentType, SVGProps } from 'react';

interface FooterItemProps {
  text: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const FooterItem = ({ text, name, icon: Icon }: FooterItemProps) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(`/${name}`)!;

  return (
    <li className='flex-1'>
      <Link href={`/${name}`} className='flex flex-col justify-center items-center'>
        <Icon className={ isActive ? 'fill-primary w-6 h-6' : 'w-6 h-6'} />
        <p
          className={`flex justify-center items-center min-w-[28px] h-[22px] text-[10px] font-semibold ${isActive && 'text-primary'}`}
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default FooterItem;

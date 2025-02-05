'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      <Link href={`/${name}`} className='flex flex-col items-center justify-center'>
        <Icon className={isActive ? 'h-6 w-6 fill-v1-primary' : 'h-6 w-6'} />
        <p
          className={`flex h-[22px] min-w-[28px] items-center justify-center text-[13px] font-medium ${isActive && 'text-v1-primary'}`}
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default FooterItem;

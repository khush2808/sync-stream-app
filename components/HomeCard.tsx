'use client';

import { type CSSProperties } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
  style?: CSSProperties;
  iconClassName?: string;
}

const HomeCard = ({ className, img, title, description, handleClick, style, iconClassName }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-dark-3 px-5 py-7 flex flex-col gap-6 w-full xl:max-w-[270px] min-h-[260px] rounded-[16px] cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-lg',
        className
      )}
      style={style}
      onClick={handleClick}
    >
      <div className={cn('flex-center size-14 rounded-xl', iconClassName)}>
        <Image src={img} alt="meeting" width={28} height={28} />
      </div>
      
      <div className="mt-auto flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
        <p className="text-sm font-normal text-white/50">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;

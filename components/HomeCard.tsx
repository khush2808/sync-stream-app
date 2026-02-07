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
        'bg-dark-3 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer border-b-[3px] border-orange-1 transition-all hover:brightness-110',
        className
      )}
      style={style}
      onClick={handleClick}
    >
      <div className={cn('flex-center size-12 rounded-[10px] bg-orange-1/20', iconClassName)}>
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal text-white/70">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;

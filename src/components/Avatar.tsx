import React from 'react';
import type { AvatarColor } from '../types';
import { AVATAR_PALETTE, getInitials } from '../utils/sportConfig';

interface AvatarProps {
  name: string;
  color: AvatarColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showRing?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
}

const SIZE_CLASSES: Record<NonNullable<AvatarProps['size']>, string> = {
  xs: 'w-7 h-7 text-[11px]',
  sm: 'w-9 h-9 text-xs',
  md: 'w-11 h-11 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-2xl',
};

export const Avatar: React.FC<AvatarProps> = ({
  name,
  color,
  size = 'md',
  className = '',
  showRing = false,
  onClick,
  title,
}) => {
  const palette = AVATAR_PALETTE[color] ?? AVATAR_PALETTE.emerald;
  const initials = getInitials(name);
  const ringCls = showRing ? `ring-2 ${palette.ring}` : '';
  const baseCls = `${SIZE_CLASSES[size]} ${palette.bg} ${palette.text} ${ringCls} rounded-full inline-flex items-center justify-center font-bold tracking-tight select-none shrink-0 shadow-sm ${className}`;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        title={title || `Vezi profilul lui ${name}`}
        aria-label={`Vezi profilul lui ${name}`}
        className={`${baseCls} transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 cursor-pointer`}
      >
        {initials}
      </button>
    );
  }

  return (
    <div className={baseCls} title={title || name} aria-hidden="true">
      {initials}
    </div>
  );
};

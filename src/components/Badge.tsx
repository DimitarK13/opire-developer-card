import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  isGradient?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, isGradient = false }) => {
  return (
    <p className={`badge ${isGradient ? 'bg-gradient' : ''}`}>{children}</p>
  );
};

export default Badge;

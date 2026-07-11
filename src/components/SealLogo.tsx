import kseBadge from "@/assets/kse.png";

interface SealLogoProps {
  size?: number;
  className?: string;
}

export default function SealLogo({ size = 56, className = "" }: SealLogoProps) {
  return (
    <img
      src={kseBadge}
      alt="卡塞尔学院徽章"
      width={size}
      height={size}
      className={`object-contain rounded-full ${className}`}
    />
  );
}

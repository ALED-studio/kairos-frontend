import heart from '@/assets/heart.png'
import fist from '@/assets/fist.png'
import shield from '@/assets/shield.png'

const icons = { heart, fist, shield }

interface CardStatIconProps {
  value: number
  icon: 'heart' | 'fist' | 'shield'
}

export function CardStatIcon({ value, icon }: CardStatIconProps) {
  return (
    <div className="w-0 flex-1 aspect-square relative">
      <img
        src={icons[icon]}
        alt={icon}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-white text-base md:text-2xl leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {value}
        </span>
      </div>
    </div>
  )
}

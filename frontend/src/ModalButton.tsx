import React from 'react'
import { IconType } from 'react-icons'

type ButtonProps = {
  label: string
  disabled: boolean
  outline?: boolean
  small?: boolean
  Icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  Icon,
}) => {
  return (
    <button
      className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      hover:opacity-80
      transition
      w-full
      ${outline ? 'bg-white' : 'bg-[#ff385c]'}
      ${outline ? 'border-black' : 'border-[#ff385c]'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'py-1' : 'py-3'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border-[1px]' : 'border-2'}
    `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
        absolute
        left-4
        top-3
      "
        />
      )}
      {label}
    </button>
  )
}
export default Button

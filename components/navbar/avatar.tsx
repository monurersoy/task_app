import React from 'react'
import { Avatar as AvatarComponent, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Avatar() {
  return (
    <AvatarComponent className='mr-2 h-8 w-8'>
      <AvatarImage
        alt='Onur E.'
        src={`https://avatars.githubusercontent.com/u/108484452?v=4`} />
      <AvatarFallback className='uppercase'>
        OE
      </AvatarFallback>
    </AvatarComponent>
  )
}

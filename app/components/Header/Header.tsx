import React from 'react'
import { HeaderProps } from './Header.props'

export default function Header({...props}:HeaderProps) {
  return (
    <header {...props}>header</header>
  )
}

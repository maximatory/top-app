import React from 'react'
import {ButtonProps} from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button({children, appearance, className, ...props}:ButtonProps) {
  return (
    <button
        className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}
        {...props}
    >
        {children}
    </button>
  )
}

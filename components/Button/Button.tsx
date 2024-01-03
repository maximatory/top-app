import React from 'react'
import {ButtonProps} from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg';

export default function Button({children, arrow='none', appearance, className, ...props}:ButtonProps) {
  return (
    <button
        className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}
        {...props}
    >
        {children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
          [styles.right]: arrow === 'right',
          [styles.down]: arrow === 'down'
        })}>
            <ArrowIcon/>
          </span>}
    </button>
  )
}

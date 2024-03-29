import React from 'react'
import { TagProps } from './Tag.props'
import styles from './Tag.module.css'
import cn from 'classnames'

export default function Tag({ children, size = 'm', color="ghost", href, className, ...props }: TagProps) {
    return (
        <div className={cn(styles.tag, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.grey]: color === 'grey',
            [styles.primary]: color === 'primary',
        })}
            {...props}
        >
            {href 
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
            
        </div>
    );
}

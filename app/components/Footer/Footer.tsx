import React from 'react';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';

export default function Footer({className, ...props}:FooterProps) {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
			<div>
        OwlTop © 2020 - 2021 Все права защищены
			</div>
			<a href="#" target="_blank">Пользовательское соглашение</a>
			<a href="#" target="_blank">Политика конфиденциальности</a>
		</footer>
  )
}
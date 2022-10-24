import cn from 'classnames';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        Course Top © - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
}

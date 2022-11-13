import cn from 'classnames';
import { InputProps } from './Input.props';
import styles from './Input.module.css';

export function Input({
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <input
      placeholder="введите что-нибудь!"
      className={cn(className, styles.input)}
      {...props}
    />
  );
}

import cn from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './P.module.css';

export function Header({ ...props }: HeaderProps): JSX.Element {
  return (
    <div {...props}>
      <h1>
        Header
      </h1>
    </div>
  );
}

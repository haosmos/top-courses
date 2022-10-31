import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import styles from './P.module.css';
import { Menu } from '../Menu/Menu';

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
}

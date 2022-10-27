import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import styles from './P.module.css';

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return (
    <div {...props}>
      <h1>
        Sidebar
      </h1>
    </div>
  );
}

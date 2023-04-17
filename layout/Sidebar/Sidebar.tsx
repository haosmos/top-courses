import Link from 'next/link';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '../../components';

export function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <Search />
      <Menu />
    </div>
  );
}

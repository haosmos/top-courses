import cn from 'classnames';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

export function Textarea({
  className,
  ...props
}: TextareaProps): JSX.Element {
  return (
    <textarea placeholder="это плэйсхолдер!" />
  );
}

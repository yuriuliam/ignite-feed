import { cx } from '../utils/cx'

import styles from './Avatar.module.css'

export function Avatar({ hasBorder = false, className = '', src = '' }) {
  const classNames = cx(
    styles.avatar,
    hasBorder && styles.avatarHasBorder,
    className
  )

  return (
    <img className={classNames} src={src} />
  )
}

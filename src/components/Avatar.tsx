import React from 'react'
import { cx } from '../utils/cx'

import styles from './Avatar.module.css'

type AvatarProps = React.ComponentProps<'img'> & {
  hasBorder?: boolean
  src: string
}

export const Avatar: React.FC<AvatarProps> = ({
  hasBorder = false,
  className,
  ...rest
}) => {
  const classNames = cx(
    styles.avatar,
    hasBorder && styles.avatarHasBorder,
    className
  )

  return (
    <img {...rest} className={classNames} />
  )
}

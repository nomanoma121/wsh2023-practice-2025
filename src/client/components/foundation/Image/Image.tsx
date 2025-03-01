import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

import * as styles from './Image.styles';

type Props = Omit<ComponentProps<'img'>, 'className'> & {
  fill?: boolean;
};

export const Image: FC<Props> = ({ fill, src, ...rest }) => {
  // jpeg -> webp
  const webpSrc = src?.replace(/\.jpg$/, '.webp');
  return (
    <img
      className={classNames(styles.container(), {
        [styles.container__fill()]: fill === true,
      })}
      loading="lazy"
      src={webpSrc || src}
      {...rest}
    />
  );
};

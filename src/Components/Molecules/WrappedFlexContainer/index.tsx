import React, { FC, ReactNode } from 'react';
import cls from 'classnames';

import styles from './styles.scss';

const WrappedFlexContainer: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cls(styles.flex, className)}>{children}</div>;
};

export default WrappedFlexContainer;

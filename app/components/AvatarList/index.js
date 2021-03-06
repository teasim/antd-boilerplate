import React from 'react';
import Tooltip from 'antd/lib/Tooltip';
import Avatar from 'antd/lib/Avatar';
import classNames from 'teakit/cssname';

import styles from './index.less';

const AvatarList = ({ children, size, ...other }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      size,
    })
  );

  return (
    <div {...other} className={styles.avatarList}>
      <ul> {childrenWithProps} </ul>
    </div>
  );
};

const Item = ({ src, size, tips, onClick = () => {} }) => {
  const cls = classNames(styles.avatarItem, {
    [styles.avatarItemLarge]: size === 'large',
    [styles.avatarItemSmall]: size === 'small',
    [styles.avatarItemMini]: size === 'mini',
  });

  return (
    <li className={cls} onClick={onClick}>
      {tips ? (
        <Tooltip title={tips}>
          <Avatar src={src} size={size} style={{ cursor: 'pointer' }} />
        </Tooltip>
      ) : (
        <Avatar src={src} size={size} />
      )}
    </li>
  );
};

AvatarList.Item = Item;

export default AvatarList;

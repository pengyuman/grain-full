import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
// 主题颜色
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
// 继承FontAwesomeIcon的所有属性FontAwesomeIconProps
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
    // 拿出props的所有属性 ...restProps
    const { className, theme, ...restProps } = props
    // icon-primary 
    const classes = classNames('grain-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}

export default Icon

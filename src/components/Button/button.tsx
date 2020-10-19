import React from 'react'
import classNames from 'classnames'
// 枚举 按钮大小
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

// 按钮类型
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
// 按钮props
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props
    // btn,btn-lg,btn-primary
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}
// 按钮默认样式
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
export default Button
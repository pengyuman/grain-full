import React, { useState } from 'react'
import classNames from 'classnames'
// alert 类型
export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}
// alert Props
interface BaseAlertProps {
    className?: string;
    altType?: AlertType;
    title?: React.ReactNode;
    message?: React.ReactNode;
    closeText?: React.ReactNode; // 按钮内容
    closable?: boolean; // 是否显示关闭按钮

}
const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        className,
        altType,
        title,
        message,
        closeText,
        closable
    } = props
    const classes = classNames('alt', className, {
        [`alt-${altType}`]: altType
    })
    // 点击关闭按钮
    const [isCloseAlert, setIsCloseAlert] = useState<boolean>(false)
    return (
        <>
            {!isCloseAlert ? <div className={classes}>
                {closable ? (
                    <span className="alt-close" onClick={() => { setIsCloseAlert(true) }}>{closeText}</span>
                ) : null}
                <h4 className="alt-title">{title}</h4>
                <p className="alt-message">{message}</p>
            </div> : null}
        </>
    )
}
Alert.defaultProps = {
    altType: AlertType.Default,
    closable: true,
    closeText: 'x'
}
export default Alert
import React, { useContext, FunctionComponentElement, useState, useEffect } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props
    const context = useContext(MenuContext)
    // 类型断言，将defaultOpenSubMenus拥有数组的属性
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    // 如果是竖的菜单，
    const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpend)
    const [mouseEnter, setMouseEnter] = useState<string>('')
    // 鼠标划入的时候的类名

    // 鼠标划出删除类名
    // 鼠标选中的类名 is-active
    console.log('index', context.index, index)
    const classes = classNames('menu-item submenu-item ', className, {
        'is-active': context.index === index
    })
    const handelClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    useEffect(() => {
        console.log('数据发生改变', context, index, context.index.substring(1, context.index.length))
        // if (context.index.substring(1, context.index.length)){
        //     console.log('')
        // }
    }, [context.index])
    let timer: any
    const handelMouseEnter = (e: React.MouseEvent, toggle: boolean) => {
        console.log('鼠标划入')
        clearTimeout(timer)
        e.preventDefault()
        setMouseEnter('menu-hover')
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const handelMouseLeave = (e: React.MouseEvent, toggle: boolean) => {
        console.log('鼠标划出')
        clearTimeout(timer)
        e.preventDefault()
        setMouseEnter('')
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handelClick
    } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handelMouseEnter(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handelMouseLeave(e, false) }
    } : {}

    const renderChildren = () => {
        const subMenuClasses = classNames('full-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: `${index}-${i}` })
            } else {
                console.error('警告：Menu的子组件不是MenuItem ,请检查子组件编写是否正确')
            }
        })
        return (
            <ul className={`${subMenuClasses}`} onMouseLeave={hoverEvents.onMouseLeave}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={`${classes}`} onMouseEnter={hoverEvents.onMouseEnter}>
            <div className={`submenu-title`} {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
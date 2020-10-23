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
    // 选中之后的title的class类名
    const [selected,setSelected] = useState<string>('')
    const classes = classNames('menu-item submenu-item ', className)
    const handelClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    useEffect(() => {
      // 被选中之后的class类名
      let i= context.index
      let subIndex=i.substring(0,1)
      subIndex===index?setSelected('sub-selected') : setSelected('')
    }, [context.index])
    let timer: any
    const handelMouseEnter = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        setMouseEnter('menu-hover')
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const handelMouseLeave = (e: React.MouseEvent, toggle: boolean) => {
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
            <ul className={`${subMenuClasses} ${mouseEnter}`} onMouseLeave={hoverEvents.onMouseLeave}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} onMouseEnter={hoverEvents.onMouseEnter} >
          <div className={`sub-menu ${selected}`}>
            <div className={`submenu-title ${classes} `} {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
          </div>
        </li>
    )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
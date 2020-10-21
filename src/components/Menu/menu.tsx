import React, { useState, createContext } from 'react'
import classNames from 'classnames'
// import MenuItem from './menuItem'
import { MenuItemProps } from './menuItem'
// 菜单是横向还是纵向 type：是typescript 的一种用法，记得要去查一下
type MenuMdoe = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: string) => void;
export interface MenuPoros {
    // 默认高亮
    defaultIndex?: string;
    className?: string;
    mode?: MenuMdoe;
    // 自定义的style
    style?: React.CSSProperties;
    // 点击触发的回调
    onSelect?: SelectCallBack;
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallBack;
    mode?: MenuMdoe;
    defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuPoros> = (props) => {
    const { defaultIndex, className, mode, style, children, onSelect, defaultOpenSubMenus } = props
    const [currentActive, setActive] = useState(defaultIndex)
    const classes = classNames('full-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handelClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handelClick,
        mode,
        defaultOpenSubMenus
    }
    // 遍历menu的子组件的类型，如果是MenuItem就直返组件，如果不是就忽略掉并提示组件类型不正确
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            // 获取元素的所有属性和方法
            const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childrenElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                // 复制元素的属性，给每个元素传递index值
                return React.cloneElement(childrenElement, { index: index.toString() })
            } else {
                console.error('警告：Menu的子组件不是MenuItem ,请检查子组件编写是否正确')
            }

        })
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}
export default Menu
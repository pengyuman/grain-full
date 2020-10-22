import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
    return (
        <div className="App">
            <h4>button组件:</h4>
            <div className="flex">
                <Button btnType={ButtonType.Default}>default</Button>
                <Button btnType={ButtonType.Primary}>Primary</Button>
                <Button btnType={ButtonType.Primary} disabled>Primary</Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
                <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small danger</Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com">link Button</Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>link disabled Button</Button>
                <Button disabled>disabled</Button>
            </div>
            <h4>alert组件：</h4>
            <div className="flex">
                <Alert message="default 提示内容" altType={AlertType.Default}></Alert>
                <Alert message="success 提示内容" title="标题" altType={AlertType.Success}></Alert>
                <Alert message="Danger 提示内容" title="标题" altType={AlertType.Danger}></Alert>
                <Alert message="Warning 提示内容" title="标题" altType={AlertType.Warning}></Alert>
                <Alert message="没有关闭按钮" altType={AlertType.Default} closeText="关闭"></Alert>
            </div>
            <h4>Menu 组件：</h4>
            <div>
                <Menu>
                    <MenuItem > 菜单一</MenuItem>
                    <MenuItem disabled> 菜单二</MenuItem>
                    <SubMenu title="菜单二">
                        <MenuItem > 菜单2.1</MenuItem>
                        <MenuItem > 菜单2.2</MenuItem>
                    </SubMenu>
                    <MenuItem > 菜单三</MenuItem>
                </Menu>
                <div className="margin-top"></div>
                <Menu mode="vertical" defaultOpenSubMenus={['1']} className="menu-width">
                    <MenuItem > 菜单一</MenuItem>
                    <SubMenu title="菜单二">
                        <MenuItem > 菜单2.1</MenuItem>
                        <MenuItem > 菜单2.2</MenuItem>
                    </SubMenu>
                    <MenuItem disabled> 菜单三</MenuItem>
                    <SubMenu title="菜单四">
                        <MenuItem > 菜单3.1</MenuItem>
                        <MenuItem > 菜单3.2</MenuItem>
                    </SubMenu>
                </Menu>
                <div className="margin-top"></div>
            </div>
        </div>
    );
}

export default App;

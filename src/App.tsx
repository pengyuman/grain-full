import React, { useState } from 'react';
// 引入fortawesome库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)
function App() {
    const [btnShow, setBtnShow] = useState<boolean>(false)
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
                <Alert message="default 提示内容" altType={AlertType.Default} closeText={<Icon icon="window-close" size="1x" />}></Alert>
                <Alert message="success 提示内容" title="标题" altType={AlertType.Success} closeText={<Icon icon="times-circle" size="1x" />}></Alert>
                <Alert message="Danger 提示内容" title="标题" altType={AlertType.Danger} closeText="关闭"></Alert>
                <Alert message="Warning 提示内容" title="标题" altType={AlertType.Warning}></Alert>
                <Alert message="没有关闭按钮" altType={AlertType.Default} closeText={<Icon icon="times" size="1x" />}></Alert>
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
                    <SubMenu title="菜单四">
                        <MenuItem > 菜单4.1</MenuItem>
                        <MenuItem > 菜单4.2</MenuItem>
                    </SubMenu>
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
            <h4>Icon 组件：</h4>
            <div className="flex">
                <Icon icon="comment" theme="success" size="2x" />
                <Icon icon="angry" theme="danger" size="2x" />
                <Icon icon="bicycle" theme="primary" size="2x" />
                <Icon icon="battery-three-quarters" theme="secondary" size="2x" />
                <Icon icon="cat" theme="warning" size="2x" />
                <Icon icon="feather" theme="info" size="2x" />
                <Icon icon="faucet" theme="light" size="2x" />
                <Icon icon="heart" theme="danger" size="2x" />
                <Icon icon="times" size="2x" />
            </div>
            <h4>Transition 组件：</h4>
            <div>
                <Button btnType={ButtonType.Primary} onClick={() => { setBtnShow(!btnShow) }}>点击动画</Button>
                <h4>  </h4>
                <Transition
                    in={btnShow}
                    timeout={300}
                    animation="zoom-in-top"
                >
                    <div>这是一段超级超级长的话</div>
                </Transition>
                <Transition
                    in={btnShow}
                    timeout={300}
                    animation="zoom-in-bottom"
                    wrapper
                >
                    <Button btnType={ButtonType.Default}>按钮出来</Button>
                </Transition>
            </div>
            <h4>tab 组件：</h4>
        </div>
    );
}

export default App;

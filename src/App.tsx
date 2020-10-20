import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
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
        </div>
    );
}

export default App;

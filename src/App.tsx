import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
    return (
        <div className="App">
            {/* button组件 */}
            <p>button组件</p>
            <Button>默认</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small Primary</Button>
            <Button btnType={ButtonType.Link} href="http://www.baidu.com">link Button</Button>
            <Button disabled>disabled</Button>
        </div>
    );
}

export default App;

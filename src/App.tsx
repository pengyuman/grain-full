import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

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
        </div>
    );
}

export default App;

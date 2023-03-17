import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
border: 0;
background: none;
background-color: ${(props) => (props.isActive ? props.theme.color.primary : 'blue')};
cursor: pointer;
padding: 20px;
border-radius: 5px;
color: white;

:hover{
  background-color: ${(props) => (props.theme.color.secondary)};
}
`

function App3() {

    const [isActive, setIsActive] = useState(true);
    const [isNotActive, setIsNotActive] = useState(false);

    function onButtonClick() {
        setIsActive(isNotActive);
        setIsNotActive(isActive);
    }

    return (
        <div>
            <Button onClick={onButtonClick}>Change state</Button>
            <div>{isActive ? <div>I am active</div> : <div>I am not active</div>}</div>
        </div>
    )
}

export default App3;
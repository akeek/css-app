import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
border: 0;
background: none;
background-color: ${(props) => (props.isActive ? props.theme.color.secondary : 'blue')};
cursor: pointer;
padding: 20px;
border-radius: 5px;
color: white;

:hover{
  background-color: ${(props) => (props.theme.color.primary)};
}
`

function App4() {

    const [isActive, setIsActive] = useState(true);

    function toggleActive() {
        setIsActive(current => !current);
    }

    return (
        <div>
            <Button onClick={toggleActive}>Change state</Button>
            <div>{isActive ? <div>I am active</div> : <div>I am not active</div>}</div>
        </div>
    )
}

export default App4;
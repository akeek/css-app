import './styles.css'
import styled from 'styled-components';
import Logo from './images/logo.png';


const Button = styled.button`
  border: 0;
  background: none;
  background-color: ${(props) => (props.isActive ? props.theme.color.primary : 'blue')};
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  
  :hover{
    background-color: ${(props) => (props.theme.color.secondary)};
  }
`

const isActive = true;

function App() {
  return (
      <div>
        <div>Hello world</div>
        <img src={Logo} alt="Logo" />
        <p className='text'>Paragraph 1</p>
        <Button isActive={isActive}>Hello</Button>
      </div>
  );
}

export default App;
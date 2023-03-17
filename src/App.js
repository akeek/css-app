import './styles.css'
import styled, { ThemeProvider} from 'styled-components';

const theme = {
  color: {
    primary: 'purple'
  },
};


const Button = styled.button`
  border: 0;
  background: none;
  background-color: ${(props) => (props.isActive ? theme.color.primary : 'blue')};
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

const isActive = false;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>Hello world</div>
        <p className='text'>Paragraph 1</p>
        <Button isActive={isActive}>Hello</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
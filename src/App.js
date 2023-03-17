import './styles.css'
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  background: none;
  background-color: orange;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`


function App() {
  return (
    <div>
      <div>Hello world</div>
      <p className='text'>Paragraph 1</p>
      <Button>Hello</Button>
    </div>
  );
}

export default App;
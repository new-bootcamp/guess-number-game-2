import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
  const[guessedNumber, setGuessedNumber] = useState(Math.floor(Math.random() * 100))
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Guess the number from 1 to 100');
  const buttonHandler = () => {
    let intInputValue = parseInt(inputValue);
    if (intInputValue > guessedNumber) setMessage("It's too big. Try smaller.");
    else if (intInputValue < guessedNumber) setMessage("It's too small. Try bigger.");
    else if (intInputValue === guessedNumber) setMessage('You win! Congrats!');
    setInputValue('');
  }

  return (
      <div className="p-3 mb-2 bg-info text-white">
        <h1 className="d-flex justify-content-center d-flex text-primary">Guess the number</h1>
        <div className="d-flex justify-content-center">
          <input type="text" placeholder="input a number" value={inputValue}
                 onChange={(event) => setInputValue(event.target.value)}/>
          <button className="btn btn-dark" type="submit" onClick={buttonHandler}>Submit</button>
        </div>
        <h3 className="d-flex justify-content-center text-light bg-dark">{message}</h3>
      </div>
  );
}

export default App;

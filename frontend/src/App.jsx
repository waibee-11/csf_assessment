import { useState } from 'react'
import axios from 'axios'
import './App.css'
import DogFacts from './components/DogFacts'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  function submitForm(){
    axios.post('http://localhost:3000/', {
      name: name,
      age: age,
      email: email,
      password: password
    })
    .then((res) => {
      if (res.status == 200){
        alert("SUCCESS!")
      }
    });
  };

  return (
    <div>
      <div className="form">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email">Password</label>
          <input type="password" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <button onClick={submitForm}>Submit</button>
      <hr />
      <DogFacts />
    </div>
  )
}

export default App

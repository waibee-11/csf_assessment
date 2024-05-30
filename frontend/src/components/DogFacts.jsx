import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DogFacts() {
    const [dogImage, setDogImage] = useState("https://dog.ceo/api/breeds/image/random");

    async function findDogFact(){
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setDogImage(response.data.message);
    }

  return (
    <div className='dog-container'>
        <div className='dog-title'>GENERATE A DOG IMAGE</div>
        <img src={dogImage} alt="" />
        <button onClick={findDogFact}>Refresh</button>
    </div>
  )
}

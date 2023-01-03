import { red } from '@mui/material/colors';
import React ,{useState} from 'react'
import "/Users/umarraza/Documents/React/fake-store/src/common.css"
import UpdatedComponent from './Hoc';


function Person2({money,handleChange}) {
    

    return (
    <>
        <div className='person'>
            <h1>Scarlet Witch ( Person 2 ) increase the bet to $ {money}</h1>
            <button onClick={handleChange}  >Increase Bet</button>
        </div>
    </>
  )
}


export default UpdatedComponent(Person2);

import React, { FC, useState } from 'react'

const GuestsList: FC = () => {

    const [ name, setName ] = useState('');
    const [ guests, setGuests ] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

  return (
    <div>
        <h3>Guests List</h3>
        <ul>
            {guests.map((guest, index) => {
                return(
                    <li key={guest+index} >{guest}</li>
                )
            })}
        </ul>
        <input type='text' value={name} onChange={ e => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
  )
}

export default GuestsList
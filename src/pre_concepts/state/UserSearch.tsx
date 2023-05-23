import React, { FC, useState} from 'react'

const users = [
    { name: 'Sara', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'John', age: 20 }
]

const UserSearch: FC = () => {

    const [ name, setName ] = useState('');
    const [ user, setUser ] = useState<{ name: string, age: number} | undefined>()

    const onClick = () => {
        const foundUser = users.find(user => user.name === name);
        setUser(foundUser)
    }

  return (
    <div>UserSearch
        <input value={name} type='text' onChange={ e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user?.name}<br></br>
            {user?.age}
        </div>
    </div>
  )
}

export default UserSearch
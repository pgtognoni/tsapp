import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

const RepositoriesList: React.FC = () => {

    const [ term, setTerm ] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useSelector((state: any) => state.repositories)
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term)
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' value={term} onChange={e => setTerm(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default RepositoriesList
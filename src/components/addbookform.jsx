import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookcontext';

const AddBookForm = () => {
    const { dispatch } = useContext(BookContext);
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ide, setIde] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author, ide}
        })
        setTitle('');
        setAuthor('');
        setIde(null);
    }

    return (
        <div className='mx-auto mt-5'>
            <form onSubmit={handleSubmit}>
                <input className='form-control w-25 m-auto' type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input className='form-control w-25 m-auto' type='text' placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <input className='form-control w-25 m-auto' type='number' placeholder='id' value={ide} onChange={(e) => setIde(e.target.value)} required />
                <input className='form-control w-25 m-auto' type='submit' value='add book' />
            </form>
        </div>
    );
}

export default AddBookForm;


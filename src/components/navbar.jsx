import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookcontext';

const Navbar = () => {
    const { library } = useContext(BookContext);
    return (
        <div className='navbar d-block mt-5'>
            <h1>Mau's Reading List</h1>
            <p>Currently you have {library.length} books in your collection.  </p>
        </div>
    );
}

export default Navbar;

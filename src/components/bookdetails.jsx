import React, { useContext } from "react";
import { BookContext } from "../contexts/bookcontext";

const BookDetails = ({ book, id }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <li key={book.id} className='booklist list-group-item' onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className="title">{book.title} by {book.author}</div>
        </li>
    );
}

export default BookDetails;

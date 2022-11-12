import React, { createContext, useReducer, useEffect } from "react";
import { LibraryReducer } from "../reducers/booksreducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {

const [library, dispatch] = useReducer(LibraryReducer, [
    { title: 'Paradise Lost', author: 'John Milton', id: 1 },
    { title: 'Demian', author: 'Hermann Hess', id: 2 }
], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []
});

useEffect(() => {
    localStorage.setItem('books', JSON.stringify(library))
}, [library])

/*
    const [books, setBooks] = useState([
        { title: 'Paradise Lost', author: 'John Milton', id: 1 },
        { title: 'Demian', author: 'Hermann Hess', id: 2 }
    ])

    const addBook = (title, author, ide) => {
        setBooks([...books, { title, author, id: ide }])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };

*/

    return (
        <BookContext.Provider value={{library, dispatch}} >
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider;


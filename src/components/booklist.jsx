import React, { useContext } from "react";
import { BookContext } from "../contexts/bookcontext";
import BookDetails from "./bookdetails";

const BookList = () => {
    const {library} = useContext(BookContext);
    return library.length ? ( 
        <div className="book-list">
            <ul className="list-group">
                {
                    library.map((book, i) => {
                        return (
                            <BookDetails book={book} key={i}/>
                        )
                    })
                }
            </ul>
        </div>
     ) : (
        <div className= 'empty'> There are no books to read. </div>
     );
}
 
export default BookList;
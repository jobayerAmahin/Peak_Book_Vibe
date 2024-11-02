import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [bookData,setBookData]=useState([])
    useEffect(()=>{
        fetch('booksData.json')
            .then(res=>res.json())
            .then(data=>setBookData(data))
    },[])
 
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Available Books: {bookData.length}</h1>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                {
                    bookData.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId}=useParams()
    const id=parseInt(bookId)

    const data=useLoaderData()
    const book=data.find(book=>book.bookId===id)
    const {bookName}=book
    console.log(book)
    return (
        <div>
            <h1 className='text-2xl text-red-400'>{bookName}</h1>
        </div>
    );
};

export default BookDetail;
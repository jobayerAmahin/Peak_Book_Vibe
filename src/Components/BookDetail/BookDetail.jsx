import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalStorage } from '../Utility/markRead';

const BookDetail = () => {
    const {bookId}=useParams()
    const id=parseInt(bookId)

    const data=useLoaderData()
    const book=data.find(book=>book.bookId===id)
    const {bookName,image}=book
   
    const handleMarkBtn=(id)=>{
        addToLocalStorage(id)
    }
    return (
        <div className='w-9/12 space-y-8'>
            <h1 className='text-2xl text-red-400'>{bookName}</h1>
            <img className='w-60 h-80' src={image} alt="" />
            <div className='flex justify-between items-center'>
                <button onClick={()=>handleMarkBtn(bookId)} className='btn bg-green-500'>Mark As Read</button>
                <button className='btn bg-purple-500'>Suggest To Friends</button>
            </div>
        </div>
    );
};

export default BookDetail;
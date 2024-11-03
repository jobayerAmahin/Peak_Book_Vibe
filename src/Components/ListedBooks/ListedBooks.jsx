import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getLocalData } from '../Utility/markRead';
import { useEffect, useState } from 'react';
import MarkBar from '../MarkBook/MarkBar';

const ListedBooks = () => {
    const allBooks=useLoaderData()
    const [showMark,setShowMark]=useState([])
    useEffect(()=>{
        const markedBooks=getLocalData()
        const integerMarkedBooks=markedBooks.map((id)=>parseInt(id))
        const filteredBooks=allBooks.filter(book=>integerMarkedBooks.includes(book.bookId))
        setShowMark(filteredBooks)
    },[])
    console.log(showMark)
    return (
        <Tabs>
            <TabList>
            <Tab>Marked Books</Tab>
            <Tab>Suggest to friends</Tab>
            </TabList>
        
            <TabPanel>
            <h2>Marked</h2>
            {
                showMark.map((mark,idx)=><MarkBar mark={mark} key={idx}></MarkBar>)
            }
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
};

export default ListedBooks;
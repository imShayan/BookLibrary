import React from "react";
import { createRoot } from 'react-dom/client';


//Css 
import './index.css'

//setup Vars 
import {books} from './books'; 
import Book from './Book';

function BookList(){
  return (
  <>
  <h1 id="heading">15 Non fiction Books I have read since 2019</h1>
  <section className="booklist">
    {books.map((book)=>{
      return <Book key={book.id} {...book}/>
    })}
  </section>
  </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<BookList/>);

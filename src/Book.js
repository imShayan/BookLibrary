import React from 'react'

const Book = (props) =>{
    const {title,author,img} = props;
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target)
        alert(title+" not available for Download. !!!! Coming soon !!!!");
      };
    return (
    <article className="book" >
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button"
        onClick={clickHandler}>
          Download PDF
          </button>
    </article>
    );
  };

export default Book
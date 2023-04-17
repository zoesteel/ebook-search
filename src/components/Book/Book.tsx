import React from "react";
import BookStyles from "../styles/BookStyles";

export default function Book(props) {
  return (
    <BookStyles>
      <a href={props.url}>{props.title}</a>
      
      <p className="book-source">
        From: <a href={props.host}>{props.host}</a>  
      </p>
    </BookStyles>
  )
}

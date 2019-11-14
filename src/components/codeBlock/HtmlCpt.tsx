import React from 'react'
import ReactHtmlParser from 'react-html-parser';
export default function HtmlCpt(props:any) {
  return (
    <>
      {
        ReactHtmlParser(props.html)
      }
    </>
  )
}

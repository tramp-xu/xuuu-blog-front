import React from 'react'
import { Tag } from "antd"

export interface ArtcileModel {
  id: string,
  title: string,
  short: string,
  author: string,
  content: any,
  startDate: string,
  updateDate?: string,
  tags?: Array<string>
}

export interface AProps {
  model: ArtcileModel
}

function Article(props:AProps) {
  const model = props.model
  const { title, author, short, startDate, tags } =  model

  return (
    <article>
      <header>
        <div>{ title }</div>
        <div>{ author }</div>
        <div>{ startDate }</div>
      </header>
      <p>{ short }</p>
      <footer>
        {       
          tags ? tags.map((item, index) => {
            return (<Tag key={index} color="#2db7f5">{item}</Tag>)
          }) : ''
        }
      </footer>
    </article>
  )
}

export default Article

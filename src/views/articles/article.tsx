import React from 'react';
import { Tag } from 'antd';
import { ArticleStyle } from './style';

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
  const model = props.model;
  const { title, author, short, startDate, tags } =  model;

  return (
    <ArticleStyle>
      <article>
        <header>
          <div className="title">{title}</div>

          <div className="start-date"><span className="label">发布时间: </span>{startDate}</div>
        </header>
        <p className="short">{short}</p>
        <footer>
          <div className="tags-wrapper">
            {
              tags ? tags.map((item, index) => {
                return (
                  <Tag color="#2db7f5"
                    key={index}
                  >{item}</Tag>
                );
              }) : ''
            }
          </div>
          <div className="author"><span className="label">作者: </span>{author}</div>
        </footer>
      </article>
    </ArticleStyle>
  );
}

export default Article;

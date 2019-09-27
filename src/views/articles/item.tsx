import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { ArticleStyle } from './style';
import { ArtcileModel } from '../../models/article';

export interface AProps {
  model: ArtcileModel
}

function ArticleItem(props:AProps) {
  const model = props.model;
  const { title, author, short, startDate, tags, id } =  model;

  return (
    <ArticleStyle>
      <article>
        <Link to={`/front/article/detail/${id}`}>
          <header>
            <div className="title">{title}</div>

            <div className="start-date"><span className="label">发布时间: </span>{startDate}</div>
          </header>
        </Link>
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

export default ArticleItem;

import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import Markdown from '../../components/markdown/index'
import { ArticleStyle } from './style';
import { ArtcileModel } from '../../models/article';
import dayjs from "dayjs";

export interface AProps {
  model: ArtcileModel
}

function ArticleItem(props:AProps) {
  const model = props.model;
  const { title, shorter, createdDate, tags, id } =  model;
  const createdTime = dayjs(createdDate).format('YYYY-MM-DD')
  return (
    <ArticleStyle>
      <article>
        <Link to={`/front/article/detail/${id}`}>
          <header>
            <div className="title">{title}</div>

            <div className="start-date"><span className="label">发布时间: </span>{createdTime}</div>
          </header>
        </Link>
        <div className="short">
          <Markdown
            source={shorter}
          />
        </div>
        {/* <div className="more">... ...</div> */}
        <footer>
          <div className="tags-wrapper">
            {
              tags ? tags.map((item) => {
                return (
                  <Tag color="#2db7f5"
                    key={item.id}
                  >{item.name}</Tag>
                );
              }) : ''
            }
          </div>
          <div className="author"><span className="label">作者: </span>Jerome Hsu</div>
        </footer>
      </article>
    </ArticleStyle>
  );
  
}

export default ArticleItem;

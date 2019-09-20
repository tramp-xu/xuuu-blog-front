import React, { Component } from 'react';
import Swapper from "./swapper"
import { ContentWrapper } from "./style"
import Article from "./article"


export interface ArtcileModel  {
  id: string,
  title: string,
  short: string,
  author: string,
  content: any,
  startDate: string,
  updateDate?: string,
  tags?: Array<string>
}

const articles:Array<ArtcileModel> = [
  {
    id: '1',
    title: "webpack4 的环境配置",
    short: "简单的介绍一下环境的配置",
    author: "Xuuu",
    content: "xxxxxxxxxfgdsgsdg dsadsa",
    startDate: "2019-01-08",
    updateDate: "2019-06-30",
    tags: ["webpack", "前端"]
  },
  {
    id: '2',
    title: "微信小程序的接口封装",
    short: "接口封装",
    author: "Xuuu",
    content: "xxxxxxxxxfgdsgsdg dsadsa",
    startDate: "2019-05-08",
    updateDate: "2019-09-30",
    tags: ["微信小程序", "前端"]
  }
]

export default class Articles extends Component {

  _renderArticles = (record: Array<ArtcileModel>) => {
    if (record.length) {
      return record.map(item => {
        return <Article key={item.id} model={item}></Article>
      })
    } else {
      return (<span>主人太懒了，什么也没有写!</span>)
    }
  }
  
  public render() {
    return (
      <>
        <Swapper />
        <ContentWrapper>
          <div className="article-wrapper">
            { this._renderArticles(articles) }
          </div>
          <div className="minor-info"></div>
        </ContentWrapper>
      </>
    );
  }
}

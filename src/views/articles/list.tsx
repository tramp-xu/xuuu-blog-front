import React, { Component } from 'react';
import Swapper from './swapper';
import { ContentWrapper } from './style';
import ArticleItem from './item';
import { ArtcileModel } from '../../models/article';
import {_searchArticle} from "../../apis/article/index"
import { Spin } from 'antd'

// const articles:Array<ArtcileModel> = [
//   {
//     id: '1',
//     title: 'webpack4 的环境配置',
//     shorter: '简单的介绍一下环境的配置',
//     author: 'Xuuu',
//     content: 'xxxxxxxxxfgdsgsdg dsadsa',
//     startDate: '2019-01-08',
//     updateDate: '2019-06-30',
//     tags: ['webpack', '前端']
//   },
//   {
//     id: '2',
//     title: '微信小程序的接口封装',
//     shorter: '接口封装',
//     author: 'Xuuu',
//     content: 'xxxxxxxxxfgdsgsdg dsadsa',
//     startDate: '2019-05-08',
//     updateDate: '2019-09-30',
//     tags: ['微信小程序', '前端']
//   }
// ];

interface IState {
  list: ArtcileModel[],
  loading: boolean
}

export default class ArticleList extends Component<{}, IState> {

  public state = {
    list: [],
    loading: false
  }

  public componentDidMount () {
    this.searchArticles()
  }

  public _renderArticles = (record: Array<ArtcileModel>) => {
    if (record.length) {
      return record.map(item => {
        return (
          <ArticleItem key={item.id}
            model={item}
          ></ArticleItem>
        );
      });
    } else {
      return (<span>主人太懒了，什么也没有写!</span>);
    }
  }

  public render() {
    return (
      <>
        <Swapper />
        <Spin
          spinning={this.state.loading}
          tip="Loading..."
        >
          <ContentWrapper>
            <div className="article-wrapper">
              {this._renderArticles(this.state.list)}
            </div>
            <div className="minor-info"></div>
          </ContentWrapper>
        </Spin>
      </>
    );
  }

  private searchArticles = async () => {
    this.setState({
      loading: true
    })
    try {
      let resp = await _searchArticle()
      this.setState({
        list: resp.data,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false
      })
    }
  }
}

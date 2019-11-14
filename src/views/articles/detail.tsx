import React, { Component } from 'react';
import { Spin, Tag } from 'antd'
import { DetailWrapper } from './style';
import { _getArticle } from '../../apis/article/index'
// import Markdown from "react-markdown"
import Markdown from '../../components/markdown/index'
// import MarkNav from 'markdown-navbar'
import dayjs from "dayjs";
import { Tag as TagModel } from "../../models/tag";

interface Content {
  id: number,
  content: string
}

interface Article {
  createdDate: string,
  detail: Content,
  id: number,
  tags: TagModel[],
  shorter?: string,
  title: string,
  updatedDate: string,
  viewCount: number
}

interface AProps {
  match: any
}

interface IState {
  article: Article,
  loading: boolean
}

export default class ArticleDetail extends Component<AProps, IState> {

  public state = {
    loading: false,
    article: {
      createdDate: '',
      detail: {
        id: 0,
        content: ''
      },
      id: 0,
      tags: [],
      shorter: '',
      title: '',
      updatedDate: '',
      viewCount: 0
    }
  }

  public componentDidMount () {
    let id:string = this.props.match.params.id
    this.getArticle(id)
  }

  public render() {
    let { title, viewCount, detail, createdDate, tags } = this.state.article
    return (
      <DetailWrapper>
        <Spin
          spinning={this.state.loading}
          tip="Loading..."
        >
          <article>
            <header>
              <div className="title">{ title }</div>
              <div className="info">{dayjs(createdDate).format('YYYY-MM-DD')} 阅读 {viewCount}</div>
            </header>
            <div className="content">
              <Markdown
                source={detail.content}
              />
              {/* <MarkNav
                className="article-menu"
                source={detail.content}
                headingTopOffset={80}
              /> */}
            </div>
            <footer>
            <div className="tags-wrapper">
            {
              tags ? tags.map((item:TagModel) => {
                return (
                  <Tag color="#2db7f5"
                    key={item.id}
                  >{item.name}</Tag>
                );
              }) : ''
            }
          </div>
            </footer>
          </article>
        </Spin>
      </DetailWrapper>
    );
  }

  private getArticle = async (id:string) => { 
    this.setState({
      loading: true
    });
    try {
      const resp = await _getArticle({id})
      this.setState({
        article: resp.data,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false
      });
    }
  }
}

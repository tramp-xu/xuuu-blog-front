import React, { Component } from 'react';
import { Spin } from 'antd'
import { DetailWrapper } from './style';
import { _getArticle } from '../../apis/article/index'
import Markdown from "react-markdown"
import CodeBlock from '../../components/codeBlock/index'
import dayjs from "dayjs";

interface Content {
  id: number,
  content: string
}

interface Article {
  createdDate: string,
  detail: Content,
  id: number,
  tags: string[],
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
                escapeHtml={false}
                renderers={{
                  code: CodeBlock
                }}
              />
            </div>
            {/* <footer>
              <div>上一篇： 点点滴滴</div>
              <div>下一篇： 哈讲的是</div>
            </footer> */}
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

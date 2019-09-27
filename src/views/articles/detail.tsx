import React, { Component } from 'react';
import { DetailWrapper } from './style';

export interface AProps {
  match: any
}

export default class ArticleDetail extends Component<AProps> {
  public render() {
    let { match } = this.props;
    let id = match.params.id;
    return (
      <DetailWrapper>
        <article>
          <header>
            <div className="title">标题</div>
            <div className="info">2019-04-03 阅读 1777</div>
          </header>
          <div className="content">
            <p>刮刮卡是大家非常熟悉的一种网页交互元素了。实现刮涂层的效果，需要借助canvas来实现，想必每个前端工程师都清楚。</p>

            <p>实现刮刮卡并不难，但其中却涉及很多知识点，掌握这些知识点，有助于我们更深刻理解原理，对于提升举一反三的能力很有帮助。</p>

            <p>本期以实现刮刮卡为例，分享下如何科学合理地封装函数，并对涉及的相关知识点进行讲解。</p>

            <p>先看下最终效果：</p>
          </div>
          <footer>
            <div>上一篇： 点点滴滴</div>
            <div>下一篇： 哈讲的是</div>
          </footer>
        </article>
      </DetailWrapper>
    );
  }
}

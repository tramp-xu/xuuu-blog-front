import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../codeBlock';
// import ImageRenderer from './components/ImageRenderer';
import 'prismjs/themes/prism.css';


export class Markdown extends Component<any> {

  public render() {
    return (
      <ReactMarkdown
        source={this.props.source}
        renderers={{
          code: CodeBlock
        }}
      />
    );
  }
}

export default Markdown;
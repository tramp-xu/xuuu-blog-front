import React, { PureComponent } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

// 设置高亮样式
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";

interface Props {
  value: string
  language: string
}

class CodeBlock extends PureComponent<Props> {

  public componentDidMount () {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    SyntaxHighlighter.registerLanguage("markdown", markdown);
    SyntaxHighlighter.registerLanguage("sql", sql);
  }

  public render() {
    const { value, language } = this.props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter style={atomDark}>
          {value}
        </SyntaxHighlighter>
      </figure>
    );
  }

  // private formateContent = () => {
  //   const { value } = this.props; 
  //   if (value) {   
  //     const reg = /\/\* lang=(.*) \*\//
  //     let arr = value.match(reg)
  //     let text  = arr && arr[0] || '' 
  //     let language = arr && arr[1] || 'javascript'
  //     if (text) {
  //       // let repText = text + '(\\S)*(\u21B5)*'
  //       // let regRp = new RegExp(repText, 'g')
  //       // let content = value.replace(regRp, '')
  //       this.setState({
  //         // content,
  //         language
  //       })
  //     }
  //   }
  // }
}

export default CodeBlock;
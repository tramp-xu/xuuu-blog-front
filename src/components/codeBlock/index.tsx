import React, { PureComponent } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";

interface Props {
  value: string
  
}

interface State {
  language: string
}

class CodeBlock extends PureComponent<Props, State> {

  public state = {
    language: 'javascript'
  }

  public componentDidMount () {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    SyntaxHighlighter.registerLanguage("markdown", markdown);
    SyntaxHighlighter.registerLanguage("css", css);
    this.formateContent()
  }

  public render() {
    const { value } = this.props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={this.state.language} style={atomDark}>
          {value}
        </SyntaxHighlighter>
      </figure>
    );
  }

  private formateContent = () => {
    const { value } = this.props; 
    if (value) {   
      const reg = /\/\* lang=(.*) \*\//
      let arr = value.match(reg)
      let text  = arr && arr[0] || '' 
      let language = arr && arr[1] || 'javascript'
      if (text) {
        this.setState({
          language
        })
      }
    }
  }
}

export default CodeBlock;
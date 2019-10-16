import React, { PureComponent } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";

interface Props {
  value: string,
  language: string
}

class CodeBlock extends PureComponent<Props> {

  public componentDidMount  () {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    SyntaxHighlighter.registerLanguage("markdown", markdown);
  }

  public render() {
    const { language, value } = this.props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={atomDark}>
          {value}
        </SyntaxHighlighter>
      </figure>
    );
  }
}

export default CodeBlock;
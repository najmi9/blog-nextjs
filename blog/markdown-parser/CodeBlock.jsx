import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({className, children}) => {

    return (
        <SyntaxHighlighter className={className} language={className} showLineNumbers={true}
         style={vsDark}
        showInlineLineNumbers={true}>
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock
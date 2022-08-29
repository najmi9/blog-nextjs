import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs2015 from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015'
const CodeBlock = ({className, children}) => {

    return (
        <SyntaxHighlighter
            className={className}
            language={className}
            showLineNumbers={true}
            showInlineLineNumbers={false}
            wrapLines={false}
            style={vs2015}
            PreTag='span'
            startingLineNumber={1}
            useInlineStyles={true}
            wrapLongLines={false}
        >
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock

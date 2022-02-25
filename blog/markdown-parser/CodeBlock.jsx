import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
// import {okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import prism from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';

const CodeBlock = ({className, children}) => {

    return (
        <SyntaxHighlighter className={className} language={className} showLineNumbers={false}
         showLineNumbers={false} showInlineLineNumbers={false} wrapLines={false} style={prism}
        >
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock
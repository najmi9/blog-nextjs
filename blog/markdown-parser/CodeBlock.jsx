import React from "react"
import { Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import vs2015 from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';

import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import php from 'react-syntax-highlighter/dist/cjs/languages/hljs/php';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/hljs/yaml';
import html from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import dockerfile from 'react-syntax-highlighter/dist/cjs/languages/hljs/dockerfile';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('dockerfile', dockerfile);

const CodeBlock = ({className, children}) => {
    return (
        <SyntaxHighlighter
            className={className}
            language={className}
            showLineNumbers={true}
            showInlineLineNumbers={false}
            wrapLines={false}
            style={vs2015}
            PreTag='p'
            startingLineNumber={1}
            useInlineStyles={true}
            wrapLongLines={false}
        >
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock

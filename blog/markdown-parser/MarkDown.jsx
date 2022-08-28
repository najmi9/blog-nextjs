import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "./CodeBlock.jsx";
// import 'katex/dist/katex.min.css';
// import {Math, InlineMath} from './Math'
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'

const MarkDown = ({ content }) => {
    return (
        <ReactMarkdown
            children={content}
            // remarkPlugins={[remarkMath]}
            // rehypePlugins={[rehypeKatex]}
            skipHtml={true}

            components={{
                code: ({node, ...props}) => <CodeBlock {...props} />,
                img: (node) => <img width='100%' height='100%' src={node.src} alt={node.alt}/>,
                // math: ({node, ...props}) => <Math  {...props}/>,
                // inlineMath: ({node, ...props}) => <InlineMath  {...props}/>
            }}
        />
    );
};

export default MarkDown;

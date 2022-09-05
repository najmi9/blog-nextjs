import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "./CodeBlock.jsx";
// import 'katex/dist/katex.min.css';
// import {Math, InlineMath} from './Math'
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'


const MarkDown = ({ content }) => {
    return (
        <ReactMarkdown
            children={content}
            remarkPlugins={[/*remarkMath*/]}
            rehypePlugins={[rehypeRaw, /*rehypeKatex*/]}
            skipHtml={true}

            components={{
                code: ({node, ...props}) => <CodeBlock {...props} />,
                img: (node) => <img width='100%' height='100%' src={node.src} alt={node.alt}/>,
                a: (node) => <a href={node.href} title={node.title} className="btn btn-sm btn-primary" target={'_blank'}
                    rel={'noreferrer'}
                >{node.children}</a>,
                // math: ({node, ...props}) => <Math  {...props}/>,
                // inlineMath: ({node, ...props}) => <InlineMath  {...props}/>
            }}
        />
    );
};

export default MarkDown;

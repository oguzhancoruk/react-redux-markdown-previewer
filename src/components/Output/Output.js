import React from 'react'
import { useSelector } from 'react-redux'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'


function Output() {


  const item=useSelector(state=>state.markdown.items)
  const help=useSelector(state=>state.markdown.help)
  const clicked =useSelector(state=>state.markdown.isClicked)
  console.log(item)
  return (
    <div className='output'> 
       
      <ReactMarkdown
        children={clicked===true ?help:item.text}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
        
         </div>
  )}

export default Output
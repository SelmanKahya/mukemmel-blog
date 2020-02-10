// Import React dependencies.
import React, { useCallback, useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate'
//import { Value } from 'slate';
//import { initialValue } from './initial-value';


// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import ControlMenu from './ControlMenu';
//import {rules } from './rules'

import escapeHtml from 'escape-html'
import { Node, Text } from 'slate'
import { jsx } from 'slate-hyperscript';
import { FaBlog } from "react-icons/fa";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import parse from 'html-react-parser';


const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}
const onKeyDown = (event, change, next) => {
  const {isLoading} = props;
  if(!isLoading && event.which === 83 && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    save();
    return;
  }
  next();
}

const SlateEditor = (props) => {
  //
  const serialize = node => {
    if (Text.isText(node)) {
      return escapeHtml(node.text)
    }

    const children = node.children.map(n => serialize(n)).join('')

    switch (node.type) {
      case 'quote':
        return `<blockquote><p>${children}</p></blockquote>`
      case 'paragraph':
        return `<p>${children}</p>`
      case 'link':
        return `<a href="${escapeHtml(node.url)}">${children}</a>`
      default:
        return children
    }
  }
  //
  //
  const deserialize = el => {
    if (el.nodeType === 3) {
      return el.textContent
    } else if (el.nodeType !== 1) {
      return null
    }
    const children = Array.from(el.childNodes).map(deserialize)

    switch (el.nodeName) {
      case 'BODY':
        return jsx('fragment', {}, children)
      case 'BR':
        return '\n'
      case 'BLOCKQUOTE':
        return jsx('element', { type: 'quote' }, children)
      case 'P':
        return jsx('element', { type: 'paragraph' }, children)
      case 'A':
        return jsx(
          'element',
          { type: 'link', url: el.getAttribute('href') },
          children
        )
      default:
        return el.textContent
    }
  }
  //


  const editor = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const getTitle = () => {
    // there should be block control - later will be added
    const firstBlock = value[0].children[0]
    const secondBlock = value[1].children[0]

    const title = firstBlock && firstBlock.text ? firstBlock.text : 'No title';
    const subtitle = secondBlock && secondBlock.text ? secondBlock.text : 'No subtitle';

   return {
      title,
      subtitle
    }
  }
  const save = () => {
    const {save, isLoading} = props;
    const headingValues = getTitle();
    const text = value.map(serialize);
    !isLoading && save(text, headingValues);
  }

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])
  const { isLoading} = props;

  const valuevalue = props.initialValue ? deserialize((new DOMParser().parseFromString(props.initialValue, 'text/html')).body) : value;
  return (
    <Slate editor={editor} value={valuevalue} onChange={value => setValue(value)} onKeyDown={onKeyDown}>
      <ControlMenu isLoading={isLoading} save={save}></ControlMenu>
      <Editable
        renderElement={renderElement}
        // Pass in the `renderLeaf` function.
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return
          }

          switch (event.key) {
            case '`': {
              event.preventDefault()
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              })
              Transforms.setNodes(
                editor,
                { type: match ? null : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              )
              break
            }

            case 'b': {
              event.preventDefault()
              Transforms.setNodes(
                editor,
                { bold: true },
                { match: n => Text.isText(n), split: true }
              )
              break
            }
          }
        }}
      />

    </Slate>
  )
}


export default SlateEditor
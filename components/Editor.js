import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import ReactMarkdown from "react-markdown";

const Editor = () => {
  const [data, setData] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const textArea = useRef();

  const onChange = e => {
    setData(e.target.value);
  };

  const onClickBold = () => {
    if (!textArea.current) return;

    const cursorStart = textArea.current.selectionStart;
    const cursorEnd = textArea.current.selectionEnd;

    if (cursorStart === null || cursorEnd === null) return;

    const preText = data.substring(0, cursorStart);
    const selectedText = data.substring(cursorStart, cursorEnd);
    const afterText = data.substring(cursorEnd, data.length);

    setData(preText + "**" + selectedText + "**" + afterText);
    textArea.current.focus();
  };

  return (
    <div className="border border-gray-600 rounded shadow-md">
      <div className="border-b border-gray-600 py-2 px-4">
        <button onClick={() => setShowPreview(!showPreview)}>Show Preview</button>
        <button
          className="px-2 border rounded border-gray-600 text-gray-600 focus:outline-none hover:borger-gray-700 hover:text-gray-700"
          onClick={() => onClickBold()}>
          <FontAwesomeIcon icon={faBold} />
        </button>
      </div>
      <div className="px-4 py-2">
        {showPreview ? (
          <ReactMarkdown
            source={data}
            renderers={{
              link: props => (
                <a href={props.href} target="_blank">
                  {props.children}
                </a>
              ),
              heading: props => <h1 className="text-4xl font-bold">{props.children}</h1>
            }}
          />
        ) : (
          <TextareaAutosize
            className="w-full bg-transparent focus:outline-none resize-none"
            value={data}
            onChange={e => onChange(e)}
            inputRef={textArea}
            onKeyDown={e => {
              if (e.key === "Enter") {
                // const value = e.target.value;
                // const splitted = value.split(/\r?\n/);
                // let string = "";
                // splitted.map(text => (string += text + "\n"));
                // setData(string);
              }
              // tab indent
              if (e.key === "Tab") {
                e.preventDefault();
                const cursorStart = textArea.current.selectionStart;
                const cursorEnd = textArea.current.selectionEnd;

                const preText = data.substring(0, cursorStart);
                // const selectedText = data.substring(cursorStart, cursorEnd);
                const afterText = data.substring(cursorEnd, data.length);

                setData(preText + "  " + afterText);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Editor;

import { useState, useEffect, useRef } from "react";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
interface Props {
    onChange: (e) => void
}

const EditorWrapper = (props: Props) => {
    const { onChange } = props
    return <FroalaEditor tag='textarea' onModelChange={onChange}/>


}

export default EditorWrapper
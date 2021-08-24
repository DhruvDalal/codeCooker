import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2';

const Editor = ({displayName,language,value,onChange}) => {
    const [open,setOpen] = useState(true);


    const handleChange = (editor,data,value) => {
        onChange(value)
    }
    return (
        <div className={`editorContainer ${open? '' : 'collapsed'}`}>
            <div className="editorTitle">
            {displayName}
                <button onClick={()=>{setOpen(prevOpen => !prevOpen)}}>{open?<i class="fas fa-compress-alt"></i> : <i class="fas fa-expand-alt"></i>}</button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                className="code-mirror-wrapper"
                value ={value}
                options={{
                    lineWrapping: true,
                    lineNumbers: true,
                    lint: true,
                    theme:'material',
                    mode: language
                }}
            />
        </div>
    )
}

export default Editor

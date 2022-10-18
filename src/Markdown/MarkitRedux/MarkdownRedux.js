import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleEditorToggle,handlePreviewToggle} from './sliceMarkRed'
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import  { Editor } from './reusableMarkdown';
import {Remarkable} from 'remarkable';
import {BiCollapse, BiExpandAlt} from 'react-icons/bi';

const  MarkdownRedux = ()=> {
    const editor = useSelector((state)=>state.previewThis.editor);
    const previewer = useSelector((state)=>state.previewThis.previewer);
    const [input, setInput] = useState('');
    const md = new Remarkable();
    const dispatch = useDispatch();
    
    const markInput = (event) => {
        setInput(event.target.value);
    }
    const editHeight ={
        minHeight: "100vh"
    }
    if(editor === true){
        return (
            <div className='BigContainer' >
                <div className='editContainer'>
                    <Editor
                        name='Editor'
                        icon={<BiCollapse className='collapseIcon' id='expand' onClick={()=>dispatch(handleEditorToggle())}/>}
                        type={<textarea id='editor' value={input} onChange={markInput} style={editHeight}/>}
                    />
                </div>   
            </div>         
        )
    }  if (previewer === true){
       return (
        <div className='BigContainer' >
            <div className='previewContainer'>
                <Editor
                    name='Previewer'
                    icon={<BiCollapse className='collapseIcon' id='expand' onClick={()=>dispatch(handlePreviewToggle())}/>}
                    type ={<div className='preview' id='previewer' dangerouslySetInnerHTML={{__html:md.render(input)}} style={editHeight}/>}
                />    
            </div>
        </div>                  
    )
    }
    return (
        <div className='BigContainer' >     
            <div className='editContainer'>
                <Editor
                    name='Editor'
                    icon={<BiExpandAlt className='collapseIcon' id='expand' onClick={()=>dispatch(handleEditorToggle())}/>}
                    type={<textarea id='editor' value={input} onChange={markInput}/>} 
                />   
            </div>

            <div className='previewContainer'>
                <Editor
                    name='Previewer'
                    icon={<BiExpandAlt className='collapseIcon' id='expand' onClick={()=>dispatch(handlePreviewToggle())}/>}
                    type={<div id='previewer' dangerouslySetInnerHTML={{__html:md.render(input)}} />}
                />
            </div> 
            <div className='developer'>&copy;Olowosuyi Temitope Abiodun</div>         
        </div>  
    )             
}
export default MarkdownRedux
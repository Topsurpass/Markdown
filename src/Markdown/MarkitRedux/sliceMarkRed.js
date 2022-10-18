import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editor:false,
    previewer:false, 
}
export const markdownSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers:{
        handleEditorToggle:(state)=>{
            state.editor= !(state.editor);   
        },
        handlePreviewToggle:(state)=>{
            state.previewer= !(state.previewer);  
        }
        
    }
})

export const {handleEditorToggle,handlePreviewToggle} = markdownSlice.actions;
export default markdownSlice.reducer;

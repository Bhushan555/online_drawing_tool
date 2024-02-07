import { COLORS, MENU_ITEMS } from '@/constant'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    [MENU_ITEMS.PENCIL]:{
        color:COLORS.BLACK,
        size:5
    },
    [MENU_ITEMS.ERASER]:{
        color:COLORS.WHITE,
        size:5
    },
    [MENU_ITEMS.undo]:{
       
    },
    [MENU_ITEMS.redo]:{
       
    },
    [MENU_ITEMS.DOWNLOAD]:{
       
    },
}


export const toolboxSlice=createSlice({
    name:"tool",
    initialState,
    reducers:{
        changeColor:(state,action)=>{
            state[action.payload.item].color=action.payload.color
        },
        changeBrushSize:(state,action)=>{
            state[action.payload.item].size=action.payload.size
        }
    }
})

export const {changeColor,changeBrushSize} = toolboxSlice.actions

export default toolboxSlice.reducer;
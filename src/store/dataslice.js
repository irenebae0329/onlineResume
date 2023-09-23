import {createSlice} from '@reduxjs/toolkit'
export const dataSlice=createSlice({
    name:'globalModel',
    initialState:{
        appName:'简历应用平台',
        resumeContent:{
            siderContent:{
                hasSet:false,
                data:{
                    img:'',
                    school:'',
                    majority:'',
                    degree:'',
                    startTime:'',
                    endTime:''
                }
            }
        }
    },
    reducers:{
        modifySiderData:(state,action)=>{
            state.resumeContent.siderContent.hasSet = true;
            for(let [key,value] of Object.entries(action.payload)){
                state.resumeContent.siderContent.data[key] = value;
            }
        }
    }
})
export default dataSlice.reducer
export const {modifySiderData}=dataSlice.actions
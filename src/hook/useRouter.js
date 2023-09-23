import { useNavigate } from "react-router"
export default function useRouter(){
    const navigate=useNavigate()
    const regex=/(http|https):\/\/([\w.]+\/?)\S*/
    const urls={0:'/refre',1:'https://github.com/PDKSophia/visResumeMook',2:'https://github.com/PDKSophia/visResumeMook'}
    const onClick=(index)=>{
        if(regex.test(urls[index])){
            window.location.href=urls[index]
        }else if(index==='back'){
            window.history.back()
        }
        else{
            navigate(urls[index])
        }
    }
    return onClick
}
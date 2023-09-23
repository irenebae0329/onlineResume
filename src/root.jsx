import './root.scss'
import logo from '@assets/logo.png'
import useRouter from './hook/useRouter'
export default function Root(){
    const jumpTo=useRouter()
    const Menu=()=>{
        const urls=['/refre','https://github.com/PDKSophia/visResumeMook','https://github.com/PDKSophia/visResumeMook']
        return (
        <div className='menu-container'>
            {['试用','关于','源码'].map((value,index)=>{
                return <div onClick={()=>{
                    jumpTo(index)
                }}
                key={urls[index]+index}
                >
                    {value}
                </div>
            })}
        </div>
        )
    }
    return(
    <div className="root-background">
        <div className='container'>
            <img src={logo}></img>
            <div className='site-name'>visResumeMook</div>
            <div className='site-introduction'>一个简历制作平台～</div>
            <Menu className='site-root-menu'></Menu>
        <div className="copyright">
          <div className="footer">
            <p className="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
    </div>
    </div>
    )
}
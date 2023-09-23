import { 
    InfoOutlined,
    PhoneOutlined ,
    TeamOutlined,
    DesktopOutlined,
    StarOutlined,
    CalculatorOutlined
} from '@ant-design/icons'
const outlinedList = [<InfoOutlined></InfoOutlined>,<CalculatorOutlined ></CalculatorOutlined >,<PhoneOutlined></PhoneOutlined>,<StarOutlined></StarOutlined>,<TeamOutlined></TeamOutlined>,<DesktopOutlined></DesktopOutlined>]
const data=['个人信息','教育信息','联系方式','工作期望','在校经历','项目经验'].map((value,index)=>{
    return {
        value:value,
        required:index===0||index===1?true:false,
        outlined:outlinedList[index]
    }
})
export default data
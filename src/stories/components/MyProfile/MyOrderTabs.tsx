import  { FC, ReactElement, useState } from "react";
import '../../styles/myProfile/myOrderTabs.scss';

interface MyOrderTabsProps{
    children: ReactElement[]
}

const MyOrderTabs:FC<MyOrderTabsProps> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    const handleSelectOption = (e:any)=>{
        setSelectedTab(+e.target.value)
    }
    return (
        <div className='myOrderTabsWrapper'>
            <div className='myOrderTabs'>
                {children.map((item, index) => (
                    <div 
                        className={` myOrderTabItem ${index === selectedTab? 'selectedTab':''}`}
                        key={index} 
                        onClick={()=> setSelectedTab(index)}
                    >
                        <p>{item.props.title}</p>
                    </div>
                ))}
            </div>
            <div className="myOrdersDropDown">
                <select name="myOrderTab" className='dropdownSelect' onChange={(e)=> handleSelectOption(e)}>
                    {
                        children.map((item, index) => (
                            <option 
                                value={index}  
                                key={index}
                            >
                                {item.props.title}
                            </option>
                        ))
                    }
                </select>
            </div>
        {children[selectedTab]}
        </div>
    )
    }

export default MyOrderTabs


interface TabProps{
    title: string
}

export const Tab: React.FC<TabProps> = ({ children }) => {
    return <div>{children}</div>
}

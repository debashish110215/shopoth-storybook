import  { FC, ReactElement, useState } from "react";
import '../../styles/myProfile/myOrderTabs.scss';

interface MyOrderTabsProps{
    children: ReactElement[]
}

const MyOrderTabs:FC<MyOrderTabsProps> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    const handleSelectTab = (index:number)=>{
        setSelectedTab(index)
    }
    return (
        <div className='myOrderTabsWrapper'>
            <div className='myOrderTabs'>
                {children.map((item, index) => (
                    <div 
                        className={` myOrderTabItem ${index === selectedTab? 'selectedTab':''}`}
                        key={index} 
                        onClick={()=> handleSelectTab(index)}
                    >
                        <p>{item.props.title}</p>
                    </div>
                ))}
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

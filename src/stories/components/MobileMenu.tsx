import { FC, useEffect, useState } from "react";
import '../styles/mobileMegaMenu.scss'
import { Overlay } from "./Overlay";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { MegaMenu, MenuProps, MenuState } from "./Menu";
import { useRef } from "react";

export enum Direction {
    FORWARD,
    BACK
}

export enum Level {
    LEVEL1,
    LEVEL2
}

export interface MenuLevel1Props {
    menu : MegaMenu
    selectedMenuId : string
    onMenuSelect : (id: string) => void
}

export interface MenuLevel2Props {
    menu : MegaMenu
    selectedMenuId : string
    onBackClick : (id: any) => void
}

export const MenuLevel1:FC<MenuLevel1Props>  = ({menu, selectedMenuId, onMenuSelect}: MenuLevel1Props) => {
    console.log("selectedMenuId"+selectedMenuId)
    return (
        <div className={['menu-level level1'].join(' ')}>
            <h1 className="menu-title">{menu.title}</h1>
             <ul className="menu-ul">
                {
                    menu.categories.map(item=>{
                        return (
                            <>
                            {
                                item.subCategory.length>0 ?
                                <li key={item.title} className={['menu-li',selectedMenuId === item.id ? 'active' : ''].join(' ')} onClick={()=>onMenuSelect(item.id)}>
                                    <p>{item.icon} {item.title}</p>
                                    {
                                        item.subCategory.length>0&&<span><FiChevronRight/></span>
                                    }
                                </li>
                                :
                                <li key={item.title} className={['menu-li',selectedMenuId === item.id ? 'active' : ''].join(' ')}>
                                    <p>{item.icon} {item.title}</p>
                                </li>
                            }
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const MenuLevel2:FC<MenuLevel2Props>  = ({menu, selectedMenuId, onBackClick}: MenuLevel2Props) => {
    let subItem = menu.categories.find(i => i.id === selectedMenuId)
    return (
        <>
            { subItem && subItem.subCategory.length > 0 && 
                <div className={['menu-level level2'].join(' ')}>
                    <p className={"back-to-main"} onClick={(e)=>{onBackClick(subItem?.id)}}><FiChevronLeft/> Back to main</p>
                    <h1 className="menu-title"><a className="menu-category" href={subItem.id}>{subItem.title}</a></h1>
                    <ul className="menu-ul">
                        {
                            subItem?.subCategory.map(subItem=>{
                                return (
                                    <li className="menu-li" key={subItem.title}>
                                        <a href={subItem.id}>{subItem.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </>
    )
}

export const MegaMenuMobile:FC<MenuProps> = ({primaryMenu, secondaryMenu, customerServices, menuState}:MenuProps) => {
    const [selectedId, setSelectedId] = useState("")
    const [class1, setClass1] = useState('center')
    const [class2, setClass2] = useState('right')

    let menuLevel1Ref = useRef<HTMLDivElement>(null)
    let menuLevel2Ref = useRef<HTMLDivElement>(null)

    const scrollTop = () => {
        if(menuLevel1Ref.current) menuLevel1Ref.current.scrollTop = 0
        if(menuLevel2Ref.current) menuLevel2Ref.current.scrollTop = 0
    }

    const onBackClick = (id: string) => {
        scrollTop()
        scrollTop()
        setSelectedId(id)
        setClass1('center')
        setClass2('right')
    }

    let menuSelect = (id: string) => {
        scrollTop()
        setSelectedId(id)
        setClass1('left')
        setClass2('center')
    }

    useEffect(()=>{
        setSelectedId("")
        setClass1('center')
        setClass2('right')
    }, [menuState])

    return (
        // if one ref here back to that postion
        <div className="mega-mobile-menu"> 
            {
                menuState === MenuState.OPEN &&
                <div ref = {menuLevel1Ref} className={['mega-menu-level1',class1].join(' ')}>
                    <MenuLevel1
                        menu = { 
                            {
                                categories:  secondaryMenu.categories,
                                title : secondaryMenu.title 
                            }
                        }
                        selectedMenuId = {selectedId}
                        onMenuSelect = {menuSelect}
                    />
                    <MenuLevel1
                        menu = { 
                            {
                                categories:  primaryMenu.categories,
                                title : primaryMenu.title 
                            }
                        }
                        selectedMenuId = {selectedId}
                        onMenuSelect = {menuSelect}
                    />
                    <MenuLevel1
                        menu = { 
                            {
                                categories:  customerServices.categories,
                                title : customerServices.title 
                            }
                        }
                        selectedMenuId = {selectedId}
                        onMenuSelect = {menuSelect}
                    />
                </div>
            }
            
            {
                menuState === MenuState.OPEN && 
                <div ref = {menuLevel2Ref} className={['mega-menu-level2',class2].join(' ')}>
                    <MenuLevel2
                        onBackClick = {onBackClick}
                        menu = { 
                            {
                                categories:  secondaryMenu.categories,
                                title : secondaryMenu.title 
                            } 
                        }
                        selectedMenuId = {selectedId}
                    />
                    
                    <MenuLevel2
                        onBackClick = {onBackClick}
                        menu = { 
                            {
                                categories:  primaryMenu.categories,
                                title : primaryMenu.title 
                            } 
                        }
                        selectedMenuId = {selectedId}
                    />
                    
                    <MenuLevel2
                        onBackClick = {onBackClick}
                        menu = { 
                            {
                                categories:  customerServices.categories,
                                title : customerServices.title 
                            } 
                        }
                        selectedMenuId = {selectedId}
                    />
                </div>
            }
            
        </div>
    )
}

export const WrapperMegaMenu = ({primaryMenu, secondaryMenu, customerServices}:any)=>{
    const [menuStates, setMenuStates] = useState(MenuState.CLOSED)

    const onClickClose = (e: any) => {
        if(menuStates===MenuState.CLOSED) {setMenuStates(MenuState.OPEN)}
        else {setMenuStates(MenuState.CLOSED)}
        setTimeout(()=>{},2000)
    }

    const onClose = () => {
        setMenuStates(MenuState.CLOSED)
    }

    return (
        <Overlay 
            onClose= {onClose}
            children={
                <div>
                <a onClick={onClickClose}>{menuStates===MenuState.CLOSED?"open":"close"}</a>
                <MegaMenuMobile  primaryMenu = {primaryMenu} secondaryMenu={secondaryMenu} customerServices={customerServices} menuState={menuStates} />
            </div>
            }
            show={true}
        />
       
    )
}
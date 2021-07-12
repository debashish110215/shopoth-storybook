import React, { useRef, useEffect, useState } from "react";
import { ReactNode } from "react";
import '../styles/megaMenu.scss'
import { Overlay } from "./Overlay";
import {FiChevronRight} from 'react-icons/fi'
import { IconType } from "react-icons";

export enum MenuState {
    OPEN,
    CLOSED
}

interface Category {
    title : string
    id : string
    bnTitle : string
    subCategory : Category []
    icon?: IconType
}

interface MegaMenu {
    title: string
    categories : Category []
}

interface MenuProps {
    primaryMenu : MegaMenu
    secondaryMenu : MegaMenu
    customerServices : MegaMenu
    menuState : MenuState
}

interface MenuLevel1 {
    menuState: MenuState
    menu : MegaMenu
    selectedMenuId : string
    onMenuSelect : (id: string) => void
}

interface MenuLevel2 {
    menu : MegaMenu
    menuState: MenuState
    selectedMenuId : string
}

export const MenuLevel1 = ({menu, selectedMenuId, onMenuSelect, menuState = MenuState.OPEN}: MenuLevel1) => {
    console.log("selectedMenuId"+selectedMenuId)
    return (
        <div className={['menu-level level1', `${menuState === MenuState.OPEN ? 'd-block': 'd-none'}`].join(' ')}>
            <h1 className="menu-title">{menu.title}</h1>
             <ul className="menu-ul">
                {
                    menu.categories.map(item=>{
                        return (
                            <li key={item.title} className={['menu-li',selectedMenuId === item.id ? 'active' : ''].join(' ')} onMouseOver={()=>onMenuSelect(item.id)}>
                                <p>{item.icon} {item.title}</p>
                                {
                                    item.subCategory.length>0&&<span><FiChevronRight/></span>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const MenuLevel2 = ({menu, menuState = MenuState.OPEN, selectedMenuId}: MenuLevel2) => {
    let subItem = menu.categories.find(i => i.id === selectedMenuId)
    return (
        <>
            { subItem && subItem.subCategory.length > 0 && 
                <div className={['menu-level level2', `${selectedMenuId && menuState === MenuState.OPEN ? 'd-block': 'd-none'}`].join(' ')}>
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
                    {/* <div><h1>Banner</h1></div> */}
                </div>
            }
        </>
    )
}

export const MegaMenuDesktop = ({primaryMenu, secondaryMenu, customerServices, menuState}:MenuProps) => {
    const [selectedId, setSelectedId] = useState("")

    let menuSelect = (id: string) => {
        setSelectedId(id)
    }

    useEffect(()=>{
        setSelectedId("")
    }, [menuState])

    return (
        <div className="mega-menu">
            {
                menuState === MenuState.OPEN &&
                <div className="mega-menu-level1">
                    <MenuLevel1 
                        menuState = {menuState}
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
                        menuState = {menuState}
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
                        menuState = {menuState}
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
                menuState === MenuState.OPEN && selectedId &&
                <div className="mega-menu-level2">
                    <MenuLevel2 
                        menuState = {menuState}
                        menu = { 
                            {
                                categories:  secondaryMenu.categories,
                                title : secondaryMenu.title 
                            } 
                        }
                        selectedMenuId = {selectedId}
                    />
                    
                    <MenuLevel2 
                        menuState = {menuState}
                        menu = { 
                            {
                                categories:  primaryMenu.categories,
                                title : primaryMenu.title 
                            } 
                        }
                        selectedMenuId = {selectedId}
                    />
                    
                    <MenuLevel2 
                        menuState = {menuState}
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
                <MegaMenuDesktop  primaryMenu = {primaryMenu} secondaryMenu={secondaryMenu} customerServices={customerServices} menuState={menuStates} />
            </div>
            }
            show={true}
        />
       
    )
}
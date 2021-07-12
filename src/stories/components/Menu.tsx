import React, { useRef, useEffect, useState } from "react";
import { ReactNode } from "react";
import '../styles/megaMenu.scss'

export enum MenuState {
    OPEN,
    CLOSED
}

interface Category {
    title : string
    id : string
    bnTitle : string
    subCategory : Category []
}

interface MegaMenu {
    title: string
    categories : Category []
}

interface MenuProps {
    changeMenuState: ()=>void
    primaryMenu : MegaMenu
    secondaryMenu? : MegaMenu
    customerServices? : MegaMenu
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
    onMenuSelect : (id: string) => void
}

export const MenuLevel1 = ({menu, selectedMenuId, onMenuSelect, menuState = MenuState.OPEN}: MenuLevel1) => {
    return (
        <div className={['menu-level level1', `${menuState === MenuState.OPEN ? 'd-block': 'd-none'}`].join(' ')}>
            <ul>
                {
                    menu.categories.map(item=>{
                        return (
                            <li key={item.title} className={selectedMenuId === item.id ? 'active' : ''} onMouseOver={()=>onMenuSelect(item.id)}>
                                <p>{item.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const MenuLevel2 = ({menu, onMenuSelect, menuState = MenuState.OPEN, selectedMenuId}: MenuLevel2) => {
    let subItem = menu.categories.find(i => i.id === selectedMenuId)
    return (
        <div className={['menu-level level2', `${selectedMenuId && menuState === MenuState.OPEN ? 'd-block': 'd-none'}`].join(' ')}>
            <ul>
                {
                    subItem?.subCategory.map(subItem=>{
                        return (
                            <li key={subItem.title} onMouseOver={()=>onMenuSelect(subItem.id)}>
                                <a href={subItem.id}>{subItem.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const MegaMenuDesktop = ({primaryMenu, secondaryMenu, customerServices, menuState, changeMenuState}:MenuProps) => {
    const [selectedId, setSelectedId] = useState("")

    let menuSelect = (id: string) => {
        setSelectedId(id)
    }
    return (
        <div className="mega-menu">
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
            <MenuLevel2 
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
        </div>
    )
}

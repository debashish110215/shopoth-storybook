import {FC, useState} from 'react'
import '../styles/filterCategoryList.scss'

interface FilterCategoryListProps{
    categoryList?:any[]
    onCategorySelect:(id?:number)=>void
}

export const FilterCategoryList:FC<FilterCategoryListProps> = ({categoryList, onCategorySelect}:FilterCategoryListProps) => {


    return (
        <div className="filter-category-list-wrapper">
            <h4>Search in ...</h4>
            <div className='filter-category-list'>
                <div  className='category-item'><a onClick={()=>onCategorySelect()}>All Department</a></div>
                {
                    categoryList?.map((item)=>(
                        <div key={item.id} className='category-item'><a  onClick={()=>onCategorySelect(item.id)}>{item.title}</a></div>
                    ))
                }
             </div>
        </div>
        
    )
}



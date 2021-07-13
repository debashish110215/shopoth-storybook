import {FC, useState, useEffect, useRef} from 'react';
import {useForm} from 'react-hook-form'
import {FiSearch} from 'react-icons/fi'
import {RiArrowDownSFill} from 'react-icons/ri'
import '../styles/filter.scss'
import {FilterCategoryList} from './FilterCategoryList'


interface FilterProps{
    // categoryList?:string[]
    productList?:string[]
}

interface UseFormInput{
    searchCategory:string;
    searchProduct:string;
}


const Filter:FC<FilterProps> = ({productList}:FilterProps) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [categoryList, setCategoryList] = useState([
        {id:1, title:'Fashion'},
        {id:2, title:'Phone & Accesssories'},
        {id:3, title:'Electronics & Gadgets'},
        {id:4, title:'Health & Hygiene'},
        {id:5, title:'Personal Care'},
        {id:6, title:'Snacks & Beverrages'},
        {id:7, title:'Special Groceries'},
        {id:8, title:'Special Needs'},
        {id:9, title:'Baby Care'},
        {id:10,title:'Others'}, 
    ])
    const [category, setCategory] = useState({id:0, title:''})
    const [categoryId, setCategoryId] = useState<number|undefined>(0)
    const [showCategoryBox, setShowCategoryBox] = useState<Boolean>(false)
    const [isCategorySelect, setIsCategorySelect] = useState<Boolean>(false)

    console.log('category', category)
    // const [products, setProduct] = useState(
    //     [
    //         {id:1, category_id:1,}
    //     ]
    // )

  
    const{register, handleSubmit, formState:{errors}, reset} = useForm<UseFormInput>()
    const onSubmit = handleSubmit(data=>{
        console.log(data)
    })

    const handleshowCategoryBox = () =>{
        setShowCategoryBox(!showCategoryBox)
    }

    const onCategorySelect = (id?:number)=>{
        setCategoryId(id)
        setIsCategorySelect(true)
        const categoryItem = categoryList.find(item =>(item.id === id))
        if(categoryItem){
            setCategory({
                id:categoryItem?.id,
                title:categoryItem?.title
            })
        }else{
            setCategory({
                id:0,
                title:''
            }) 
        }
        inputRef.current?.focus() 
        setShowCategoryBox(!showCategoryBox)
    }

    return (
        <div className="filter-wrapper">
            {
                showCategoryBox && (
                    <div className="category-list">
                        <FilterCategoryList categoryList={categoryList} onCategorySelect={onCategorySelect}/>
                    </div>
                )
            }
           
             <div className='filter'>
                <form onSubmit={onSubmit}>
                    <button type='button' onClick={handleshowCategoryBox}> <span className='category-title'>{category.title}</span> <RiArrowDownSFill size='1.4rem'/></button>
                    <input 
                        type="text" 
                        {...register('searchProduct')} 
                        placeholder={`${isCategorySelect?'':'Search products, brand or store' }`}
                        ref={inputRef}/>
                    
                    <div className="search-btn">
                        <button type='submit'><FiSearch/></button>
                    </div>
                </form>
            </div>
           
        </div>
       
    )
}

export default Filter

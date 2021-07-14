import {FC, useState, useEffect, useRef, FocusEvent} from 'react';
import {useForm} from 'react-hook-form'
import {FiSearch} from 'react-icons/fi'
import {RiArrowDownSFill} from 'react-icons/ri'
import '../styles/filter.scss'
import {FilterCategoryList} from './FilterCategoryList'
import {FilterProductList} from './FilterProductList'


interface FilterProps{
    // categoryList?:string[]
    // productList?:string[]
}

interface UseFormInput{
    searchCategory:string;
    searchProduct:string;
}


const Filter:FC<FilterProps> = ({}:FilterProps) => {

    const inputRef = useRef<HTMLInputElement>(null)

    console.log('inputRef', inputRef.current?.focus())

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
    const [products, setProducts] = useState(
        [
            {
                id:1,
                category_id:1,
                title:'Liberty T-Shirt Onnyaer Biruddhey Latthi Maar - Black',
                imgUrl:'./images/fashion/t-shirt.jpg',
                price:3560
            },
            {
                id:2,
                category_id:1,
                title:'Skin Boutiqes-(violet)',
                imgUrl:'./images/fashion/skin-butiques.jpg',
                price:3567
            },
            {
                id:3,
                category_id:2,
                title:'ASTRUM Headphone HS120',
                imgUrl:'./images/phone/ASTRUM Headphone HS120.jpg',
                price:3560
            },
            {
                id:4,
                category_id:2,
                title:'Realme C11 32gb 2gb Pepper Grey',
                imgUrl:'./images/phone/Realme C11 32gb 2gb Pepper Grey.jpg',
                price:3560
            },
            {
                id:5,
                category_id:3,
                title:'sanford hair dryer hd',
                imgUrl:'./images/electronics/0009828_sanford-hair-dryer-sf988hd.jpg',
                price:3560
            },
            {
                id:6,
                category_id:3,
                title:'ASTRUM Webcam WM720',
                imgUrl:'./images/electronics/ASTRUM Webcam WM720.jpg',
                price:3560
            },
            {
                id:7,
                category_id:4,
                title:'DABUR SANITIZE Hand Sanitizer 60ml (Buy 1 Get 1 Free)',
                imgUrl:'./images/health/DABUR-SANITIZE-Hand-Sanitizer-60ml-(Buy-1-Get-1-Free).jpg',
                price:3560
            },
            {
                id:8,
                category_id:4,
                title:'Tokma Seeds (Basil) 100gm',
                imgUrl:'./images/health/Tokma-Seeds-(Basil)-100gm.jpg',
                price:3560
            },
        ]
    )
    const{register, handleSubmit, formState:{errors}, reset, watch} = useForm<UseFormInput>()
    const [category, setCategory] = useState({id:0, title:''})
    const [product, setProduct] = useState({})
    const [categoryId, setCategoryId] = useState<number|undefined>(0)
    const [showCategoryBox, setShowCategoryBox] = useState<Boolean>(false)
    const [showProductBox, setShowProductBox] = useState<Boolean>(false)
    const [isCategorySelect, setIsCategorySelect] = useState<Boolean>(false)
    const [productsByCategoryFilter, setProductsByCategoryFilter] =useState<any>([])
    const [serachProduct, setSeacrhProduct]= useState('')
    const [searchProductsByKeywords, setsearchProductsByKeywords] = useState<any>([])

        console.log('product', product)

        // const watchSearchProduct = watch('searchProduct')
        useEffect(()=>{
            const productsByCategory = products?.filter(product=>(
                product.category_id === categoryId
            ))
            if(categoryId){
                setProductsByCategoryFilter(productsByCategory)
            }else{
                setProductsByCategoryFilter(products)
            }
        },[categoryId])

        useEffect(()=>{
            const searchResultByKeywords = productsByCategoryFilter?.filter(product =>(
                product.title.toLowerCase().includes(serachProduct.toLowerCase())
            ))
            setsearchProductsByKeywords(searchResultByKeywords)
            if(serachProduct){
                setShowProductBox(true)
                setShowCategoryBox(false)
            }else{
                setShowProductBox(false)
            }

        },[serachProduct, product])



    const handleshowCategoryBox = () =>{
        setShowCategoryBox(!showCategoryBox)
        setShowProductBox(false)
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

    const onSelectProduct = (id:number) =>{
        const productItem = searchProductsByKeywords?.find(item=>(
            item.id ===id
        ))
        if(productItem){
            setProduct(productItem)
            // reset({
            //     searchProduct:productItem.title
            // })
            setSeacrhProduct(productItem.title)
            
        }
        setShowProductBox(false)
    }

    const handleSerachProduct=(e:FocusEvent<HTMLInputElement>)=>{
        setSeacrhProduct(e.currentTarget.value)
    }
    const handleClearSearch=()=>{
        setSeacrhProduct('')
    }

    const onSubmit = handleSubmit(data=>{
        console.log(data)
    })
    return (
        <div className="filter-wrapper">
            {
                showCategoryBox && (
                    <div className="category-list">
                        <FilterCategoryList categoryList={categoryList} onCategorySelect={onCategorySelect}/>
                    </div>
                )
            }
            {
                showProductBox && (
                    <div className="product-list">
                        <FilterProductList 
                            productList={searchProductsByKeywords} 
                            category_title={category.title} 
                            search_key={serachProduct}
                            onSelectProduct={onSelectProduct}
                            />
                    </div>
                )
            }
           
             <div className='filter'>
                <form onSubmit={onSubmit}>
                    <button type='button' 
                        onClick={handleshowCategoryBox}> 
                        <span className='category-title'>{category.title}
                        </span> <RiArrowDownSFill size='1.4rem'/>
                    </button>
                    <input 
                        type="text" 
                        // {...register('searchProduct')} 
                        value={serachProduct}
                        name='searchProduct'
                        placeholder={`${isCategorySelect?'':'Search products, brand or store' }`}
                        onChange={handleSerachProduct}
                        ref={inputRef}/>

                        {
                            serachProduct && (
                            <div className="cancel-search" onClick={handleClearSearch}>
                                <button type='button'>X</button>
                            </div>
                            )
                        }
                   
                    
                    <div className="search-btn">
                        <button type='submit'><FiSearch/></button>
                    </div>
                </form>
            </div>
           
        </div>
       
    )
}

export default Filter

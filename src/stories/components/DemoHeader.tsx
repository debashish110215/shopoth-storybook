import {FC, useState, useEffect} from 'react'
import '../styles/demoHeader.scss'
import {Cart} from './Cart';
import {HeaderCartIcon} from './HeaderCartIcon'


interface DemoHeaderProps{
    productList:any[];
    selectTotalNoOfItems:number;
    sumOfTotalAmount:number;
}

const DemoHeader:FC<DemoHeaderProps> = ({productList, selectTotalNoOfItems,sumOfTotalAmount }:DemoHeaderProps) => {

    const [showCart, setShowCart] = useState(false)
    const [productItemList, setProductItemList] = useState<any>([])
    const [count, setCount] = useState(1)
    const [selectTotalItems, setSelectTotalItems] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(()=>{
        setProductItemList(productList)
        setSelectTotalItems(selectTotalNoOfItems)
        setTotalAmount(sumOfTotalAmount)
    },[productList])

    const onCarthandler = () =>{
        setShowCart(!showCart)
    }

    const onProductIncrement =(id:number)=>{
        setCount(prevCount => (prevCount + 1))
        console.log('id', id)
        console.log('count', count)
    };
    const onProductDecrement = (id:number)=>{
        setCount(prevCount => (prevCount - 1))
        console.log('id', id)
        console.log('count', count)
    };
    const onCartProductDelete = (id:number)=>{
        const products = [...productItemList]
        const selectedIndex = products.findIndex(item =>(
            item.id === id
        ))
        products.splice(selectedIndex, 1)
        setProductItemList(products)
    }

    const handleClearAppProduct = ()=>{
        setProductItemList([]);
        setSelectTotalItems(0);
        setShowCart(false);
    }

    return (
        <div className='demoHeaderWrapper'>
            <div className="headerCartIcon">
                <HeaderCartIcon 
                    selectTotalItems={selectTotalItems} 
                    totalAmount={totalAmount}
                    onCartClick={onCarthandler}
                    />
            </div>
            <div className="borderSeparator"></div>

            {
                showCart &&  (
                    <div className="productCart">
                        <Cart 
                            productList={productItemList}
                            grandTotal={totalAmount}
                            discount={1500}
                            onProductIncrement={onProductIncrement}
                            onProductDecrement={onProductDecrement}
                            onCartProductDelete={onCartProductDelete}
                            clearAllProducts={handleClearAppProduct}
                            />
                    </div>
                )
            }
            
        </div>
    )
}

export default DemoHeader


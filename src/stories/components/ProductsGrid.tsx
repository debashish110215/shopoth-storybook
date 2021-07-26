import {FC} from 'react'
import ProductCard from './ProductCard'
import '../styles/_grid.scss'

interface ClassName {
    clsName : string
}

const ProductsGrid:FC<ClassName> = ({clsName}:ClassName) => {
    return (
        <div className={clsName}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductsGrid;

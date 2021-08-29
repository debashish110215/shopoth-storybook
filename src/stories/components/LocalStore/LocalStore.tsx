
import {FC} from 'react'
import FindStore from './FindStore'
import SearchBarWithResult from './SearchBarWithResult'
import NearByStores from './NearByStores'

interface LocalStoreProps {}

export const LocalStore:FC<LocalStoreProps> = ({...props}: LocalStoreProps) => {
    return (
        <div>
            <FindStore />
            <SearchBarWithResult />
            <NearByStores />
        </div>
    )
}


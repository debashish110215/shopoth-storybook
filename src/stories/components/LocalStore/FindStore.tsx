import { Select } from '../../components/Inputs/Select/Select'
import { CartButton } from '../CartButton'
import '../../styles/localStore/findStore.scss'

const zilas = [
    {label:'Zila 1', value:'zila1'},
    {label:'Zila 2', value:'zila2'},
]

const thanas = [
    {label:'Thana 1', value:'thana1'},
    {label:'Thana 2', value:'thana2'},
    {label:'Thana 3', value:'thana3'},
    {label:'Thana 4', value:'thana4'},
    {label:'Thana 5', value:'thana5'},
]
const areas = [
    {id:1, label:'Area 1', value:'area1'},
    {id:2, label:'Area 2', value:'area2'},
    {id:3, label:'Area 3', value:'area3'},
    {id:4, label:'Area 4', value:'area4'},
    {id:5, label:'Area 5', value:'area5'},
]

const FindStore = () => {
    return (
        <>
            <div className="findStoreWrapper">
                    <div className="heading">Local Store</div>
                    <div className="zila">
                        <Select label="Zila" name="zila" options={zilas} />
                    </div>
                    <div className="thana">
                        <Select label="Thana" name="thana" options={thanas} />
                    </div>
                    <div className="area">
                        <Select label="Area" name="area" options={areas} />
                    </div>
                <div className="findStore">
                    <CartButton label='Find store' color='cart' onClick={() => console.log('I see')}/>
                    </div>
            </div>
        </>
    )
}

export default FindStore


import {FC} from 'react'
import '../../../styles/inputs/select.scss'

interface SelectProps{
    label?: string,
    name?: string,
    options?: any[],
    isMulti?:boolean;
    isRequired?:boolean;
    onChangeHandler?: () => void;
}

export const Select:FC<SelectProps> = ({ label = 'Select', name = 'select', options = [], isMulti = false, isRequired = false, onChangeHandler } : SelectProps) => {
    return (
            <select name={name} className="sh_select">
                <option value="">{label}</option>
                {
                    options.map((option, index) =>(
                        <option 
                            value={`${option.value}`} 
                            key={index}
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>
    )
}


import { useSelector } from 'react-redux';
import {ContainerFilter, Label, FilterInput } from "./Filter.styled"

export const Filter = () => {
    const filter = useSelector(state => state.filter);
    console.log('FILTER', filter);
    return (<ContainerFilter>
        <Label>
            Find contact by name 
        </Label>
            <FilterInput 
                type="text"
            name="name"
            value={filter}
            //onChange = {}
                />
        
    </ContainerFilter>
    )
}
// export const Filter = ({filter, onChahgeFilter}) => {
//     return <div>
//         <label>
//             Find contact by name
//             <input
//                 type="text"
//                 value={filter}
//                 onChahge={evt => onChahgeFilter('filter', evt.target.value)}>
                
//             </input>
//         </label>
//     </div>
// }
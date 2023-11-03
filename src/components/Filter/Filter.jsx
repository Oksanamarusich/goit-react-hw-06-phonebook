import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import {ContainerFilter, Label, FilterInput } from "./Filter.styled"

export const Filter = () => {
    //const filter = useSelector(state => state.filter);
    //console.log('FILTER', filter);
    const dispatch = useDispatch();
    return (<ContainerFilter>
        <Label>
            Find contact by name 
        </Label>
            <FilterInput 
                type="text"
            name="name"
            //value={filter}
            onChange = {(evt) => dispatch(changeFilter(evt.target.value))}
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
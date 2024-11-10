import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Input() {
    return (
        <div className='input_div'>
            <input placeholder="" className="input"></input>
            <button className='button_div'><FontAwesomeIcon icon={faMagnifyingGlass} className='button'/></button>
        </div>
    )
}
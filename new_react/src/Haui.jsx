import './style.css';
import {useState} from 'react';
const Haui = (props) => {
  const [state, setState] = useState(null)

    console.log(props.text);
    return (
        <div style={{color: `${state}`}} onMouseUp={() => setState('lightblue')}>{props.text}
            {/* HIT CLUB - HAUI */}
        </div>
    );
}
export default Haui

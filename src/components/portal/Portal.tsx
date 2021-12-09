import React, {FC} from 'react';
import ReactDOM from "react-dom";

const Portal:FC = ({children}) => {
    // const node = document.createElement('div');
    // document.body.appendChild(node);
    const node = document.getElementById('root')
    return node && ReactDOM.createPortal(children, node);
};

export default Portal;
import React, {FC} from 'react';
import ReactDOM from "react-dom";

const Portal:FC = ({children}) => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    return ReactDOM.createPortal(children, node);
};

export default Portal;
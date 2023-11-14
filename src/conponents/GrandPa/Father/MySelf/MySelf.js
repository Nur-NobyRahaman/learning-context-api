import React from 'react';
import Special from './Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h3>Me</h3>
            <p>House : {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;
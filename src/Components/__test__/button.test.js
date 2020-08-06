import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

import Button from '../button';

import {render, cleanup} from '@testing-library/react';

afterEach(cleanup)
it("render without any issue/crashing",()=>{

    const div = document.createElement("div");
    ReactDOM.render(<Button label="some thing!"></Button>,div);

})

it('button with label',()=>{
    render(<Button label="Click Me!"></Button>)
})


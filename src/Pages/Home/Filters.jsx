import React from 'react';

const Filters = () => {
    return (
        <div className='flex mx-auto mt-5 justify-between'>
            <input type="text" placeholder="Type here" class="input input-bordered  max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered  max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered  max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered  max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered  max-w-xs" />
        </div>
    );
};

export default Filters;
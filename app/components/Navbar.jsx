import React, { Fragment } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <Fragment>
            <div className="flex justify-between items-center p-3 mb-6 shadow-xl">
                <div>
                    <strong className='text-3xl'><b>Shoping Card</b></strong>
                </div>
                <div>
                    <div className='relative'>
                    <FaShoppingCart size={30} className='text-blue-500 cursor-pointer'/>
                    <div className='absolute top-0 right-0 grid place-items-center w-[18px] h-[18px] bg-red-600 rounded-full translate-x-1 translate-y-0 text-white text-center text-[12px]'>0</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;
import React, { Fragment } from 'react';
import Image from 'next/image';

async function allProducts(){
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    return result;
};
async function Products(){
        const myProducts = await allProducts();
        console.log(myProducts);
    return (
        <Fragment>
            <div className="grid grid-col-1 place-content-center sm:grid-cols-1 md:grid-cols-5 lg:grid-col-5 xl:grid-col-5 gap-3">
                {
                    myProducts.map((item,key)=>(
                        <div className="card w-60 h-[500px] bg-slate-500  rounded-xl p-4 hover:scale-105 hover:transition-all" key={key}>
                            <div>
                                <Image className='w-full h-60 object-cover' src={item.image} width={100} height={100}></Image>
                            </div>
                            <div className='space-y-2'>
                                <h2>{item.title}</h2>
                                <p><b>Price: {item.price}</b></p>
                                <span>Category: {item.category}</span>
                                <button className='px-4 py-1 bg-rose-200'>Add to Card</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    );
};

export default Products;
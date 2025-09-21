import React, { useState } from 'react'
import pizza from "../image/pizza.jpg"
import bread from "../image/bread.jpg"
import Cake from "../image/Cake.jpg"
import Hamburger from "../image/Hamburger.jpg"
import { useDispatch } from 'react-redux'

export type Products = {
    id: number;
    title: string;
    image: string;
    content: string;
    price: number;
    quantity?: number;
}

const data = [
    {
        id: 1,
        title: "pizza",
        image: pizza,
        content: "pizza",
        price: 30
    },
    {
        id: 2,
        title: "Hamburger",
        image: Hamburger,
        content: "Hamburger",
        price: 20
    },
    {
        id: 3,
        title: "bread",
        image: bread,
        content: "bread",
        price: 15
    },
    {
        id: 4,
        title: "Cake",
        image: Cake,
        content: "Cake",
        price: 10
    }
]

export default function ProductList() {
    const [products, setProducts] = useState<Products[]>(data)
    const dispatch = useDispatch();

    const add = (product: Products) => {
    dispatch({ type: "ADD", payload: { ...product, quantity: 1 } });
  };

    return (
        <div>
            <div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">List Products</h1>
                        </div>
                        <div className="panel-body" id="list-product">
                            {products.map((item: Products, index: number) => {
                                return (
                                <div className="media product" key={item.id}>
                                    <div className="media-left">
                                    <a href="#">
                                        <img
                                        className="media-object"
                                        src={item.image}
                                        alt={item.title}
                                        />
                                    </a>
                                    </div>
                                    <div className="media-body">
                                    <h4 className="media-heading">Bread</h4>
                                    <p>
                                        {item.content}
                                    </p>
                                    <input
                                        name="quantity-product-1"
                                        type="number"
                                        defaultValue={1}
                                    />
                                    <a data-product={1} className="price">
                                        {item.price}{" "}
                                    </a>
                                    </div>
                                    <button onClick={() => add(item)} className="btn btn-success">
                                        Add
                                    </button>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

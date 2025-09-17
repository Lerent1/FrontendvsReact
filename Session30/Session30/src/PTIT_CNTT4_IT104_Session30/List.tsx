import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './list.css'

type Product = {
  id: number,
  name: string,
  isCompleted: boolean
}

export default function List() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [newProduct, setNewProduct] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<string>("all");
  const [updateId, setUpdateId] = useState<number>(-1);

  const filteredProducts = products.filter((product) =>
    currentPage == "all" ? product : currentPage == "completed" ? product.isCompleted == true : product.isCompleted == false
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewProduct(e.target.value);
    setError("");
  }

  function toggleProduct(id: number) {
    setProducts(products.map(product =>
      product.id === id ? { ...product, isCompleted: !product.isCompleted } : product
    ));
    axios.patch(`http://localhost:8080/products/${id}`, { isCompleted: !products.find((product) => product.id == id)?.isCompleted });
  }

  async function getProducts() {
    let result: Product[];
    try {
      const res = await axios.get("http://localhost:8080/products");
      result = res.data;
    } catch {
      setProducts([]);
      result = [];
    } finally {
      setTimeout(() => {
        setProducts([...result]);
      }, 1500);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function addProduct() {
    if (newProduct.trim() == "") {
      setError("Khong duoc de trong");
      return;
    }
    if (products.some((product) => product.name == newProduct && product.id != updateId)) {
      setError("Cong viec da ton tai");
      return;
    }
    if (updateId == -1) {
      const res = await axios.post("http://localhost:8080/products", { name: newProduct, isCompleted: false });
      setProducts([...products, res.data]);
    } else {
      setProducts(products.map(product =>
        product.id == updateId ? { ...product, name: newProduct } : product
      ));
      await axios.patch(`http://localhost:8080/products/${updateId}`, { name: newProduct });
    }
    setNewProduct("");
    setError("");
  }

  async function deleteProduct(id: number) {
    if (confirm("Ban co chac chan muon xoa san pham nay?")) {
      await axios.delete(`http://localhost:8080/products/${id}`);
      setProducts(products.filter((product) => product.id != id));
    }
  }

  return (
    <div className='container'>
      <h2>Quan ly cong viec</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} className='add'>
        <input onChange={handleChange} name='name' type="text" placeholder='Hay nhap ten cong viec' value={newProduct} />
        <p className='error'>{error}</p>
        <button onClick={addProduct}>{updateId == -1 ? "Them" : "Sua"}</button>
      </form>
      <div className='sort'>
        <div onClick={() => setCurrentPage("all")} className={currentPage == "all" ? "active" : ""}>Tat ca</div>
        <div onClick={() => setCurrentPage("completed")} className={currentPage == "completed" ? "active" : ""}>Hoan thanh</div>
        <div onClick={() => setCurrentPage("notCompleted")} className={currentPage == "notCompleted" ? "active" : ""}>Dang thuc hien</div>
      </div>
      <div className='products'>
        {filteredProducts.map((product, index) => {
          return <div className='product' key={index}>
            <div className='left'>
              <input onChange={() => toggleProduct(product.id)} type="checkbox" checked={product.isCompleted} />
              <div className={product.isCompleted ? "lineThrough" : ""}>{product.name}</div>
            </div>
            <div className='button-container'>
              <button onClick={() => { setUpdateId(product.id); setNewProduct(product.name) }} className='update'>Sua</button>
              <button onClick={() => deleteProduct(product.id)} className='delete'>Xoa</button>
            </div>
          </div>
        })}
      </div>
      <div className='delete-container'>
        <button>Xoa cong viec hoan thanh</button>
        <button>Xoa tat ca cong viec</button>
      </div>
    </div>
  )
}
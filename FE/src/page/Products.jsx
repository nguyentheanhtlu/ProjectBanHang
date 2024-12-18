import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
const Products = () => {
    const [products, setProducts] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    useEffect(() => {
        if (isFetching) {
            getProducts()
            setIsFetching(false)
        }
    }, [isFetching])
    const getProducts = async () => {

        try {
            const res = await axios.get('https://furniture-app-ottf.onrender.com/products')
            if (res.status === 200) {
                setProducts(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://furniture-app-ottf.onrender.com/products/${id}`)
            if (res.status === 200) {
                setIsFetching(true)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Table striped bordered hover className='container'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Tên nhà cung cấp</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products && products.map((product, index) => {
                    return (
                        <tr key={product._id}>
                            <td> {index + 1} </td>
                            <td> {product.title} </td>
                            <td> {product.supplier}</td>
                            <td>$ {product.price}</td>
                            <td>
                                <div style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(product._id)} >
                                    <AiOutlineDelete />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default Products;

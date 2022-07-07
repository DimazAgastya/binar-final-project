import React, { useEffect } from 'react';
import CardHome from '../CardHome/CardHome';
import './producthome.css';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const ProductHome = () => {

    const products = useSelector(store => store.product)
	const dispatch = useDispatch()

	useEffect(() => {
		// link masih contoh, belum ambil dari BE
		axios.get('https://fakestoreapi.com/products')
		.then(response => {
			// console.log(response)
			dispatch({
				type: 'populateProducts',
				payload: {
					products: [...response.data]
				}
			})
		})

	}, [])

  return (
	<div className='style_producthome'>
		{products.map ((product, index) => {
			return (
				<CardHome key={`product-${index}`} product={product} />
			)
		})}
	</div>
  )
}

export default ProductHome
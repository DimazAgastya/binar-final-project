import React, { useEffect } from 'react';
import CardHome from '../CardHome/CardHome';
import './producthome.css';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const ProductHome = () => {

    const products = useSelector(store => store.product)
	const dispatch = useDispatch()

	useEffect(() => {
		axios.get('https://finalsecondhand-staging.herokuapp.com/product')
		.then(response => {
			// console.log(response)
			dispatch({
				type: 'populateProducts',
				payload: {
					products: [...response.data.data.rows]
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
import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import allProducts from '../data/allProducts';
import styles from '../css/ProductsPage.module.css';

function ProductsPage() {
	return (
		<div className={styles.productsPageContainer}>
			<div className={styles.productsPageCategories}>
				<h1>ALL PRODUCTS</h1>
				<hr />
				<div className={styles.productsPageLinks}>
					<Link to={'/products'}>
						<h1>Percussion</h1>
						<br />
					</Link>
					<Link to={'/products'}>
						<h1>Vibration</h1>
						<br />
					</Link>
					<Link to={'/products'}>
						<h1>Taping</h1>
						<br />
					</Link>
					<Link to={'/products'}>
						<h2>
							Shop All{'  '}
							<i className="fas fa-long-arrow-alt-right" />
						</h2>
						<br />
					</Link>
				</div>
			</div>

			<div className={styles.productsPageItem}>
				{allProducts.map((item) => <Item key={item.id} product={item} />)}
			</div>
		</div>
	);
}

export default ProductsPage;
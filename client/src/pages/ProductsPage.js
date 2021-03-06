import React, { useEffect } from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from '../css/ProductsPage.module.css';
//Components
import Item from '../components/Item';
import Modal from '../components/Modal';
import Loading from '../components/Loading';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function ProductsPage() {
	const { allProducts, allCategories, category, setCategory, loading } = useGlobalContext();
	
	const updateCategory = (e) => {
		const isShopAll = e.target.className.includes('shop-all');
		isShopAll ? setCategory('ALL PRODUCTS') : setCategory(e.target.innerHTML);
	};

	const displayCategory = () => {
		const display = category === 'ALL PRODUCTS' ? getAllProducts() : getFilteredProducts();
		return display;
	};

	const getAllProducts = () => {
		return allProducts?.map((item) => {
			return <Item key={item._id} {...item} />;
		});
	};

	const getFilteredProducts = () => {
		return allProducts?.filter((item) => item.category === category).map((filteredItem) => {
			return <Item key={filteredItem._id} {...filteredItem} />;
		});
	};

	//when page loads, have page automatically scroll to the top
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) return <Loading/>

	return (
		<div className={styles.productsPageContainer}>
			{allCategories && 
				<div className={styles.productsPageCategories}>
					<h1>{category}</h1>
					<hr />
					<div className={styles.productsPageLinks}>
						{/* 
							every category will be displayed with the same format
							the only exception is for the category: 'Shop All' (as it has an h2-tag and an icon)
						*/}
						{allCategories.map((link, idx) => {
							if (link !== 'Shop All') {
								return (
									<Link to={'/Shopping-Cart/products'} key={idx} onClick={updateCategory}>
										<h1>{link}</h1>
										<br />
									</Link>
								);
							} else {
								return (
									<Link to={'/Shopping-Cart/products'} key={idx} onClick={updateCategory}>
										<h2 className='shop-all'>
											{link}
											{'  '}
											<i className='fas fa-long-arrow-alt-right shop-all' />
										</h2>
									</Link>
								);
							}
						})}
					</div>
				</div>
			
			}
			
			{allProducts && 
				<div className={styles.productsPageItem}>{displayCategory()}</div>
			}

			<Modal />
		</div>
	);
}

export default ProductsPage;

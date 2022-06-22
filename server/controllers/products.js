const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ products });
	} catch (error) {
		console.log(error);
	}
};

module.exports = getAllProducts;

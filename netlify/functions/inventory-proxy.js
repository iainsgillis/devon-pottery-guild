exports.handler = async (event, context) => {

  
	try {
        const url = "https://cdn.editmysite.com/app/store/api/v28/editor/users/147812861/sites/798465889807674145/products"
        const response = await fetch(url);
        const json = await response.json();
        const data = json.data.map(({site_product_id, inventory: {total}}) => ({site_product_id, total}))
		
   		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Error fetching inventory",
				details: error,
			}),
		};
	}
};


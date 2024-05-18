
    async function Data(){
    const response = await fetch('http://localhost:5257/api/Products/info');
    const data = await response.json();
    const productslist = data.contentList[0].map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        quantity: product.quantity,
        image: product.part.imageUrl,
        productsDescriptionId: product.productsDescriptionId,
        partId: product.partId,
        categoryId: product.categoryId,
        discountId: product.discountId
        
      };
    });

  return productslist;
    
  }




export const products = await Data();


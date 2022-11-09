function handleDecreaseClick(productId) {
  setProducts(
    products
      .map((product) => {
        const newCount =
          product.id === productId ? product.count - 1 : product.count;
        return {
          ...product,
          count: newCount,
        };
      })
      .filter((p) => p.count !== 0)
  );
}

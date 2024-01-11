import PricingCard from "./PricingCard";

const Pricing = async () => {
  let products = [];
  let isLive = process.env.NEXT_PUBLIC_SITE_URL.includes("librumreader");
  try {
    await fetch("https://api.librumreader.com/products")
      .then((response) => response.json())
      .then(async (data) => {
        products = data;
      });
  } catch (err) {
    console.log(err);
  }

  // sort products by price
  products.sort((a, b) => {
    return a.price - b.price;
  });

  const filteredProducts = products.filter((product) => {
    return product.liveMode === isLive;
  });

  return <PricingCard products={filteredProducts} />
};

export default Pricing;

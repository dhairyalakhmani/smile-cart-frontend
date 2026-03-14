import { useEffect, useState } from "react";

import productsApi from "apis/products";
import { Header, PageLoader } from "components/commons";
import EmptyCartIcon from "components/commons/EmptyCartIcon";
import useDebounce from "hooks/useDebounce";
import { Search } from "neetoicons";
import { Input, NoData } from "neetoui";
import { isEmpty } from "ramda";

import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchKey = useDebounce(searchKey);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await productsApi.fetch({ searchTerm: debounceSearchKey });
      setProducts(data.products);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [debounceSearchKey]);

  return (
    <div className="flex h-screen flex-col">
      <Header
        shouldShowBackButton={false}
        title="Smile cart"
        actionBlock={
          <Input
            placeholder="Search products"
            prefix={<Search />}
            type="search"
            value={searchKey}
            onChange={event => {
              setSearchKey(event.target.value);
            }}
          />
        }
      />
      {/*eslint-disable-next-line no-nested-ternary*/}
      {isLoading ? (
        <PageLoader />
      ) : isEmpty(products) ? (
        <div className="flex flex-grow flex-col items-center justify-center space-y-4">
          <EmptyCartIcon />
          <NoData title="We don't have any products matching that search right now. Browse our categories to see what's new." />
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <ProductListItem key={product.slug} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

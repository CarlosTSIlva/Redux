import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../Store";
import { addProductToCartRequest } from "../Store/modules/cart/actions";
import { IProduct } from "../Store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispath = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispath(addProductToCartRequest(product));
  }, [dispath, product]);

  return (
    <article>
      <strong>{product.title}</strong> <span>{product.price}</span>
      {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;

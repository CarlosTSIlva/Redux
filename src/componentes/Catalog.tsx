import React, { useEffect, useState } from "react";
import api from "../services/api";
import { IProduct } from "../Store/modules//cart/types";
import CatalogItem from "./CatalogoItem";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/products").then((Response) => {
      setCatalog(Response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;

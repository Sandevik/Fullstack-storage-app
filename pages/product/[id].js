import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";

function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8080/sites/LagerApp/Backend/index.php?id=${id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Nav />
      <img src={data.image} alt={`${data.title} image`} />
      <input type="text" value={data.title} disabled={disabled} />
      <input type="text" value={data.manufacturer} disabled={disabled} />
      <input type="text" value={data.product_type} disabled={disabled} />
      <div className="flex">
        <input type="text" value={data.price} disabled={disabled} />
        <input type="text" value={data.price_currency} disabled={disabled} />
      </div>
      <input type="text" value={data.quantity} disabled={disabled} />
      <div>
        <input type="text" value={data.weight_value} disabled={disabled} />
        <input type="text" value={data.weight_type} disabled={disabled} />
      </div>
      <input type="text" value={data.quantity} disabled={disabled} />
      <div>
        <input type="text" value={data.size_value} disabled={disabled} />
        <input type="text" value={data.size_type} disabled={disabled} />
      </div>
      <input type="text" value={data.article_number} disabled={disabled} />
      <button onClick={() => setDisabled(!disabled)}>Edit</button>
    </div>
  );
}

export default Product;

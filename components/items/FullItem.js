import Link from "next/link";
import React from "react";

function Item({ data }) {
  return (
    <Link href={`/product/${data.id}`} >
    <tr className="cursor-pointer border-b-gray-300 border ">
      <td className="py-4 my-2">
        <div className="pl-4">{data.title}</div>
      </td>
      <td>
        <div>{data.quantity}</div>
      </td>
      <td>
        <div>{data.product_type}</div>
      </td>
      <td>
        <div>{data.manufacturer}</div>
      </td>
      <td>
        <div>{data.size_value} {data.size_type}</div>
      </td>
      <td>
        <div>{data.price} {data.price_currency}</div>
      </td>
      <td><div>{data.article_number}</div></td>
      <td><div>More...</div></td>
    </tr>
    </Link>
  );
}

export default Item;

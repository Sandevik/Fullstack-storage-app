import Link from "next/link";
import React from "react";

function Item({ data }) {
  return (
    <Link href={`/product/${data.id}`} className="bg-white " >
    <tr className="border-b cursor-pointer">
      <td className="py-4 my-2">
        <div className="pl-4">{data.title}</div>
      </td>
      <td>
        <div className="px-8">{data.manufacturer}</div>
      </td>
      <td>
        <div className="px-8">{data.product_type}</div>
      </td>
      
    </tr>
    </Link>
  );
}

export default Item;

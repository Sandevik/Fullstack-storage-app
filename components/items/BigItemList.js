import React from "react";
import Item from "./FullItem";


function BigItemList({ data }) {
  return (
    <table className="w-full min-h-full ">
      <tbody>
        <tr className="text-left bg-slate-200 text-lg  ">
          <th className="pl-4 py-2">Product</th>
          <th className="py-2">Quantity</th>
          <th className="py-2">Product type</th>
          <th className="py-2">Manufacturer</th>
          <th className="py-2">Size / Volume</th>
          <th className="py-2">Price</th>
          <th className="py-2">Article number</th>
          <th>{/* Fyller ut plats för bakgrund */}</th>
        </tr>

        {data.map((i) => (
          <Item key={i.id} data={i} />
        ))}
      </tbody>
    </table>
  );
}

export default BigItemList;

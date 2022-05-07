import React from "react";
import Item from "./SmallItem";


function SmallItemList({ data }) {
  return (
    <table className="w-full min-h-full mt-2 bg-white ">
      <tbody className="">
      <tr className=" border-b-2">
          <th className="pl-4 text-center">Results of search:</th>
      </tr>
        {data.map((i) => (
          <Item key={i.id} data={i} />
        ))}
      </tbody>
    </table>
  );
}

export default SmallItemList;

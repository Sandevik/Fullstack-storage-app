import React from 'react'

function RenderAttributes({selectedMenu, selectMenu, item, name, ifInputValue, ifInputSet}) {
  return (
    <div className="flex flex-col border">
    <select
        className="bg-slate-100 cursor-pointer"
      name={name}
      onChange={(e) => selectMenu(e.target.value)}
    >
      {item.map((m) => (
        <option key={m.property} value={m.property}>
          {m.property}
        </option>
      ))}
      <option value="new">New {name}</option>
    </select>
    {selectedMenu == "new" ? <input type="text" className="bg-slate-50 pl-1" value={ifInputValue} onChange={(e)=>ifInputSet(e.target.value)} placeholder={`New ${name}: `}/> : ""}
  </div>
    )
}

export default RenderAttributes
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import RenderAttributes from "../components/RenderAttributes";

function newProduct() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState();
  const [weightValue, setWeightValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [price, setPrice] = useState("");
  const [articleNumber, setArticleNumber] = useState("");
  const [image, setImage] = useState(null);

  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManu, setSelectedManu] = useState("new");
  const [ifNewManu, setIfNewManu] = useState("");

  const [weightValues, setWeightValues] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("new");
  const [ifNewWeight, setIfNewWeight] = useState("");

  const [productTypes, setProductTypes] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("new");
  const [ifNewProductType, setIfNewProductType] = useState("");

  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("new");
  const [ifNewSize, setIfNewSize] = useState("");

  const [currency, setCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("new");
  const [ifNewCurrency, setIfNewCurrency] = useState("");

  // Kollar ej om otillåtna tecken används ex "&", "%" m.m, de fuckar med urlen.
  const submit = async (e) => {
    e.preventDefault();
    const newItem = {
      title,
      quantity,
      weightValue,
      sizeValue,
      price,
      articleNumber,
      currency_type:
        selectedCurrency === "new" ? ifNewCurrency : selectedCurrency,
      product_type:
        selectedProduct === "new" ? ifNewProductType : selectedProduct,
      size_type: selectedSize === "new" ? ifNewSize : selectedSize,
      weight_type: selectedWeight === "new" ? ifNewWeight : selectedWeight,
      manufacturer: selectedManu === "new" ? ifNewManu : selectedManu,
      image,
    };
    console.log(newItem);
    await fetch(
      `http://localhost:8080/sites/LagerApp/Backend/index.php?title=${newItem.title}&quantity=${newItem.quantity}&article_number=${newItem.articleNumber}&weight_value=${newItem.weightValue}&weight_type=${newItem.weight_type}&product_type=${newItem.product_type}&size_value=${newItem.sizeValue}&size_type=${newItem.size_type}&manufacturer=${newItem.manufacturer}&price=${newItem.price}&price_currency=${newItem.currency_type}&image=${newItem.image}`,
      { method: "POST" }
    )
      .then((response) => response.json())
      .then((response) => alert(response.message))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    const fetchProperties = async () => {
      await fetch(
        "http://localhost:8080/sites/LagerApp/Backend/crud/get/get_all_manufacturer.php"
      )
        .then((res) => res.json())
        .then((res) => setManufacturers(res));
      await fetch(
        "http://localhost:8080/sites/LagerApp/Backend/crud/get/get_all_weight_type.php"
      )
        .then((res) => res.json())
        .then((res) => setWeightValues(res));
      await fetch(
        "http://localhost:8080/sites/LagerApp/Backend/crud/get/get_all_product_types.php"
      )
        .then((res) => res.json())
        .then((res) => setProductTypes(res));
      await fetch(
        "http://localhost:8080/sites/LagerApp/Backend/crud/get/get_all_sizes.php"
      )
        .then((res) => res.json())
        .then((res) => setSizes(res));
      await fetch(
        "http://localhost:8080/sites/LagerApp/Backend/crud/get/get_all_currencies.php"
      )
        .then((res) => res.json())
        .then((res) => setCurrency(res));
    };
    fetchProperties();
  }, []);

  return (
    <>
      <Nav />
      <div className="bg-stone-200 py-14 min-h-full">
        <form className="flex flex-col w-half border-2 p-4 mb-72 space-y-4 m-auto max-w-lg mt-5 bg-white overflow-y-hidden">
          <div className="text-center font-bold text-2xl">New Product</div>
          <input
            className="bg-slate-100 border pl-2 text-xl text-center h-10 font-bold"
            type="text"
            placeholder="Title:"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex justify-around ">
            <RenderAttributes
              selectedMenu={selectedManu}
              selectMenu={setSelectedManu}
              item={manufacturers}
              name={"Manufacturer"}
              ifInputValue={ifNewManu}
              ifInputSet={setIfNewManu}
            />
            <input
              type="text"
              className="bg-slate-100 border pl-2"
              placeholder="Article number"
              value={articleNumber}
              onChange={(e) => setArticleNumber(e.target.value)}
            />
          </div>
          <RenderAttributes
            name={"Product Type"}
            selectedMenu={selectedProduct}
            item={productTypes}
            selectMenu={setSelectedProduct}
            ifInputValue={ifNewProductType}
            ifInputSet={setIfNewProductType}
          />
          <input
            type="number"
            className=" bg-slate-100 border pl-2"
            placeholder="Quantity:"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div className="flex justify-around">
            <RenderAttributes
              name={"Weight type"}
              selectedMenu={selectedWeight}
              item={weightValues}
              selectMenu={setSelectedWeight}
              ifInputValue={ifNewWeight}
              ifInputSet={setIfNewWeight}
            />
            <input
              className="bg-slate-100 border pl-2"
              type="number"
              placeholder="Weight value"
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
            />
          </div>

          <div className="flex justify-around">
            <RenderAttributes
              name={"Size type"}
              selectedMenu={selectedSize}
              item={sizes}
              selectMenu={setSelectedSize}
              ifInputValue={ifNewSize}
              ifInputSet={setIfNewSize}
            />
            <input
              className="bg-slate-100 border pl-2"
              type="text"
              placeholder="Size value"
              value={sizeValue}
              onChange={(e) => setSizeValue(e.target.value)}
            />
          </div>
          <div className="flex justify-around">
            <RenderAttributes
              name={"Currency type"}
              selectedMenu={selectedCurrency}
              item={currency}
              selectMenu={setSelectedCurrency}
              ifInputValue={ifNewCurrency}
              ifInputSet={setIfNewCurrency}
            />
            <input
              className="bg-slate-100 border pl-2"
              type="text"
              placeholder="Price value"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex justify-around">
            <label htmlFor="file">Choose an image: </label>
            <input
              className=""
              type="file"
              name="file"
              placeholder="Image File"
              onInput={(e) => setImage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-200 w-30 p-2"
            onClick={(e) => submit(e)}
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default newProduct;

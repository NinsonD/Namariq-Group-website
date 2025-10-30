"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  brand: string;
  details: string;
  documents: string[];
  variants: string[];
  packaging: string[];
}

const ProductSection = () => {

  // Dummy data (you can later fetch from API or JSON)
  const products: Product[] = [
    {
      id: 1,
      name: "GIW-R 12.7mm Regular Gypsum Board",
      description: "Regular Gypsum board for walls & ceilings",
      image: "/images/board1.jpg",
      category: "BOARDS",
      subcategory: "GYPSUM BOARDS",
      brand: "knauf",
      details: "Detailed description of the regular gypsum board, including specifications and usage.",
      documents: ["datasheet.pdf", "installation_guide.pdf"],
      variants: ["12.7mm", "15mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 2,
      name: "Moisture Resistant (MR-H1) 12.5mm Gypsum Board",
      description: "Moisture resistant Gypsum board for walls & ceilings",
      image: "/images/board2.jpg",
      category: "BOARDS",
      subcategory: "Gypsum Boards",
      brand: "knauf",
      details: "Moisture resistant gypsum board with enhanced water repellency for humid environments.",
      documents: ["mr_datasheet.pdf", "safety_guide.pdf"],
      variants: ["12.5mm", "15mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 3,
      name: "Fire Resistant (FR) 12.5mm Gypsum Board",
      description: "Fire-rated board for walls & ceilings",
      image: "/images/board3.jpg",
      category: "BOARDS",
      subcategory: "Gypsum Boards",
      brand: "gypsemna",
      details: "Fire resistant gypsum board providing up to 60 minutes of fire protection.",
      documents: ["fr_datasheet.pdf", "fire_test_report.pdf"],
      variants: ["12.5mm", "15mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 4,
      name: "Cement Fibre Board",
      description: "Durable board for exterior & interior use",
      image: "/images/board4.jpg",
      category: "BOARDS",
      subcategory: "Cement Boards",
      brand: "gypsemna",
      details: "High-strength cement fibre board suitable for both interior and exterior applications.",
      documents: ["cfb_datasheet.pdf", "installation_manual.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 5,
      name: "Cement Fibre Board",
      description: "Durable board for exterior & interior use",
      image: "/images/board4.jpg",
      category: "BOARDS",
      subcategory: "Cement Boards",
      brand: "knauf",
      details: "Versatile cement fibre board with excellent durability and weather resistance.",
      documents: ["cfb_datasheet.pdf", "maintenance_guide.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
  ];

  const categories = [
    {
      name: "ALL PRODUCTS",
      subcategories: [],
    },
    {
      name: "BOARDS",
      subcategories: ["GYPSUM BOARDS", "CEMENT BOARDS"],
    },
    {
      name: "CEILING TILES",
      subcategories: ["GYPSUM VINYL TILES", "ACCOUSTIC CEILING TILES"],
    },
    {
      name: "INSULATION MATERIALS",
      subcategories: ["ROCKWOOL INSULATION", "GLASSWOOL INSULATION", "PHENOLIC FOAM INSULATION"],
    },
    {
      name: "PROFILES & SUPPORTS",
      subcategories: ["SUSPENDED CEILING CHANNELS(GYPSUM BOARD)","SUSPENDED CEILING CHANNELS(CEILING TILES)","CONCEALED GRID SUSPENSION", "PARTITION CHANNELS","SPECIAL CHANNELS"],
    },
    {
      name: "WATER PUMPS",
      subcategories: ["VERTICAL MULTISTAGE PUMPS", "HORIZONTAL MULTISTAGE PUMPS"],
    },
    {
      name: "ACCESSORIES",
      subcategories: ["GYPSUM ACCESSORIES", "PUMP ACCESSORIES"],
    },
    {
      name: "MANHOLES & COVERS",
      subcategories: [],
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL PRODUCTS");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sort, setSort] = useState("Recommended");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products
    .filter(
      (p) =>
        (selectedCategory === "ALL PRODUCTS" ||
          p.category === selectedCategory) &&
        (selectedSubcategory === "" || p.subcategory === selectedSubcategory) &&
        (selectedBrand === "" || p.brand === selectedBrand) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "A-Z") return a.name.localeCompare(b.name);
      if (sort === "Z-A") return b.name.localeCompare(a.name);
      return 0; // Recommended (no sorting)
    });

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory("");
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 px-6 py-10">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 border-r border-gray-200 pl-12">
        <h2 className="text-lg font-bold mb-4">Product Categories</h2>  
        <ul className="space-y-2 text-gray-700">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => handleCategoryClick(cat.name)}
                className={`block w-full text-left hover:text-secondary font-semibold ${
                  selectedCategory === cat.name ? "text-primary" : ""
                }`}
              >
                {cat.name}
              </button>
              {cat.subcategories.length > 0 && selectedCategory === cat.name && (
                <ul className="ml-4 mt-2 space-y-1">
                  {cat.subcategories.map((sub) => (
                    <li key={sub}>
                      <button
                        onClick={() => handleSubcategoryClick(sub)}
                        className={`block w-full text-left text-sm hover:text-secondary ${
                          selectedSubcategory === sub ? "text-secondary font-semibold" : ""
                        }`}
                      >
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main section */}
      <div className="w-full lg:w-3/4">
        {/* Top filters */}
        <div className="mb-6">
          {/* Search and Reset Row */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search Products..."
              className="border border-gray-300 rounded-md px-3 py-2 flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("ALL PRODUCTS");
                setSelectedSubcategory("");
                setSelectedBrand("");
              }}
              className="border border-gray-300 rounded-md px-3 py-2 whitespace-nowrap"
            >
              Reset
            </button>
          </div>

          {/* Division and Sort Row */}
          <div className="flex gap-4">
            <select
              className="border border-gray-300 rounded-md px-3 py-2"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              <option value="">All Brands</option>
              <option value="knauf">knauf</option>
              <option >gypsemna</option>
            </select>
            <select
              className="border border-gray-300 rounded-md px-3 py-2"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Recommended</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-gray-600 text-xs mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100">
            Show more
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description & Details</h3>
                <p className="text-gray-700">{selectedProduct.details}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Documents</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedProduct.documents.map((doc, index) => (
                    <li key={index}>
                      <a href={`/documents/${doc}`} className="text-blue-600 hover:underline">
                        {doc}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Product Variants</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedProduct.variants.map((variant, index) => (
                    <li key={index}>{variant}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Packaging</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedProduct.packaging.map((pack, index) => (
                    <li key={index}>{pack}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;

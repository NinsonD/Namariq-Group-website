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
      name: "Regular Gypsum Board",
      description: "Regular Gypsum board for walls & ceilings",
      image: "/products/boards/Regular-Board.jpg",
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
      name: "Moisture Resistant Gypsum Board",
      description: "Moisture resistant Gypsum board for walls & ceilings",
      image: "/products/boards/MR-board.jpg",
      category: "BOARDS",
      subcategory: "GYPSUM BOARDS",
      brand: "knauf",
      details: "Moisture resistant gypsum board with enhanced water repellency for humid environments.",
      documents: ["mr_datasheet.pdf", "safety_guide.pdf"],
      variants: ["12.5mm", "15mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 3,
      name: "Fire Resistant Gypsum Board",
      description: "Fire-rated board for walls & ceilings",
      image: "/products/boards/FR-board.jpg",
      category: "BOARDS",
      subcategory: "GYPSUM BOARDS",
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
      image: "/products/boards/Cement Board.jpg",
      category: "BOARDS",
      subcategory: "CEMENT BOARDS",
      brand: "gypsemna",
      details: "High-strength cement fibre board suitable for both interior and exterior applications.",
      documents: ["cfb_datasheet.pdf", "installation_manual.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 5,
      name: "bidud em aluminum",
      description: "Durable board for exterior & interior use",
      image: "/products/insulation/bidud-em-aluminum.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "",
      brand: "knauf",
      details: "Versatile cement fibre board with excellent durability and weather resistance.",
      documents: ["cfb_datasheet.pdf", "maintenance_guide.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 6,
      name: "bidud em aluminum",
      description: "Durable board for exterior & interior use",
      image: "/products/insulation/bidud-em-aluminum.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "",
      brand: "knauf",
      details: "Versatile cement fibre board with excellent durability and weather resistance.",
      documents: ["cfb_datasheet.pdf", "maintenance_guide.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 7,
      name: "bidud em aluminum",
      description: "Durable board for exterior & interior use",
      image: "/products/insulation/bidud-em-aluminum.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "",
      brand: "knauf",
      details: "Versatile cement fibre board with excellent durability and weather resistance.",
      documents: ["cfb_datasheet.pdf", "maintenance_guide.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
    {
      id: 8,
      name: "Earthwool-02",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/Earthwool-02.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of Earthwool-02 insulation, providing excellent thermal insulation.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 9,
      name: "Earthwool-037",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/Earthwool-037.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of Earthwool-037 insulation, ideal for various applications.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 10,
      name: "encapsulated",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/encapsulated.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "Detailed description of encapsulated insulation, offering superior performance.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 11,
      name: "Glasswool-Dritherm",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/Glasswool-Dritherm.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "GLASSWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of Glasswool-Dritherm insulation, known for its efficiency.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 12,
      name: "Heraklith-C",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/Heraklith-C.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of Heraklith-C insulation, suitable for diverse uses.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 13,
      name: "ki-mw-mineral-plus-fp-030-white_web",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/ki-mw-mineral-plus-fp-030-white_web.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of ki-mw-mineral-plus-fp-030-white_web insulation.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 14,
      name: "KI-TS_Thermo-teK-Board-BD-Alu",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/KI-TS_Thermo-teK-Board-BD-Alu.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "Detailed description of KI-TS_Thermo-teK-Board-BD-Alu insulation board.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 15,
      name: "Knauf-Insulation-Rafter-Roll-Image-UK",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/Knauf-Insulation-Rafter-Roll-Image-UK.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of Knauf-Insulation-Rafter-Roll-Image-UK insulation.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 16,
      name: "mineral-plus-03-03",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/mineral-plus-03-03.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Detailed description of mineral-plus-03-03 insulation.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 17,
      name: "Thermo-teK-Board-BD-SVB",
      description: "High-quality insulation material for thermal and acoustic performance.",
      image: "/Products/insulation/Thermo-teK-Board-BD-SVB.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "Detailed description of Thermo-teK-Board-BD-SVB insulation board.",
      documents: ["datasheet.pdf"],
      variants: ["Standard"],
      packaging: ["Roll"],
    },
    {
      id: 18,
      name: "Exterior Basecoat White",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Exterior Basecoat White.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Exterior Basecoat White, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 19,
      name: "fill-and-finish-image-58",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/fill-and-finish-image-58.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the fill-and-finish-image-58, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 20,
      name: "Joint Filler and Skim Coating _White",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Joint Filler and Skim Coating _White.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Joint Filler and Skim Coating _White, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 21,
      name: "Joint Filler_Grey",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Joint Filler_Grey.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Joint Filler_Grey, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 22,
      name: "KNAUF FR SEALANT-01",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/KNAUF FR SEALANT-01.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the KNAUF FR SEALANT-01, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 23,
      name: "Knauf-Acoustical-Sealant",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Knauf-Acoustical-Sealant.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Knauf-Acoustical-Sealant, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 24,
      name: "knauf-fibre-glass-joint-tape-90-m (1)",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/knauf-fibre-glass-joint-tape-90-m (1).jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the knauf-fibre-glass-joint-tape-90-m (1), suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 25,
      name: "Knauf-Readygips",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Knauf-Readygips.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Knauf-Readygips, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 26,
      name: "Mesh",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Mesh.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Mesh, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 27,
      name: "Perlfix_BOARDS",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Perlfix_BOARDS.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Perlfix_BOARDS, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 28,
      name: "PU-support-glue-EC1-600ml",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/PU-support-glue-EC1-600ml.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the PU-support-glue-EC1-600ml, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 29,
      name: "Putty Pad Blue",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Putty Pad Blue.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Putty Pad Blue, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 30,
      name: "SEALING STRIP TAPE-01",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/SEALING STRIP TAPE-01.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the SEALING STRIP TAPE-01, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 31,
      name: "Tape 10cm",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Tape 10cm.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Tape 10cm, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 32,
      name: "Uniflott",
      description: "Accessory for gypsum and construction applications.",
      image: "/Products/accessories/Uniflott.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Detailed description of the Uniflott, suitable for various construction needs.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
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

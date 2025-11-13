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
    // BOARDS SECTION
    {
      id: 1,
      name: "Regular Gypsum Board",
      description: "Regular Gypsum board for walls & ceilings",
      image: "/Products/boards/Regular-Board.jpg",
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
      image: "/Products/boards/MR-board.jpg",
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
      image: "/Products/boards/FR-board.jpg",
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
      image: "/Products/boards/Cement Board.jpg",
      category: "BOARDS",
      subcategory: "CEMENT BOARDS",
      brand: "gypsemna",
      details: "High-strength cement fibre board suitable for both interior and exterior applications.",
      documents: ["cfb_datasheet.pdf", "installation_manual.pdf"],
      variants: ["6mm", "9mm", "12mm"],
      packaging: ["Pallet", "Box"],
    },
    
    // CEILING TILES SECTION
    {
      id: 5,
      name: "Acoustic Ceiling Tiles",
      description: "Professional acoustic ceiling tiles for sound absorption",
      image: "/Products/ceiling tiles/ACCOUSTIC CEILING TILES.jpg",
      category: "CEILING TILES",
      subcategory: "ACCOUSTIC CEILING TILES",
      brand: "knauf",
      details: "High-performance acoustic tiles designed for superior sound absorption and thermal efficiency.",
      documents: ["datasheet.pdf"],
      variants: ["600x600", "600x1200"],
      packaging: ["Box"],
    },
    {
      id: 6,
      name: "Acoustic Ceiling System",
      description: "Complete acoustic ceiling system with grid",
      image: "/Products/ceiling tiles/ACCOUSTIC CEILING.jpg",
      category: "CEILING TILES",
      subcategory: "ACCOUSTIC CEILING TILES",
      brand: "knauf",
      details: "Comprehensive acoustic ceiling solution including tiles and suspension system.",
      documents: ["installation_guide.pdf"],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 7,
      name: "Acoustic Tiles 2",
      description: "Advanced acoustic tiles for enhanced performance",
      image: "/Products/ceiling tiles/ACCOUSTIC TILES 2.jpg",
      category: "CEILING TILES",
      subcategory: "ACCOUSTIC CEILING TILES",
      brand: "knauf",
      details: "Next-generation acoustic tiles offering superior fire resistance and durability.",
      documents: ["datasheet.pdf"],
      variants: ["600x600", "600x1200"],
      packaging: ["Box"],
    },
    {
      id: 8,
      name: "Acoustic Tiles",
      description: "High-quality acoustic ceiling tiles",
      image: "/Products/ceiling tiles/ACCOUSTIC TILES.webp",
      category: "CEILING TILES",
      subcategory: "ACCOUSTIC CEILING TILES",
      brand: "knauf",
      details: "Premium acoustic tiles with excellent acoustic performance and durability.",
      documents: ["datasheet.pdf"],
      variants: ["600x600", "600x1200"],
      packaging: ["Box"],
    },
    {
      id: 9,
      name: "Gypsum Vinyl Tiles",
      description: "Durable gypsum vinyl ceiling tiles",
      image: "/Products/ceiling tiles/GYPSUM VINYL TILES.jpg",
      category: "CEILING TILES",
      subcategory: "GYPSUM VINYL TILES",
      brand: "knauf",
      details: "Reinforced gypsum vinyl tiles combining durability with aesthetic appeal.",
      documents: ["datasheet.pdf"],
      variants: ["600x600", "600x1200"],
      packaging: ["Box"],
    },
    
    // INSULATION MATERIALS SECTION
    {
      id: 10,
      name: "Bidud EM Aluminum",
      description: "Premium aluminum-backed thermal insulation",
      image: "/Products/insulation/bidud-em-aluminum.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "High-performance thermal insulation with aluminum backing for superior reflective properties.",
      documents: ["datasheet.pdf"],
      variants: ["25mm", "50mm", "75mm"],
      packaging: ["Roll"],
    },
    {
      id: 11,
      name: "Earthwool 02",
      description: "Premium mineral wool insulation",
      image: "/Products/insulation/Earthwool-02.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Eco-friendly mineral wool with excellent thermal and acoustic properties.",
      documents: ["datasheet.pdf"],
      variants: ["80mm", "100mm", "150mm"],
      packaging: ["Roll"],
    },
    {
      id: 12,
      name: "Earthwool 037",
      description: "Advanced mineral wool insulation",
      image: "/Products/insulation/Earthwool-037.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Premium mineral wool offering improved thermal resistance and fire protection.",
      documents: ["datasheet.pdf"],
      variants: ["80mm", "100mm", "150mm"],
      packaging: ["Roll"],
    },
    {
      id: 13,
      name: "Encapsulated Insulation",
      description: "Encapsulated foam insulation material",
      image: "/Products/insulation/encapsulated.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "Premium encapsulated foam providing exceptional thermal insulation and moisture resistance.",
      documents: ["datasheet.pdf"],
      variants: ["25mm", "50mm", "100mm"],
      packaging: ["Roll"],
    },
    {
      id: 14,
      name: "Glasswool Dritherm",
      description: "High-performance glasswool insulation",
      image: "/Products/insulation/Glasswool-Dritherm.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "GLASSWOOL INSULATION",
      brand: "knauf",
      details: "Premium glasswool insulation with superior fire rating and thermal efficiency.",
      documents: ["datasheet.pdf"],
      variants: ["80mm", "100mm", "150mm"],
      packaging: ["Roll"],
    },
    {
      id: 15,
      name: "Heraklith C",
      description: "Natural cork-based insulation",
      image: "/Products/insulation/Heraklith-C.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Natural insulation material combining thermal performance with eco-friendly properties.",
      documents: ["datasheet.pdf"],
      variants: ["25mm", "50mm", "100mm"],
      packaging: ["Board"],
    },
    {
      id: 16,
      name: "KI Mineral Plus FP 030 White",
      description: "Premium mineral insulation",
      image: "/Products/insulation/ki-mw-mineral-plus-fp-030-white_web.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Advanced mineral wool with fire-resistant properties and superior thermal performance.",
      documents: ["datasheet.pdf"],
      variants: ["80mm", "100mm", "150mm"],
      packaging: ["Roll"],
    },
    {
      id: 17,
      name: "KI TS Thermo-teK Board BD Alu",
      description: "Aluminum-backed thermal board",
      image: "/Products/insulation/KI-TS_Thermo-teK-Board-BD-Alu.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "Premium thermal board with aluminum backing for enhanced reflective insulation.",
      documents: ["datasheet.pdf"],
      variants: ["25mm", "50mm", "75mm"],
      packaging: ["Board"],
    },
    {
      id: 18,
      name: "Knauf Insulation Rafter Roll",
      description: "Specialized insulation for roof rafters",
      image: "/Products/insulation/Knauf-Insulation-Rafter-Roll-Image-UK.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Purpose-designed insulation roll for rafter applications with excellent coverage.",
      documents: ["datasheet.pdf"],
      variants: ["100mm", "150mm"],
      packaging: ["Roll"],
    },
    {
      id: 19,
      name: "Mineral Plus 03 03",
      description: "Standard mineral wool insulation",
      image: "/Products/insulation/mineral-plus-03-03.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "ROCKWOOL INSULATION",
      brand: "knauf",
      details: "Reliable mineral wool insulation for various building applications.",
      documents: ["datasheet.pdf"],
      variants: ["80mm", "100mm", "150mm"],
      packaging: ["Roll"],
    },
    {
      id: 20,
      name: "Thermo-teK Board BD SVB",
      description: "Thermal insulation board",
      image: "/Products/insulation/Thermo-teK-Board-BD-SVB.jpg",
      category: "INSULATION MATERIALS",
      subcategory: "PHENOLIC FOAM INSULATION",
      brand: "knauf",
      details: "Premium thermal board offering excellent insulation properties and fire resistance.",
      documents: ["datasheet.pdf"],
      variants: ["25mm", "50mm", "100mm"],
      packaging: ["Board"],
    },

    // PROFILES & SUPPORTS SECTION
    {
      id: 21,
      name: "Suspended Ceiling Channels (Gypsum Board)",
      description: "Ceiling support channels for gypsum board installation",
      image: "/Products/profiles/SUSPENDED CEILING CHANNELS(GYPSUM BOARD).jpg",
      category: "PROFILES & SUPPORTS",
      subcategory: "SUSPENDED CEILING CHANNELS(GYPSUM BOARD)",
      brand: "knauf",
      details: "Robust steel channels designed specifically for gypsum board suspended ceiling systems.",
      documents: ["installation_guide.pdf"],
      variants: ["27x20", "38x32"],
      packaging: ["Bar"],
    },
    {
      id: 22,
      name: "Suspended Ceiling Channels (Ceiling Tiles)",
      description: "Ceiling support channels for acoustic tile installation",
      image: "/Products/profiles/SUSPENDED CEILING CHANNELS(CEILING TILES).jpg",
      category: "PROFILES & SUPPORTS",
      subcategory: "SUSPENDED CEILING CHANNELS(CEILING TILES)",
      brand: "knauf",
      details: "Lightweight suspension system ideal for acoustic and drop ceiling installations.",
      documents: ["installation_guide.pdf"],
      variants: ["24x25", "38x32"],
      packaging: ["Bar"],
    },

    // ACCESSORIES SECTION
    {
      id: 23,
      name: "Bosch GLL 3x Professional Line Laser Level",
      description: "Professional-grade laser level for precise measurements",
      image: "/Products/accessories/Bosch GLL 3x Professional Line Laser Level.png",
      category: "ACCESSORIES",
      subcategory: "POWER TOOLS & EQUIPMENT",
      brand: "bosch",
      details: "Advanced laser level providing accurate line projection for construction and installation work.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 24,
      name: "Bosch Professional Corded Air Blower GBL 620",
      description: "Powerful corded air blower for debris removal",
      image: "/Products/accessories/Bosch Professional Corded Air Blower GBL 620.png",
      category: "ACCESSORIES",
      subcategory: "POWER TOOLS & EQUIPMENT",
      brand: "bosch",
      details: "Heavy-duty air blower ideal for cleaning construction sites and removing dust and debris.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 25,
      name: "Bosch Professional Drill Furadeira Reversivel",
      description: "Professional reversible drill for drilling and fastening",
      image: "/Products/accessories/Bosch Professional Drill Furadeira Reversivel.png",
      category: "ACCESSORIES",
      subcategory: "POWER TOOLS & EQUIPMENT",
      brand: "bosch",
      details: "Versatile reversible drill suitable for both drilling and screw fastening applications.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 26,
      name: "Bosch Professional Impact Drill GSB 570",
      description: "Professional impact drill for heavy-duty work",
      image: "/Products/accessories/Bosch Professional Impact Drill GSB 570.png",
      category: "ACCESSORIES",
      subcategory: "POWER TOOLS & EQUIPMENT",
      brand: "bosch",
      details: "Industrial-grade impact drill providing high torque for demanding drilling and fastening tasks.",
      documents: [],
      variants: ["Standard"],
      packaging: ["Box"],
    },
    {
      id: 27,
      name: "Exterior Basecoat White",
      description: "Professional exterior coating for basecoat application",
      image: "/Products/accessories/Exterior Basecoat White.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Premium exterior basecoat for protective finish on exterior surfaces.",
      documents: [],
      variants: ["1kg", "5kg", "20kg"],
      packaging: ["Bag"],
    },
    {
      id: 28,
      name: "Fiber Joint Tape",
      description: "High-quality fiberglass joint reinforcing tape",
      image: "/Products/accessories/Fiber Joint Tape.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Professional-grade fiberglass tape for reinforcing drywall joints and cracks.",
      documents: [],
      variants: ["50mm", "75mm", "100mm"],
      packaging: ["Roll"],
    },
    {
      id: 29,
      name: "Fill and Finish",
      description: "Compound for filling and finishing gypsum surfaces",
      image: "/Products/accessories/fill-and-finish-image-58.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Versatile joint filler and finishing compound for smooth, professional surfaces.",
      documents: [],
      variants: ["1kg", "5kg", "20kg"],
      packaging: ["Bag"],
    },
    {
      id: 30,
      name: "Joint Filler and Skim Coating White",
      description: "Professional joint filler with skim coating properties",
      image: "/Products/accessories/Joint Filler and Skim Coating _White.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "High-quality joint filler combining ease of application with excellent finish quality.",
      documents: [],
      variants: ["1kg", "5kg", "20kg"],
      packaging: ["Bag"],
    },
    {
      id: 31,
      name: "Joint Filler Grey",
      description: "Grey-tinted joint filler for specialized applications",
      image: "/Products/accessories/Joint Filler_Grey.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Specialized grey joint filler for targeted repair and finishing work.",
      documents: [],
      variants: ["1kg", "5kg", "20kg"],
      packaging: ["Bag"],
    },
    {
      id: 32,
      name: "KNAUF FR Sealant 01",
      description: "Fire-resistant sealant for construction joints",
      image: "/Products/accessories/KNAUF FR SEALANT-01.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Professional-grade fire-resistant sealant for critical joint applications.",
      documents: ["safety_datasheet.pdf"],
      variants: ["300ml", "600ml"],
      packaging: ["Cartridge"],
    },
    {
      id: 33,
      name: "Knauf Acoustical Sealant",
      description: "Acoustic sealant for sound insulation applications",
      image: "/Products/accessories/Knauf-Acoustical-Sealant.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Specialized sealant designed to enhance acoustic performance in ceiling systems.",
      documents: [],
      variants: ["300ml", "600ml"],
      packaging: ["Cartridge"],
    },
    {
      id: 34,
      name: "Knauf Fiberglass Joint Tape 90m",
      description: "High-quality fiberglass joint reinforcing tape",
      image: "/Products/accessories/knauf-fibre-glass-joint-tape-90-m (1).jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Professional-grade fiberglass tape for reinforcing drywall joints and cracks.",
      documents: [],
      variants: ["50mm", "75mm", "100mm"],
      packaging: ["Roll"],
    },
    {
      id: 35,
      name: "Knauf Readygips",
      description: "Pre-mixed gypsum jointing compound",
      image: "/Products/accessories/Knauf-Readygips.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Ready-to-use gypsum compound providing convenience and consistent quality.",
      documents: [],
      variants: ["5kg", "20kg"],
      packaging: ["Bucket"],
    },
    {
      id: 36,
      name: "Mesh Tape",
      description: "Self-adhesive mesh tape for joint reinforcement",
      image: "/Products/accessories/Mesh.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "High-quality self-adhesive mesh for durable joint reinforcement.",
      documents: [],
      variants: ["50mm", "100mm"],
      packaging: ["Roll"],
    },
    {
      id: 37,
      name: "Perlfix Boards",
      description: "Adhesive for bonding boards to surfaces",
      image: "/Products/accessories/Perlfix_BOARDS.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Premium board adhesive for strong, long-lasting bond without fasteners.",
      documents: [],
      variants: ["1kg", "5kg"],
      packaging: ["Bag"],
    },
    {
      id: 38,
      name: "PU Support Glue EC1 600ml",
      description: "Polyurethane support adhesive",
      image: "/Products/accessories/PU-support-glue-EC1-600ml.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "High-strength polyurethane adhesive for permanent structural bonding.",
      documents: [],
      variants: ["600ml"],
      packaging: ["Cartridge"],
    },
    {
      id: 39,
      name: "Putty Pad Blue",
      description: "Blue putty pads for board installation",
      image: "/Products/accessories/Putty Pad Blue.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Color-coded putty pads for easy identification and reliable board fixing.",
      documents: [],
      variants: ["Box of 100"],
      packaging: ["Box"],
    },
    {
      id: 40,
      name: "Sealing Strip Tape 01",
      description: "Professional sealing tape for edge protection",
      image: "/Products/accessories/SEALING STRIP TAPE-01.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "High-performance sealing tape for edge protection and moisture prevention.",
      documents: [],
      variants: ["50mm", "75mm", "100mm"],
      packaging: ["Roll"],
    },
    {
      id: 41,
      name: "Tape 10cm",
      description: "10cm width professional joint tape",
      image: "/Products/accessories/Tape 10cm.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Standard 10cm width reinforcing tape for general drywall applications.",
      documents: [],
      variants: ["90m", "150m"],
      packaging: ["Roll"],
    },
    {
      id: 42,
      name: "Uniflott",
      description: "Universal joint filling and finishing compound",
      image: "/Products/accessories/Uniflott.jpg",
      category: "ACCESSORIES",
      subcategory: "GYPSUM ACCESSORIES",
      brand: "knauf",
      details: "Multi-purpose compound for all stages of drywall finishing.",
      documents: [],
      variants: ["1kg", "5kg", "20kg"],
      packaging: ["Bag"],
    },

    // WATER PUMPS SECTION
    {
      id: 43,
      name: "ESPA Automatic Pressure Kit",
      description: "Complete automatic pressure control system",
      image: "/Products/pump/ESPA AUTOMATIC PRESSURE KIT.jpg",
      category: "WATER PUMPS",
      subcategory: "PUMP ACCESSORIES",
      brand: "espa",
      details: "Automatic pressure kit designed for automatic water supply control.",
      documents: ["technical_spec.pdf"],
      variants: ["Standard"],
      packaging: ["Unit"],
    },
    {
      id: 44,
      name: "ESPA Water Pump Prisma 115-3M 0.8HP",
      description: "Compact horizontal multistage pump",
      image: "/Products/pump/ESPA WATER PUMP PRISMA 115-3M, 0.8HP.png",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "espa",
      details: "Compact and efficient 0.8HP pump ideal for residential water supply applications.",
      documents: ["technical_spec.pdf"],
      variants: ["0.8HP"],
      packaging: ["Unit"],
    },
    {
      id: 45,
      name: "ESPA Water Pump Prisma 115-4M 1HP",
      description: "Compact horizontal multistage pump 1HP",
      image: "/Products/pump/ESPA WATER PUMP PRISMA 115-4M, 1HP 3.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "espa",
      details: "Reliable 1HP pump providing good performance for residential and light commercial use.",
      documents: ["technical_spec.pdf"],
      variants: ["1HP"],
      packaging: ["Unit"],
    },
    {
      id: 46,
      name: "GRUNDFOS Booster Pump Set 1 HP with 24L Pressure Tank",
      description: "Complete booster pump system with pressure tank",
      image: "/Products/pump/GRUNDFOS BOOSTER PUMP SET 1 HP WITH 24 LITRE PRESSURE TANK.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Complete booster pump system with 24-liter pressure tank for reliable water supply.",
      documents: ["technical_spec.pdf"],
      variants: ["1HP"],
      packaging: ["Unit"],
    },
    {
      id: 47,
      name: "GRUNDFOS CR 10-12 Vertical Multistage Centrifugal Pump 5.5HP",
      description: "Industrial vertical multistage centrifugal pump",
      image: "/Products/pump/GRUNDFOS CR 10-12 VERTICAL MULTISTAGE CENTRIFUGAL PUMP 5.5HP.jpg",
      category: "WATER PUMPS",
      subcategory: "VERTICAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Heavy-duty 5.5HP vertical multistage pump for demanding industrial applications.",
      documents: ["technical_spec.pdf"],
      variants: ["5.5HP"],
      packaging: ["Unit"],
    },
    {
      id: 48,
      name: "GRUNDFOS Transfer Pump Set 1 HP",
      description: "Professional transfer pump system",
      image: "/Products/pump/GRUNDFOS TRANSFER PUMP SET 1 HP.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Reliable 1HP transfer pump system for various water transfer applications.",
      documents: ["technical_spec.pdf"],
      variants: ["1HP"],
      packaging: ["Unit"],
    },
    {
      id: 49,
      name: "GRUNDFOS Water Pump 3HP 3 Phase CM10-3",
      description: "Three-phase centrifugal pump 3HP",
      image: "/Products/pump/GRUNDFOS WATER PUMP 3HP, 3 PHASE CM10-3.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Industrial-grade 3HP three-phase pump for commercial applications.",
      documents: ["technical_spec.pdf"],
      variants: ["3HP"],
      packaging: ["Unit"],
    },
    {
      id: 50,
      name: "GRUNDFOS Water Pump Horizontal Multistage Centrifugal 1.5HP CM5-4",
      description: "Horizontal multistage pump 1.5HP",
      image: "/Products/pump/GRUNDFOS WATER PUMP HORIZONTAL MULTISTAGE CENTRIFUGAL 1.5HP, CM5-4.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Efficient 1.5HP horizontal pump suitable for various pumping applications.",
      documents: ["technical_spec.pdf"],
      variants: ["1.5HP"],
      packaging: ["Unit"],
    },
    {
      id: 51,
      name: "GRUNDFOS Water Pump Horizontal Multistage Centrifugal 2.0HP CM5-5",
      description: "Horizontal multistage pump 2.0HP",
      image: "/Products/pump/GRUNDFOS WATER PUMP HORIZONTAL MULTISTAGE CENTRIFUGAL 2.0HP, CM5-5.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Powerful 2.0HP horizontal pump for residential and commercial water supply.",
      documents: ["technical_spec.pdf"],
      variants: ["2.0HP"],
      packaging: ["Unit"],
    },
    {
      id: 52,
      name: "GRUNDFOS Water Pump Multistage Centrifugal with Pressure Control 1HP CM5-3",
      description: "Centrifugal pump with pressure control 1HP",
      image: "/Products/pump/GRUNDFOS WATER PUMP MULTISTAGE CENTRIFUGAL WITH PRESSURE CONTROL 1HP, CM5-3 2.jpg",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "grundfos",
      details: "Intelligent 1HP pump with integrated pressure control for automatic operation.",
      documents: ["technical_spec.pdf"],
      variants: ["1HP"],
      packaging: ["Unit"],
    },
    {
      id: 53,
      name: "GRUNDFOS Water Pump Pressure Control Kit 1.5BAR",
      description: "Pressure control kit for pump systems",
      image: "/Products/pump/GRUNDFOS WATER PUMP PRESSURE CONTROL KIT FOR PUMP, 1.5BAR.png",
      category: "WATER PUMPS",
      subcategory: "PUMP ACCESSORIES",
      brand: "grundfos",
      details: "Professional pressure control kit for reliable pump operation at 1.5 bar.",
      documents: ["technical_spec.pdf"],
      variants: ["1.5BAR"],
      packaging: ["Unit"],
    },
    {
      id: 54,
      name: "Valeri Pompe",
      description: "Premium water pump system",
      image: "/Products/pump/VALERI POMPE.png",
      category: "WATER PUMPS",
      subcategory: "HORIZONTAL MULTISTAGE PUMPS",
      brand: "valeri",
      details: "Premium quality Valeri water pump system for reliable water supply.",
      documents: ["technical_spec.pdf"],
      variants: ["Standard"],
      packaging: ["Unit"],
    },

    // MANHOLES & COVERS SECTION
    {
      id: 55,
      name: "Manhole Cover",
      description: "Heavy-duty manhole access cover",
      image: "/Products/manholes & covers/MANHOLE.png",
      category: "MANHOLES & COVERS",
      subcategory: "",
      brand: "knauf",
      details: "Durable ductile iron manhole cover suitable for various utility applications.",
      documents: ["specification.pdf"],
      variants: ["Class A", "Class B", "Class C"],
      packaging: ["Unit"],
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
      subcategories: ["VERTICAL MULTISTAGE PUMPS", "HORIZONTAL MULTISTAGE PUMPS", "PUMP ACCESSORIES"],
    },
    {
      name: "ACCESSORIES",
      subcategories: ["GYPSUM ACCESSORIES", "POWER TOOLS & EQUIPMENT", "HAND TOOLS & EQUIPMENT", "PLUMBING ACCESSORIES"],
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
        <h2 className="text-lg font-bold mb-4 text-blue-600">Product Categories</h2>
        <ul className="space-y-2 text-gray-700">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => handleCategoryClick(cat.name)}
                className={`block w-full text-left hover:text-secondary-500 font-semibold ${
                  selectedCategory === cat.name ? "text-primary-500" : ""
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
                        className={`block w-full text-left text-sm hover:text-secondary-500 ${
                          selectedSubcategory === sub ? "text-secondary-500 font-semibold" : ""
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

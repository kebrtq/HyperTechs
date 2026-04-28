import { Product } from "./types"

export const products: Product[] = [
  // CPUs
  {
    id: "cpu-1",
    name: "AMD Ryzen 9 7950X",
    brand: "AMD",
    category: "cpus",
    price: 549.99,
    originalPrice: 699.99,
    image: "/products/cpu-amd-7950x.jpg",
    description: "16-core, 32-thread processor with 5.7GHz max boost clock. Built on 5nm Zen 4 architecture for exceptional performance in gaming and content creation.",
    specs: {
      "Cores": "16",
      "Threads": "32",
      "Base Clock": "4.5 GHz",
      "Boost Clock": "5.7 GHz",
      "TDP": "170W",
      "Socket": "AM5"
    },
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    featured: true
  },
  {
    id: "cpu-2",
    name: "Intel Core i9-14900K",
    brand: "Intel",
    category: "cpus",
    price: 579.99,
    image: "/products/cpu-intel-14900k.jpg",
    description: "24-core (8P+16E) processor with up to 6.0GHz turbo frequency. Ultimate performance for gaming and multitasking.",
    specs: {
      "Cores": "24 (8P+16E)",
      "Threads": "32",
      "Base Clock": "3.2 GHz",
      "Boost Clock": "6.0 GHz",
      "TDP": "125W",
      "Socket": "LGA 1700"
    },
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    featured: true
  },
  {
    id: "cpu-3",
    name: "AMD Ryzen 7 7800X3D",
    brand: "AMD",
    category: "cpus",
    price: 449.99,
    image: "/products/cpu-amd-7800x3d.jpg",
    description: "8-core gaming processor with 3D V-Cache technology. The ultimate gaming CPU with 96MB of L3 cache.",
    specs: {
      "Cores": "8",
      "Threads": "16",
      "Base Clock": "4.2 GHz",
      "Boost Clock": "5.0 GHz",
      "L3 Cache": "96MB",
      "Socket": "AM5"
    },
    rating: 4.9,
    reviewCount: 2156,
    inStock: true,
    featured: true
  },
  {
    id: "cpu-4",
    name: "Intel Core i5-14600K",
    brand: "Intel",
    category: "cpus",
    price: 319.99,
    image: "/products/cpu-intel-14600k.jpg",
    description: "14-core (6P+8E) processor offering excellent value for gaming and productivity workloads.",
    specs: {
      "Cores": "14 (6P+8E)",
      "Threads": "20",
      "Base Clock": "3.5 GHz",
      "Boost Clock": "5.3 GHz",
      "TDP": "125W",
      "Socket": "LGA 1700"
    },
    rating: 4.6,
    reviewCount: 1534,
    inStock: true
  },
  {
    id: "cpu-5",
    name: "AMD Ryzen 5 7600X",
    brand: "AMD",
    category: "cpus",
    price: 229.99,
    originalPrice: 299.99,
    image: "/products/cpu-amd-7600x.jpg",
    description: "6-core processor with excellent single-thread performance. Great value for gaming builds.",
    specs: {
      "Cores": "6",
      "Threads": "12",
      "Base Clock": "4.7 GHz",
      "Boost Clock": "5.3 GHz",
      "TDP": "105W",
      "Socket": "AM5"
    },
    rating: 4.7,
    reviewCount: 987,
    inStock: true
  },

  // GPUs
  {
    id: "gpu-1",
    name: "NVIDIA GeForce RTX 4090",
    brand: "NVIDIA",
    category: "gpus",
    price: 1599.99,
    image: "/products/gpu-rtx-4090.jpg",
    description: "The ultimate GeForce GPU with 24GB GDDR6X memory. Unmatched performance for 4K gaming and AI workloads.",
    specs: {
      "VRAM": "24GB GDDR6X",
      "CUDA Cores": "16384",
      "Boost Clock": "2.52 GHz",
      "Memory Bus": "384-bit",
      "TDP": "450W",
      "Outputs": "3x DP 1.4a, 1x HDMI 2.1"
    },
    rating: 4.9,
    reviewCount: 756,
    inStock: true,
    featured: true
  },
  {
    id: "gpu-2",
    name: "NVIDIA GeForce RTX 4080 Super",
    brand: "NVIDIA",
    category: "gpus",
    price: 999.99,
    image: "/products/gpu-rtx-4080s.jpg",
    description: "High-end gaming GPU with 16GB GDDR6X. Excellent 4K performance with DLSS 3 support.",
    specs: {
      "VRAM": "16GB GDDR6X",
      "CUDA Cores": "10240",
      "Boost Clock": "2.55 GHz",
      "Memory Bus": "256-bit",
      "TDP": "320W",
      "Outputs": "3x DP 1.4a, 1x HDMI 2.1"
    },
    rating: 4.8,
    reviewCount: 543,
    inStock: true,
    featured: true
  },
  {
    id: "gpu-3",
    name: "AMD Radeon RX 7900 XTX",
    brand: "AMD",
    category: "gpus",
    price: 949.99,
    image: "/products/gpu-rx-7900xtx.jpg",
    description: "AMD's flagship GPU with 24GB GDDR6 memory. Exceptional rasterization performance for high-resolution gaming.",
    specs: {
      "VRAM": "24GB GDDR6",
      "Stream Processors": "6144",
      "Boost Clock": "2.5 GHz",
      "Memory Bus": "384-bit",
      "TDP": "355W",
      "Outputs": "2x DP 2.1, 1x HDMI 2.1, 1x USB-C"
    },
    rating: 4.7,
    reviewCount: 421,
    inStock: true
  },
  {
    id: "gpu-4",
    name: "NVIDIA GeForce RTX 4070 Super",
    brand: "NVIDIA",
    category: "gpus",
    price: 599.99,
    image: "/products/gpu-rtx-4070s.jpg",
    description: "Excellent 1440p gaming performance with 12GB GDDR6X. Great balance of price and performance.",
    specs: {
      "VRAM": "12GB GDDR6X",
      "CUDA Cores": "7168",
      "Boost Clock": "2.48 GHz",
      "Memory Bus": "192-bit",
      "TDP": "220W",
      "Outputs": "3x DP 1.4a, 1x HDMI 2.1"
    },
    rating: 4.8,
    reviewCount: 867,
    inStock: true
  },
  {
    id: "gpu-5",
    name: "AMD Radeon RX 7800 XT",
    brand: "AMD",
    category: "gpus",
    price: 499.99,
    image: "/products/gpu-rx-7800xt.jpg",
    description: "16GB of VRAM for 1440p gaming. Excellent value with strong rasterization performance.",
    specs: {
      "VRAM": "16GB GDDR6",
      "Stream Processors": "3840",
      "Boost Clock": "2.43 GHz",
      "Memory Bus": "256-bit",
      "TDP": "263W",
      "Outputs": "2x DP 2.1, 1x HDMI 2.1, 1x USB-C"
    },
    rating: 4.6,
    reviewCount: 654,
    inStock: true
  },

  // RAM
  {
    id: "ram-1",
    name: "G.Skill Trident Z5 RGB 32GB DDR5-6000",
    brand: "G.Skill",
    category: "ram",
    price: 159.99,
    image: "/products/ram-gskill-z5.jpg",
    description: "High-performance DDR5 memory kit with stunning RGB lighting. 2x16GB at 6000MHz CL30.",
    specs: {
      "Capacity": "32GB (2x16GB)",
      "Speed": "DDR5-6000",
      "Timings": "CL30-40-40-96",
      "Voltage": "1.35V",
      "RGB": "Yes",
      "Heat Spreader": "Aluminum"
    },
    rating: 4.8,
    reviewCount: 1123,
    inStock: true,
    featured: true
  },
  {
    id: "ram-2",
    name: "Corsair Dominator Platinum RGB 64GB DDR5-5600",
    brand: "Corsair",
    category: "ram",
    price: 289.99,
    image: "/products/ram-corsair-dominator.jpg",
    description: "Premium 64GB DDR5 kit with Corsair's iconic Dominator design and CAPELLIX RGB LEDs.",
    specs: {
      "Capacity": "64GB (2x32GB)",
      "Speed": "DDR5-5600",
      "Timings": "CL36-36-36-76",
      "Voltage": "1.25V",
      "RGB": "CAPELLIX",
      "Heat Spreader": "DHX Cooling"
    },
    rating: 4.7,
    reviewCount: 456,
    inStock: true
  },
  {
    id: "ram-3",
    name: "Kingston Fury Beast 32GB DDR5-5200",
    brand: "Kingston",
    category: "ram",
    price: 109.99,
    originalPrice: 139.99,
    image: "/products/ram-kingston-fury.jpg",
    description: "Reliable DDR5 memory at a great price. Perfect for mainstream builds.",
    specs: {
      "Capacity": "32GB (2x16GB)",
      "Speed": "DDR5-5200",
      "Timings": "CL40-40-40",
      "Voltage": "1.25V",
      "RGB": "No",
      "Heat Spreader": "Aluminum"
    },
    rating: 4.6,
    reviewCount: 789,
    inStock: true
  },
  {
    id: "ram-4",
    name: "Teamgroup T-Force Delta RGB 32GB DDR5-6400",
    brand: "Teamgroup",
    category: "ram",
    price: 179.99,
    image: "/products/ram-teamgroup-delta.jpg",
    description: "Fast DDR5-6400 memory with vibrant RGB lighting. Great for high-performance builds.",
    specs: {
      "Capacity": "32GB (2x16GB)",
      "Speed": "DDR5-6400",
      "Timings": "CL32-39-39-84",
      "Voltage": "1.35V",
      "RGB": "Yes",
      "Heat Spreader": "Aluminum"
    },
    rating: 4.5,
    reviewCount: 321,
    inStock: true
  },
  {
    id: "ram-5",
    name: "Crucial DDR5-4800 16GB",
    brand: "Crucial",
    category: "ram",
    price: 49.99,
    image: "/products/ram-crucial-basic.jpg",
    description: "Basic DDR5 memory at an entry-level price. JEDEC standard specifications.",
    specs: {
      "Capacity": "16GB (1x16GB)",
      "Speed": "DDR5-4800",
      "Timings": "CL40-39-39",
      "Voltage": "1.1V",
      "RGB": "No",
      "Heat Spreader": "None"
    },
    rating: 4.4,
    reviewCount: 567,
    inStock: true
  },

  // Storage
  {
    id: "storage-1",
    name: "Samsung 990 Pro 2TB NVMe SSD",
    brand: "Samsung",
    category: "storage",
    price: 179.99,
    originalPrice: 229.99,
    image: "/products/ssd-samsung-990pro.jpg",
    description: "Flagship PCIe 4.0 NVMe SSD with 7,450 MB/s sequential read speeds. Ideal for gaming and professional workloads.",
    specs: {
      "Capacity": "2TB",
      "Interface": "PCIe 4.0 x4 NVMe",
      "Read Speed": "7,450 MB/s",
      "Write Speed": "6,900 MB/s",
      "Form Factor": "M.2 2280",
      "Endurance": "1,200 TBW"
    },
    rating: 4.9,
    reviewCount: 2341,
    inStock: true,
    featured: true
  },
  {
    id: "storage-2",
    name: "WD Black SN850X 1TB NVMe SSD",
    brand: "Western Digital",
    category: "storage",
    price: 89.99,
    image: "/products/ssd-wd-sn850x.jpg",
    description: "High-performance gaming SSD with up to 7,300 MB/s read speeds. Game Mode 2.0 for predictive loading.",
    specs: {
      "Capacity": "1TB",
      "Interface": "PCIe 4.0 x4 NVMe",
      "Read Speed": "7,300 MB/s",
      "Write Speed": "6,300 MB/s",
      "Form Factor": "M.2 2280",
      "Endurance": "600 TBW"
    },
    rating: 4.8,
    reviewCount: 1567,
    inStock: true
  },
  {
    id: "storage-3",
    name: "Crucial T700 2TB PCIe 5.0 SSD",
    brand: "Crucial",
    category: "storage",
    price: 299.99,
    image: "/products/ssd-crucial-t700.jpg",
    description: "Next-gen PCIe 5.0 NVMe SSD with blazing 12,400 MB/s read speeds. Includes heatsink.",
    specs: {
      "Capacity": "2TB",
      "Interface": "PCIe 5.0 x4 NVMe",
      "Read Speed": "12,400 MB/s",
      "Write Speed": "11,800 MB/s",
      "Form Factor": "M.2 2280",
      "Endurance": "1,200 TBW"
    },
    rating: 4.7,
    reviewCount: 234,
    inStock: true
  },
  {
    id: "storage-4",
    name: "Seagate Barracuda 4TB HDD",
    brand: "Seagate",
    category: "storage",
    price: 79.99,
    image: "/products/hdd-seagate-barracuda.jpg",
    description: "High-capacity 3.5\" hard drive for mass storage. 256MB cache and 5400 RPM.",
    specs: {
      "Capacity": "4TB",
      "Interface": "SATA 6Gb/s",
      "Speed": "5400 RPM",
      "Cache": "256MB",
      "Form Factor": "3.5\"",
      "Warranty": "2 Years"
    },
    rating: 4.5,
    reviewCount: 4521,
    inStock: true
  },
  {
    id: "storage-5",
    name: "SK Hynix Platinum P41 1TB",
    brand: "SK Hynix",
    category: "storage",
    price: 99.99,
    image: "/products/ssd-skhynix-p41.jpg",
    description: "Exceptional value PCIe 4.0 SSD with 7,000 MB/s reads. Low power consumption.",
    specs: {
      "Capacity": "1TB",
      "Interface": "PCIe 4.0 x4 NVMe",
      "Read Speed": "7,000 MB/s",
      "Write Speed": "6,500 MB/s",
      "Form Factor": "M.2 2280",
      "Endurance": "750 TBW"
    },
    rating: 4.8,
    reviewCount: 876,
    inStock: true
  },

  // Motherboards
  {
    id: "mb-1",
    name: "ASUS ROG Crosshair X670E Hero",
    brand: "ASUS",
    category: "motherboards",
    price: 699.99,
    image: "/products/mb-asus-crosshair.jpg",
    description: "Premium AM5 motherboard with robust power delivery and extensive connectivity. Built for enthusiasts.",
    specs: {
      "Socket": "AM5",
      "Chipset": "X670E",
      "Form Factor": "ATX",
      "Memory": "4x DDR5, 128GB max",
      "PCIe Slots": "2x PCIe 5.0 x16",
      "M.2 Slots": "5x M.2"
    },
    rating: 4.8,
    reviewCount: 345,
    inStock: true,
    featured: true
  },
  {
    id: "mb-2",
    name: "MSI MAG Z790 Tomahawk WiFi",
    brand: "MSI",
    category: "motherboards",
    price: 289.99,
    image: "/products/mb-msi-tomahawk.jpg",
    description: "Feature-rich LGA 1700 motherboard with WiFi 6E. Excellent value for Intel builds.",
    specs: {
      "Socket": "LGA 1700",
      "Chipset": "Z790",
      "Form Factor": "ATX",
      "Memory": "4x DDR5, 128GB max",
      "PCIe Slots": "1x PCIe 5.0 x16, 2x PCIe 4.0",
      "M.2 Slots": "4x M.2"
    },
    rating: 4.7,
    reviewCount: 678,
    inStock: true
  },
  {
    id: "mb-3",
    name: "Gigabyte B650 Aorus Elite AX",
    brand: "Gigabyte",
    category: "motherboards",
    price: 229.99,
    image: "/products/mb-gigabyte-aorus.jpg",
    description: "Mid-range AM5 motherboard with WiFi 6E and strong VRM design. Great for Ryzen 7000 series.",
    specs: {
      "Socket": "AM5",
      "Chipset": "B650",
      "Form Factor": "ATX",
      "Memory": "4x DDR5, 128GB max",
      "PCIe Slots": "1x PCIe 4.0 x16",
      "M.2 Slots": "3x M.2"
    },
    rating: 4.6,
    reviewCount: 543,
    inStock: true
  },
  {
    id: "mb-4",
    name: "ASRock B760M Pro RS",
    brand: "ASRock",
    category: "motherboards",
    price: 119.99,
    image: "/products/mb-asrock-b760m.jpg",
    description: "Budget-friendly micro-ATX board for Intel 12th/13th/14th gen CPUs.",
    specs: {
      "Socket": "LGA 1700",
      "Chipset": "B760",
      "Form Factor": "Micro-ATX",
      "Memory": "2x DDR5, 64GB max",
      "PCIe Slots": "1x PCIe 4.0 x16",
      "M.2 Slots": "2x M.2"
    },
    rating: 4.4,
    reviewCount: 432,
    inStock: true
  },
  {
    id: "mb-5",
    name: "ASUS ROG Strix B650E-I Gaming WiFi",
    brand: "ASUS",
    category: "motherboards",
    price: 319.99,
    image: "/products/mb-asus-strix-itx.jpg",
    description: "Compact Mini-ITX powerhouse for small form factor AM5 builds with top-tier features.",
    specs: {
      "Socket": "AM5",
      "Chipset": "B650E",
      "Form Factor": "Mini-ITX",
      "Memory": "2x DDR5, 64GB max",
      "PCIe Slots": "1x PCIe 5.0 x16",
      "M.2 Slots": "2x M.2"
    },
    rating: 4.7,
    reviewCount: 234,
    inStock: true
  },

  // Cases
  {
    id: "case-1",
    name: "Lian Li O11 Dynamic EVO",
    brand: "Lian Li",
    category: "cases",
    price: 169.99,
    image: "/products/case-lianli-o11.jpg",
    description: "Iconic dual-chamber design with exceptional cooling potential. Supports up to 360mm radiators on multiple sides.",
    specs: {
      "Form Factor": "Mid-Tower",
      "Motherboard Support": "E-ATX, ATX, Micro-ATX, Mini-ITX",
      "GPU Length": "Up to 422mm",
      "CPU Cooler Height": "Up to 167mm",
      "Radiator Support": "360mm top, side, bottom",
      "Drive Bays": "4x 2.5\", 2x 3.5\""
    },
    rating: 4.9,
    reviewCount: 2341,
    inStock: true,
    featured: true
  },
  {
    id: "case-2",
    name: "NZXT H7 Flow",
    brand: "NZXT",
    category: "cases",
    price: 129.99,
    image: "/products/case-nzxt-h7.jpg",
    description: "Excellent airflow case with perforated front panel. Clean cable management and tool-less design.",
    specs: {
      "Form Factor": "Mid-Tower",
      "Motherboard Support": "ATX, Micro-ATX, Mini-ITX",
      "GPU Length": "Up to 400mm",
      "CPU Cooler Height": "Up to 185mm",
      "Radiator Support": "360mm top, 360mm front",
      "Drive Bays": "2x 2.5\", 2x 3.5\""
    },
    rating: 4.7,
    reviewCount: 876,
    inStock: true
  },
  {
    id: "case-3",
    name: "Fractal Design North",
    brand: "Fractal Design",
    category: "cases",
    price: 139.99,
    image: "/products/case-fractal-north.jpg",
    description: "Unique wood and mesh design for a premium aesthetic. Excellent airflow with Scandinavian style.",
    specs: {
      "Form Factor": "Mid-Tower",
      "Motherboard Support": "ATX, Micro-ATX, Mini-ITX",
      "GPU Length": "Up to 355mm",
      "CPU Cooler Height": "Up to 170mm",
      "Radiator Support": "360mm top, 280mm front",
      "Drive Bays": "2x 2.5\", 2x 3.5\""
    },
    rating: 4.8,
    reviewCount: 654,
    inStock: true
  },
  {
    id: "case-4",
    name: "Corsair 4000D Airflow",
    brand: "Corsair",
    category: "cases",
    price: 104.99,
    image: "/products/case-corsair-4000d.jpg",
    description: "Popular mid-tower with high airflow front panel. Great value with premium build quality.",
    specs: {
      "Form Factor": "Mid-Tower",
      "Motherboard Support": "ATX, Micro-ATX, Mini-ITX",
      "GPU Length": "Up to 360mm",
      "CPU Cooler Height": "Up to 170mm",
      "Radiator Support": "360mm top, 280mm front",
      "Drive Bays": "2x 2.5\", 2x 3.5\""
    },
    rating: 4.8,
    reviewCount: 3456,
    inStock: true
  },
  {
    id: "case-5",
    name: "Cooler Master NR200P Max",
    brand: "Cooler Master",
    category: "cases",
    price: 349.99,
    image: "/products/case-cm-nr200p.jpg",
    description: "Premium Mini-ITX case with included 280mm AIO and 850W SFX PSU. Everything you need for a compact build.",
    specs: {
      "Form Factor": "Mini-ITX",
      "Motherboard Support": "Mini-ITX, Mini-DTX",
      "GPU Length": "Up to 336mm",
      "CPU Cooler Height": "N/A (AIO included)",
      "Included": "280mm AIO, 850W SFX PSU",
      "Drive Bays": "2x 2.5\", 1x 3.5\""
    },
    rating: 4.6,
    reviewCount: 234,
    inStock: true
  },

  // PSUs
  {
    id: "psu-1",
    name: "Corsair RM1000x 1000W 80+ Gold",
    brand: "Corsair",
    category: "psus",
    price: 189.99,
    image: "/products/psu-corsair-rm1000x.jpg",
    description: "Fully modular 1000W PSU with 80+ Gold efficiency. Zero RPM fan mode for silent operation.",
    specs: {
      "Wattage": "1000W",
      "Efficiency": "80+ Gold",
      "Modular": "Fully Modular",
      "Fan Size": "135mm",
      "ATX Version": "ATX 3.0",
      "Warranty": "10 Years"
    },
    rating: 4.9,
    reviewCount: 1876,
    inStock: true,
    featured: true
  },
  {
    id: "psu-2",
    name: "Seasonic Focus GX-850 850W",
    brand: "Seasonic",
    category: "psus",
    price: 139.99,
    image: "/products/psu-seasonic-focus.jpg",
    description: "Highly reliable 850W PSU with 80+ Gold certification. Hybrid fan control for quiet operation.",
    specs: {
      "Wattage": "850W",
      "Efficiency": "80+ Gold",
      "Modular": "Fully Modular",
      "Fan Size": "120mm",
      "ATX Version": "ATX 2.4",
      "Warranty": "10 Years"
    },
    rating: 4.8,
    reviewCount: 2341,
    inStock: true
  },
  {
    id: "psu-3",
    name: "be quiet! Dark Power 13 1000W",
    brand: "be quiet!",
    category: "psus",
    price: 269.99,
    image: "/products/psu-bequiet-darkpower.jpg",
    description: "Premium 80+ Titanium PSU with exceptional efficiency. Frameless fan design for near-silent operation.",
    specs: {
      "Wattage": "1000W",
      "Efficiency": "80+ Titanium",
      "Modular": "Fully Modular",
      "Fan Size": "135mm Silent Wings",
      "ATX Version": "ATX 3.0",
      "Warranty": "10 Years"
    },
    rating: 4.9,
    reviewCount: 432,
    inStock: true
  },
  {
    id: "psu-4",
    name: "EVGA SuperNOVA 750 G7",
    brand: "EVGA",
    category: "psus",
    price: 109.99,
    originalPrice: 129.99,
    image: "/products/psu-evga-supernova.jpg",
    description: "Compact 750W fully modular PSU. Eco mode for fan-off operation under light loads.",
    specs: {
      "Wattage": "750W",
      "Efficiency": "80+ Gold",
      "Modular": "Fully Modular",
      "Fan Size": "130mm",
      "ATX Version": "ATX 2.4",
      "Warranty": "10 Years"
    },
    rating: 4.7,
    reviewCount: 1234,
    inStock: true
  },
  {
    id: "psu-5",
    name: "Thermaltake Toughpower GF3 1200W",
    brand: "Thermaltake",
    category: "psus",
    price: 199.99,
    image: "/products/psu-thermaltake-gf3.jpg",
    description: "ATX 3.0 ready PSU with native 12VHPWR connector. Ready for next-gen GPUs.",
    specs: {
      "Wattage": "1200W",
      "Efficiency": "80+ Gold",
      "Modular": "Fully Modular",
      "Fan Size": "140mm",
      "ATX Version": "ATX 3.0",
      "Warranty": "10 Years"
    },
    rating: 4.6,
    reviewCount: 321,
    inStock: true
  },

  // Cooling
  {
    id: "cool-1",
    name: "NZXT Kraken Z73 360mm AIO",
    brand: "NZXT",
    category: "cooling",
    price: 279.99,
    image: "/products/cool-nzxt-kraken.jpg",
    description: "Premium 360mm AIO with customizable LCD display. Show temps, GIFs, or custom images.",
    specs: {
      "Type": "Liquid AIO",
      "Radiator Size": "360mm",
      "Fan Size": "3x 120mm",
      "Display": "2.36\" LCD",
      "Pump Speed": "800-2800 RPM",
      "RGB": "Infinity Mirror on pump"
    },
    rating: 4.8,
    reviewCount: 987,
    inStock: true,
    featured: true
  },
  {
    id: "cool-2",
    name: "Noctua NH-D15 chromax.black",
    brand: "Noctua",
    category: "cooling",
    price: 109.99,
    image: "/products/cool-noctua-nhd15.jpg",
    description: "Legendary dual-tower air cooler in all-black finish. Near-silent operation with exceptional cooling.",
    specs: {
      "Type": "Air Cooler",
      "Height": "165mm",
      "Fan Size": "2x 140mm NF-A15",
      "TDP": "250W+",
      "Noise Level": "24.6 dBA max",
      "Socket Support": "Intel & AMD"
    },
    rating: 4.9,
    reviewCount: 4567,
    inStock: true
  },
  {
    id: "cool-3",
    name: "Corsair iCUE H150i Elite LCD XT",
    brand: "Corsair",
    category: "cooling",
    price: 299.99,
    image: "/products/cool-corsair-h150i.jpg",
    description: "360mm AIO with IPS LCD pump head. iCUE software integration for full RGB control.",
    specs: {
      "Type": "Liquid AIO",
      "Radiator Size": "360mm",
      "Fan Size": "3x 120mm AF ELITE",
      "Display": "2.1\" IPS LCD",
      "Pump Speed": "2100 RPM",
      "RGB": "Yes (iCUE)"
    },
    rating: 4.7,
    reviewCount: 654,
    inStock: true
  },
  {
    id: "cool-4",
    name: "DeepCool AK620",
    brand: "DeepCool",
    category: "cooling",
    price: 69.99,
    image: "/products/cool-deepcool-ak620.jpg",
    description: "Excellent value dual-tower cooler. Performance rivaling expensive options at half the price.",
    specs: {
      "Type": "Air Cooler",
      "Height": "160mm",
      "Fan Size": "2x 120mm FK120",
      "TDP": "260W",
      "Noise Level": "28 dBA max",
      "Socket Support": "Intel & AMD"
    },
    rating: 4.8,
    reviewCount: 2134,
    inStock: true
  },
  {
    id: "cool-5",
    name: "Lian Li Galahad II Trinity 360",
    brand: "Lian Li",
    category: "cooling",
    price: 189.99,
    image: "/products/cool-lianli-galahad.jpg",
    description: "Infinity mirror pump design with daisy-chainable RGB fans. Premium aesthetics and performance.",
    specs: {
      "Type": "Liquid AIO",
      "Radiator Size": "360mm",
      "Fan Size": "3x 120mm Uni Fan",
      "Display": "Infinity Mirror",
      "Pump Speed": "3100 RPM",
      "RGB": "ARGB"
    },
    rating: 4.7,
    reviewCount: 456,
    inStock: true
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.brand.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery)
  )
}

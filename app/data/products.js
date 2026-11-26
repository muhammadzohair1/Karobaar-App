export const products = [
    {
        id: 1,
        name: "ThinkPad X1 Carbon Gen 11",
        category: "Ultrabook",
        price: "185,000",
        src: "/img/ThinkPad X1 Carbon Gen 11.avif",
        detail:
            'Intel Core i7-1365U • 16GB LPDDR5 • 512GB NVMe SSD • 14" FHD+ Anti-Glare IPS • 40-Point Benchmarked.',
    },
    {
        id: 2,
        name: "Dell XPS 15 9530",
        category: "Creator",
        price: "295,000",
        src: "/img/Dell XPS 15 9530.avif",
        detail:
            'Intel Core i7-13700H • 32GB DDR5 • 1TB NVMe • RTX 4050 6GB • 15.6" 100% sRGB InfinityEdge Display.',
    },
    {
        id: 3,
        name: "HP EliteBook 840 G10",
        category: "Business",
        price: "148,000",
        src: "/img/HP EliteBook 840 G10.jpg",
        detail:
            "Intel Core i5-1345U • 16GB DDR5 • 512GB NVMe SSD • All-Aluminum Chassis • 2-Year Karobaar Warranty.",
    },
    {
        id: 4,
        name: "MacBook Pro 14\" M2 Pro",
        category: "Creator",
        price: "340,000",
        src: "/img/MacBook Pro.jpg",
        detail:
            "Apple M2 Pro (10-Core CPU / 16-Core GPU) • 16GB Unified Memory • 512GB SSD • Liquid Retina XDR.",
    },
    {
        id: 5,
        name: "Lenovo Legion Slim 5",
        category: "Workstation",
        price: "265,000",
        src: "/img/Lenovo Legion Slim 5.avif",
        detail:
            'AMD Ryzen 7 7840HS • 16GB DDR5 • 1TB NVMe • RTX 4060 8GB • 16" 165Hz WQXGA Thermal-Tested.',
    },
    {
        id: 6,
        name: "Dell Latitude 7440",
        category: "Ultrabook",
        price: "135,000",
        src: "/img/Dell Latitude 7440.avif",
        detail:
            "Intel Core i5-1335U • 16GB LPDDR5 • 512GB NVMe • Lightweight Magnesium Body • Verified 94%+ Battery Health.",
    },
];

// Returns the 3 newest items based on highest `id`
export function getLatestProducts(count = 3) {
    return [...products].sort((a, b) => b.id - a.id).slice(0, count);
}   
// ── Hoa Đô Product Data ──────────────────────────────────────────
// Thêm sản phẩm mới tại đây. Mỗi sản phẩm cần có đầy đủ các trường.

export const products = [
  {
    id: 1,
    slug: 'ghe-banh-hien-dai',
    name: 'Ghế bành hiện đại',
    price: 49900000,
    originalPrice: 79900000,
    category: 'armchair',
    collection: 'living',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/7WYkV7IFYMHq5S4VLeW7fVFbyhM.jpg',
      'https://framerusercontent.com/images/G2TgdIr0Eo0hxovlx6zC39EaGMs.jpg',
      'https://framerusercontent.com/images/faA2JtPdMFRw1SebGz2J7EIDWnY.jpg',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Beige trung tính' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá nhạt' },
      { id: 'blush', color: '#C9A0A0', label: 'Hồng phấn' },
    ],
    description: 'Thiết kế ghế bành module linh hoạt với bố cục đa dạng, độ êm ái sâu và phong cách hiện đại vượt thời gian — hoàn hảo cho không gian sống luôn đổi mới.',
    specs: {
      'Sức chứa': '1–2 người',
      'Vật liệu bọc': 'Vải cao cấp chống bụi',
      'Vật liệu khung': 'Gỗ rắn + ván ép kỹ thuật',
      'Chân ghế': 'Gỗ tự nhiên',
      'Đệm ngồi': 'Mút mật độ cao',
      'Kích thước': 'R85 × S90 × C82 cm',
    },
  },
  {
    id: 2,
    slug: 'giuong-king-size',
    name: 'Giường ngủ King size',
    price: 28500000,
    originalPrice: 35900000,
    category: 'bedroom',
    collection: 'bedroom',
    availability: 'in-stock',
    badge: 'new',
    images: [
      'https://framerusercontent.com/images/fNi9Nej5TxioO4qZtdDen84JA.png',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Beige' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá' },
      { id: 'blush', color: '#C9A0A0', label: 'Hồng' },
    ],
    description: 'Giường ngủ King size thiết kế tối giản, khung gỗ sồi tự nhiên bền đẹp. Đầu giường bọc vải cao cấp tạo điểm nhấn sang trọng cho phòng ngủ.',
    specs: {
      'Kích thước': '180 × 200 cm (King)',
      'Vật liệu khung': 'Gỗ sồi tự nhiên',
      'Đầu giường': 'Bọc vải cao cấp',
      'Chịu tải': '300 kg',
    },
  },
  {
    id: 3,
    slug: 'ban-an-am-cung',
    name: 'Bàn ăn ấm cúng',
    price: 16500000,
    originalPrice: null,
    category: 'table',
    collection: 'dining',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/ycBk5SjDtey2kS3EWXVJA7OPWQc.png',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
    ],
    description: 'Bàn ăn ấm cúng dành cho gia đình 4–6 người. Mặt bàn gỗ tự nhiên dày 4cm, chân bàn vuông vắn tạo sự ổn định tuyệt đối.',
    specs: {
      'Kích thước': '160 × 90 × 75 cm',
      'Vật liệu': 'Gỗ óc chó / sồi tự nhiên',
      'Sức chứa': '4–6 người',
    },
  },
  {
    id: 4,
    slug: 'tu-quan-ao',
    name: 'Tủ quần áo',
    price: 7200000,
    originalPrice: null,
    category: 'storage',
    collection: 'bedroom',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/fNi9Nej5TxioO4qZtdDen84JA.png',
    ],
    swatches: [
      { id: 'beige',  color: '#D4C5B0', label: 'Beige' },
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
    ],
    description: 'Tủ quần áo hiện đại với thiết kế 3 cánh, tối ưu không gian lưu trữ. Bên trong có thanh treo, ngăn kéo và kệ điều chỉnh linh hoạt.',
    specs: {
      'Kích thước': 'R180 × S60 × C210 cm',
      'Vật liệu': 'Gỗ công nghiệp + MDF phủ melamine',
      'Cửa': '3 cánh mở',
    },
  },
  {
    id: 5,
    slug: 'sofa-goc-l',
    name: 'Sofa góc L cao cấp',
    price: 85000000,
    originalPrice: 110000000,
    category: 'sofa',
    collection: 'living',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Kem' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh' },
    ],
    description: 'Sofa góc L thiết kế hiện đại, phù hợp cho phòng khách rộng. Đệm ngồi mút cao cấp, vải bọc chống bụi bẩn và dễ vệ sinh.',
    specs: {
      'Kích thước': '280 × 200 × 85 cm',
      'Vật liệu bọc': 'Vải microfiber cao cấp',
      'Chân ghế': 'Gỗ sồi',
    },
  },
  {
    id: 6,
    slug: 'ke-sach-go-tu-nhien',
    name: 'Kệ sách gỗ tự nhiên',
    price: 4500000,
    originalPrice: null,
    category: 'storage',
    collection: 'office',
    availability: 'pre-order',
    badge: null,
    images: [
      'https://framerusercontent.com/images/sxicaLM2H1i4TiDmfiey9JSDFbQ.png',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
    ],
    description: 'Kệ sách gỗ tự nhiên 5 tầng, thiết kế tối giản. Phù hợp cho phòng làm việc, phòng khách hoặc phòng ngủ.',
    specs: {
      'Kích thước': 'R80 × S30 × C180 cm',
      'Số tầng': '5',
      'Vật liệu': 'Gỗ tự nhiên',
    },
  },
  {
    id: 7,
    slug: 'ban-lam-viec-hien-dai',
    name: 'Bàn làm việc hiện đại',
    price: 12000000,
    originalPrice: 15000000,
    category: 'desk',
    collection: 'office',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/sxicaLM2H1i4TiDmfiey9JSDFbQ.png',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'white',  color: '#F0EDE8', label: 'Trắng tinh' },
    ],
    description: 'Bàn làm việc rộng rãi với ngăn kéo tích hợp. Thiết kế tối giản giúp tập trung tối đa cho công việc.',
    specs: {
      'Kích thước': 'R140 × S70 × C75 cm',
      'Ngăn kéo': '3 ngăn',
      'Vật liệu': 'Gỗ óc chó / MDF',
    },
  },
  {
    id: 8,
    slug: 'ghe-van-phong-ergonomic',
    name: 'Ghế văn phòng ergonomic',
    price: 8900000,
    originalPrice: null,
    category: 'chair',
    collection: 'office',
    availability: 'in-stock',
    badge: 'new',
    images: [
      'https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png',
    ],
    swatches: [
      { id: 'black',  color: '#2B2B2B', label: 'Đen' },
      { id: 'beige',  color: '#D4C5B0', label: 'Kem' },
    ],
    description: 'Ghế văn phòng thiết kế ergonomic hỗ trợ lưng tối ưu. Điều chỉnh chiều cao, độ ngả và tựa tay linh hoạt.',
    specs: {
      'Chiều cao ngồi': '42–54 cm (điều chỉnh)',
      'Tải trọng': '120 kg',
      'Vật liệu lưới': 'Lưới thoáng khí cao cấp',
    },
  },
  {
    id: 9,
    slug: 'den-ban-doc-sach',
    name: 'Đèn bàn đọc sách',
    price: 1200000,
    originalPrice: null,
    category: 'lighting',
    collection: 'office',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png',
    ],
    swatches: [
      { id: 'gold',  color: '#C7A35D', label: 'Vàng đồng' },
      { id: 'black', color: '#2B2B2B', label: 'Đen' },
    ],
    description: 'Đèn bàn thiết kế tối giản, ánh sáng vàng ấm bảo vệ mắt. Cổng USB tích hợp tiện lợi cho sạc điện thoại.',
    specs: {
      'Công suất': '12W LED',
      'Nhiệt màu': '2700K – 6500K (điều chỉnh)',
      'Cổng sạc': 'USB-A',
    },
  },
  {
    id: 10,
    slug: 'tu-ly-trang-tri',
    name: 'Tủ ly trang trí',
    price: 18500000,
    originalPrice: null,
    category: 'storage',
    collection: 'dining',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/yD0xvCBcnqvsSqH52k4UgL5tXwo.jpg',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
    ],
    description: 'Tủ ly trang trí mặt kính, khung gỗ tự nhiên chắc chắn. Không gian trưng bày lý tưởng cho bộ sưu tập gốm sứ và ly tách yêu thích.',
    specs: {
      'Kích thước': 'R120 × S40 × C180 cm',
      'Vật liệu': 'Gỗ tự nhiên + kính cường lực',
      'Số ngăn': '4 ngăn kính',
    },
  },
  {
    id: 11,
    slug: 'gia-treo-quan-ao',
    name: 'Giá treo quần áo',
    price: 1500000,
    originalPrice: null,
    category: 'storage',
    collection: 'bedroom',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/KVY6Z4449Nqt1OlKCwPPh0d9Ofs.jpg',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'black',  color: '#2B2B2B', label: 'Đen' },
    ],
    description: 'Giá treo quần áo gỗ tự nhiên, thiết kế gọn nhẹ dễ di chuyển. Giải pháp lưu trữ linh hoạt cho phòng ngủ hoặc lối vào nhà.',
    specs: {
      'Kích thước': 'R90 × S45 × C170 cm',
      'Vật liệu': 'Gỗ sồi tự nhiên',
      'Tải trọng thanh treo': '15 kg',
    },
  },
  {
    id: 12,
    slug: 'tu-dau-giuong-luna',
    name: 'Tủ đầu giường Luna',
    price: 5200000,
    originalPrice: 6800000,
    category: 'storage',
    collection: 'bedroom',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/OXrN60veG6MzkQAk4WkbJV7iWck.jpg',
    ],
    swatches: [
      { id: 'beige',  color: '#D4C5B0', label: 'Beige' },
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
    ],
    description: 'Tủ đầu giường Luna với 2 ngăn kéo êm ái, mặt trên bo tròn tinh tế. Hoàn thiện bộ phòng ngủ với phong cách ấm áp, hiện đại.',
    specs: {
      'Kích thước': 'R45 × S40 × C55 cm',
      'Số ngăn kéo': '2 ngăn',
      'Vật liệu': 'Gỗ công nghiệp phủ veneer',
    },
  },
  {
    id: 13,
    slug: 'ghe-bap-benh-thu-gian',
    name: 'Ghế bập bênh thư giãn',
    price: 9800000,
    originalPrice: null,
    category: 'chair',
    collection: 'living',
    availability: 'in-stock',
    badge: 'new',
    images: [
      'https://framerusercontent.com/images/k40qE3420k4Pp5U8Bcexpq6A.jpg',
    ],
    swatches: [
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
    ],
    description: 'Ghế bập bênh khung gỗ uốn cong mềm mại, đệm ngồi êm ái. Góc thư giãn lý tưởng cho phòng khách hoặc ban công.',
    specs: {
      'Kích thước': 'R65 × S95 × C90 cm',
      'Vật liệu khung': 'Gỗ sồi uốn cong',
      'Đệm ngồi': 'Mút mật độ cao bọc vải',
    },
  },
  {
    id: 14,
    slug: 'tham-trai-san-det-tay',
    name: 'Thảm trải sàn dệt tay',
    price: 3500000,
    originalPrice: null,
    category: 'decor',
    collection: 'living',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/DlVzmWk17HlMHzItI2MSyesnV4.jpg',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Beige' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá nhạt' },
      { id: 'blush', color: '#C9A0A0', label: 'Hồng phấn' },
    ],
    description: 'Thảm trải sàn dệt tay từ sợi tự nhiên, hoạ tiết tối giản tôn lên vẻ ấm cúng cho không gian sống.',
    specs: {
      'Kích thước': '160 × 230 cm',
      'Chất liệu': 'Sợi cotton & len tự nhiên',
      'Vệ sinh': 'Giặt khô hoặc hút bụi định kỳ',
    },
  },
  {
    id: 15,
    slug: 'ke-trang-tri-treo-tuong',
    name: 'Kệ trang trí treo tường',
    price: 2800000,
    originalPrice: null,
    category: 'storage',
    collection: 'living',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/DlVzmWk17HlMHzItI2MSyesnV4.jpg',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'white',  color: '#F0EDE8', label: 'Trắng tinh' },
    ],
    description: 'Kệ treo tường gỗ tự nhiên, thiết kế tối giản phù hợp trưng bày sách, cây cảnh hoặc đồ trang trí.',
    specs: {
      'Kích thước': 'R80 × S20 × C25 cm',
      'Vật liệu': 'Gỗ tự nhiên',
      'Phụ kiện đi kèm': 'Bộ vít treo tường',
    },
  },
  {
    id: 16,
    slug: 'ban-tra-mat-da',
    name: 'Bàn trà mặt đá',
    price: 14500000,
    originalPrice: 18900000,
    category: 'table',
    collection: 'living',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/wJZ3pRoBzaNgo0vg8PhdYdrbU.jpg',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
    ],
    description: 'Bàn trà mặt đá cẩm thạch nhân tạo, chân gỗ tự nhiên vững chãi. Điểm nhấn sang trọng cho phòng khách hiện đại.',
    specs: {
      'Kích thước': '110 × 60 × 40 cm',
      'Mặt bàn': 'Đá cẩm thạch nhân tạo',
      'Chân bàn': 'Gỗ sồi tự nhiên',
    },
  },
  {
    id: 17,
    slug: 'sofa-goc-halo',
    name: 'Sofa góc Halo',
    price: 92000000,
    originalPrice: null,
    category: 'sofa',
    collection: 'living',
    availability: 'pre-order',
    badge: 'new',
    images: [
      'https://framerusercontent.com/images/WgdTw7x2dxjTUNtMggjfwAim8.jpg',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Kem' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá nhạt' },
      { id: 'blush', color: '#C9A0A0', label: 'Hồng phấn' },
    ],
    description: 'Sofa góc Halo với module linh hoạt, đệm sâu êm ái và đường may tinh xảo. Lựa chọn lý tưởng cho phòng khách rộng.',
    specs: {
      'Kích thước': '320 × 220 × 88 cm',
      'Vật liệu bọc': 'Vải bố cao cấp',
      'Cấu trúc': 'Khung gỗ rắn + lò xo túi',
    },
  },
  {
    id: 18,
    slug: 'sofa-cong-ivory-curve',
    name: 'Sofa cong Ivory Curve',
    price: 68500000,
    originalPrice: null,
    category: 'sofa',
    collection: 'living',
    availability: 'pre-order',
    badge: null,
    images: [
      'https://framerusercontent.com/images/EfZdV2fzLBheQe7HpdMyo9Q7tuY.jpg',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Kem ngà' },
      { id: 'blush', color: '#C9A0A0', label: 'Hồng phấn' },
    ],
    description: 'Sofa dáng cong Ivory Curve mang đường nét mềm mại, hiện đại. Bọc vải nhung cao cấp tạo cảm giác sang trọng, ấm áp.',
    specs: {
      'Kích thước': '240 × 95 × 78 cm',
      'Vật liệu bọc': 'Vải nhung cao cấp',
      'Chân ghế': 'Gỗ sồi nhuộm màu',
    },
  },
  {
    id: 19,
    slug: 'sofa-vang-luxe',
    name: 'Sofa văng Luxe',
    price: 75000000,
    originalPrice: 95000000,
    category: 'sofa',
    collection: 'living',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/0VH5digUgoWOHkeoTvggSHmpcXw.jpg',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Kem' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá nhạt' },
    ],
    description: 'Sofa văng Luxe ba chỗ ngồi, đệm bông ép cao cấp tạo độ êm vừa phải. Thiết kế thanh lịch, dễ phối hợp với mọi phong cách nội thất.',
    specs: {
      'Kích thước': '210 × 90 × 85 cm',
      'Vật liệu bọc': 'Vải linen cao cấp',
      'Chân ghế': 'Gỗ óc chó',
    },
  },
  {
    id: 20,
    slug: 'ghe-don-nimbus',
    name: 'Ghế đôn Nimbus',
    price: 4500000,
    originalPrice: 5800000,
    category: 'chair',
    collection: 'living',
    availability: 'in-stock',
    badge: 'sale',
    images: [
      'https://framerusercontent.com/images/P2P4EK6VQtLJvGFbgEC1RIpNwDA.jpg',
    ],
    swatches: [
      { id: 'beige', color: '#D4C5B0', label: 'Kem' },
      { id: 'blush', color: '#C9A0A0', label: 'Hồng phấn' },
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá nhạt' },
    ],
    description: 'Ghế đôn Nimbus tròn mềm mại, có thể dùng làm ghế ngồi phụ hoặc kệ để chân. Bọc vải bố mềm, dễ vệ sinh.',
    specs: {
      'Kích thước': 'Ø45 × C42 cm',
      'Vật liệu bọc': 'Vải bố',
      'Chân ghế': 'Gỗ sồi tự nhiên',
    },
  },
  {
    id: 21,
    slug: 'sofa-doi-nordic',
    name: 'Sofa đôi Nordic',
    price: 32000000,
    originalPrice: null,
    category: 'sofa',
    collection: 'living',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/vRNpI9YWDWmJnMMSHRwU23CK5qc.jpg',
    ],
    swatches: [
      { id: 'sage',  color: '#8FA888', label: 'Xanh lá nhạt' },
      { id: 'beige', color: '#D4C5B0', label: 'Kem' },
    ],
    description: 'Sofa đôi Nordic phong cách Bắc Âu tối giản, gam màu trung tính dễ phối. Kích thước nhỏ gọn phù hợp căn hộ hiện đại.',
    specs: {
      'Kích thước': '160 × 85 × 80 cm',
      'Vật liệu bọc': 'Vải cotton pha',
      'Chân ghế': 'Gỗ sồi',
    },
  },
  {
    id: 22,
    slug: 'ghe-thu-gian-solace',
    name: 'Ghế thư giãn Solace',
    price: 22000000,
    originalPrice: null,
    category: 'armchair',
    collection: 'living',
    availability: 'in-stock',
    badge: 'new',
    images: [
      'https://framerusercontent.com/images/iv5vVhlmZ4pFOgI9q32e6Z6A4.jpg',
    ],
    swatches: [
      { id: 'beige',  color: '#D4C5B0', label: 'Kem' },
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
    ],
    description: 'Ghế thư giãn Solace với tựa lưng cao và đệm ngồi sâu, mang lại cảm giác thư thái tuyệt đối sau ngày dài.',
    specs: {
      'Kích thước': 'R75 × S85 × C100 cm',
      'Vật liệu bọc': 'Vải bố cao cấp',
      'Đệm ngồi': 'Mút đàn hồi cao',
    },
  },
  {
    id: 23,
    slug: 'tu-sach-go-tu-nhien',
    name: 'Tủ sách gỗ tự nhiên',
    price: 6800000,
    originalPrice: null,
    category: 'storage',
    collection: 'office',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/pYHxE53bAcJLM0pFXOQJ47TVhE.jpg',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
      { id: 'white',  color: '#F0EDE8', label: 'Trắng tinh' },
    ],
    description: 'Tủ sách gỗ tự nhiên nhiều ngăn, thiết kế module dễ sắp xếp theo không gian. Phù hợp cho phòng làm việc hoặc thư viện gia đình.',
    specs: {
      'Kích thước': 'R100 × S35 × C190 cm',
      'Số ngăn': '6 ngăn mở',
      'Vật liệu': 'Gỗ tự nhiên',
    },
  },
  {
    id: 24,
    slug: 'ban-console-aspen',
    name: 'Bàn console Aspen',
    price: 11200000,
    originalPrice: null,
    category: 'table',
    collection: 'living',
    availability: 'in-stock',
    badge: null,
    images: [
      'https://framerusercontent.com/images/L8g1Hm3h66o5qX8At0MRzKZDjXc.jpg',
    ],
    swatches: [
      { id: 'walnut', color: '#7A5C3A', label: 'Óc chó' },
      { id: 'oak',    color: '#B8966E', label: 'Sồi' },
    ],
    description: 'Bàn console Aspen dáng thon gọn, lý tưởng đặt ở hành lang hoặc sau sofa. Mặt bàn gỗ tự nhiên vân đẹp, chân thanh mảnh.',
    specs: {
      'Kích thước': '120 × 35 × 80 cm',
      'Vật liệu': 'Gỗ sồi tự nhiên',
      'Ngăn kéo': '1 ngăn',
    },
  },
]

// ── Helpers ──────────────────────────────────────────────────────

export const formatPrice = (price) =>
  new Intl.NumberFormat('vi-VN').format(price) + ' ₫'

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (product, count = 3) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count)
    .concat(
      products
        .filter((p) => p.id !== product.id && p.category !== product.category)
        .slice(0, Math.max(0, count - products.filter((p) => p.id !== product.id && p.category === product.category).length))
    )
    .slice(0, count)

// ── Hướng dẫn bảo quản theo nhóm danh mục ─────────────────────────
const CARE_BY_CATEGORY = {
  sofa: 'Hút bụi định kỳ để loại bỏ bụi bẩn trên bề mặt vải. Lau vết bẩn nhẹ bằng khăn ẩm và dung dịch tẩy rửa trung tính, tránh chà xát mạnh. Không để đồ nội thất tiếp xúc trực tiếp với ánh nắng gắt trong thời gian dài để giữ màu vải bền đẹp.',
  armchair: 'Hút bụi định kỳ để loại bỏ bụi bẩn trên bề mặt vải. Lau vết bẩn nhẹ bằng khăn ẩm và dung dịch tẩy rửa trung tính, tránh chà xát mạnh. Không để đồ nội thất tiếp xúc trực tiếp với ánh nắng gắt trong thời gian dài để giữ màu vải bền đẹp.',
  chair: 'Lau bề mặt bằng khăn mềm, khô hoặc hơi ẩm. Tránh đặt ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với nước trong thời gian dài. Kiểm tra và siết lại ốc vít định kỳ để đảm bảo độ chắc chắn.',
  table: 'Lau bề mặt gỗ bằng khăn mềm, khô. Tránh đặt vật nóng hoặc ẩm trực tiếp lên mặt bàn, nên sử dụng lót bàn để bảo vệ lớp hoàn thiện. Vệ sinh định kỳ bằng dung dịch chuyên dụng cho đồ gỗ để giữ độ bóng tự nhiên.',
  desk: 'Lau bề mặt gỗ bằng khăn mềm, khô. Tránh đặt vật nóng hoặc ẩm trực tiếp lên mặt bàn, nên sử dụng lót bàn để bảo vệ lớp hoàn thiện. Vệ sinh định kỳ bằng dung dịch chuyên dụng cho đồ gỗ để giữ độ bóng tự nhiên.',
  storage: 'Lau bề mặt bằng khăn mềm, khô hoặc hơi ẩm, tránh dùng hoá chất tẩy rửa mạnh làm hỏng lớp sơn phủ. Đặt ở nơi khô ráo, thoáng khí để hạn chế ẩm mốc. Tránh xếp quá tải trọng cho phép của từng ngăn kệ.',
  bedroom: 'Vệ sinh khung giường và đầu giường bằng khăn mềm, khô. Với phần bọc vải, hút bụi định kỳ và lau vết bẩn bằng dung dịch tẩy rửa trung tính. Kiểm tra và siết lại các khớp nối định kỳ để đảm bảo độ chắc chắn.',
  lighting: 'Lau bề mặt đèn bằng khăn khô, mềm để tránh trầy xước. Tắt nguồn điện trước khi vệ sinh. Tránh để đèn tiếp xúc với nước hoặc môi trường ẩm ướt.',
  decor: 'Lau bề mặt bằng khăn mềm, khô. Tránh va đập mạnh và để ở nơi khô ráo, thoáng mát để giữ độ bền của sản phẩm.',
}
const CARE_DEFAULT = 'Lau bề mặt bằng khăn mềm, khô hoặc hơi ẩm. Tránh đặt ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với ánh nắng gắt trong thời gian dài. Vệ sinh định kỳ để giữ sản phẩm luôn bền đẹp.'

export const getCareInstructions = (product) =>
  CARE_BY_CATEGORY[product.category] || CARE_DEFAULT

// ── Thông tin vận chuyển & đổi trả (chính sách chung) ─────────────
export const DELIVERY_INFO =
  'Giao hàng toàn quốc trong 5–10 ngày làm việc, miễn phí cho đơn hàng từ 5.000.000₫. ' +
  'Đội ngũ vận chuyển và lắp đặt chuyên nghiệp sẽ liên hệ trước để sắp xếp thời gian phù hợp. ' +
  'Hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm còn nguyên vẹn, ' +
  'chưa qua sử dụng và còn đầy đủ bao bì gốc.'

export interface PunjabiSuit {
  id: string;
  name: string;
  code: string;
  pricePerSet: number; // In Indian Rupees (₹)
  regularPrice?: number; // Retail reference price
  pricePerSuit: number; // Wholesale price per individual suit in the bundle
  bundleSize: number; // E.g. 4 suits per pack (4 different colors)
  image: string;
  category: 'Heavy Partywear' | 'Organza & Silk' | 'Handwork & Moti' | 'Boutique Zari' | 'Georgette Special' | 'Printed & Daily Wear';
  fabric: string;
  topFabric: string;
  bottomFabric: string;
  dupattaFabric: string;
  workType: string;
  cutLength: string;
  colors: string[];
  inStock: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  description: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  suit: PunjabiSuit;
  quantitySets: number; // Quantity of 4-suit sets
  selectedColorOption?: string;
}

export interface WholesaleOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  gstAmount: number;
  transportCharges: number;
  totalAmount: number;
  retailer: {
    shopName: string;
    ownerName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    gstNumber?: string;
  };
  transportMethod: string;
  paymentMethod: string;
  status: 'Confirmed' | 'Dispatched from AC Market' | 'Delivered';
}

export type PageView = 'home' | 'shop' | 'cart' | 'about';


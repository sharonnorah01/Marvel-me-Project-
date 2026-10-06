import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, GiftWrappingOption, GIFT_WRAPPING_OPTIONS, PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    wrapping: GiftWrappingOption,
    note: { to: string; from: string; message: string; cardStyle: string },
    delivery: { date: string; timeSlot: string; specialInstructions: string }
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQty: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isQuizOpen: boolean;
  setIsQuizOpen: (open: boolean) => void;
  isConsultationOpen: boolean;
  setIsConsultationOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  activeProductDetail: Product | null;
  setActiveProductDetail: (product: Product | null) => void;
  currentView: 'home' | 'shop' | 'about';
  setCurrentView: (view: 'home' | 'shop' | 'about') => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('marvel_me_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Initial sample item for instant delight
    const defaultProduct = PRODUCTS[0];
    return [
      {
        cartItemId: 'init-cart-1',
        product: defaultProduct,
        quantity: 1,
        wrappingOption: GIFT_WRAPPING_OPTIONS[1], // Gold foil
        personalizedNote: {
          to: 'Eleanor',
          from: 'Arthur',
          message: 'May this bring warmth and tranquil moments to your sanctuary. Thinking of you always.',
          cardStyle: 'gold-gilded',
        },
        deliverySchedule: {
          date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
          timeSlot: 'Afternoon 1pm - 5pm',
          specialInstructions: 'Please ring bell and leave on the covered porch.',
        },
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'about'>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('marvel_me_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (
    product: Product,
    quantity: number,
    wrapping: GiftWrappingOption,
    note: { to: string; from: string; message: string; cardStyle: string },
    delivery: { date: string; timeSlot: string; specialInstructions: string }
  ) => {
    const newItem: CartItem = {
      cartItemId: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      product,
      quantity,
      wrappingOption: wrapping,
      personalizedNote: note,
      deliverySchedule: delivery,
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce((acc, item) => {
    const itemCost = item.product.price + item.wrappingOption.price;
    return acc + itemCost * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        isQuizOpen,
        setIsQuizOpen,
        isConsultationOpen,
        setIsConsultationOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeProductDetail,
        setActiveProductDetail,
        currentView,
        setCurrentView,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        searchQuery,
        setSearchQuery,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

import React from 'react';
import { Header } from './components/Header';
import { AuctionGrid } from './components/AuctionGrid';
import { Auction } from './types';

// Mock data for demonstration
const mockAuctions: Auction[] = [
  {
    id: '1',
    title: 'Vintage Camera Collection',
    description: 'Rare collection of analog cameras from the 1960s',
    currentPrice: 1200,
    startingPrice: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848',
    endTime: new Date(Date.now() + 86400000), // 24 hours from now
    seller: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    bids: [],
  },
  {
    id: '2',
    title: 'Gaming Console Bundle',
    description: 'Latest gaming console with 3 controllers and 5 games',
    currentPrice: 850,
    startingPrice: 800,
    imageUrl: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128',
    endTime: new Date(Date.now() + 172800000), // 48 hours from now
    seller: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    bids: [],
  },
  {
    id: '3',
    title: 'Antique Watch',
    description: 'Luxury timepiece from the 1940s, fully restored',
    currentPrice: 3500,
    startingPrice: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
    endTime: new Date(Date.now() + 43200000), // 12 hours from now
    seller: {
      id: '3',
      name: 'Robert Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    bids: [],
  },
];

function App() {
  const [auctions, setAuctions] = React.useState<Auction[]>(mockAuctions);

  const handleBid = (auctionId: string, amount: number) => {
    setAuctions(prevAuctions =>
      prevAuctions.map(auction =>
        auction.id === auctionId
          ? { ...auction, currentPrice: amount }
          : auction
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Active Auctions</h2>
          <p className="mt-1 text-gray-600">
            Discover unique items and place your bids
          </p>
        </div>
        <AuctionGrid auctions={auctions} onBid={handleBid} />
      </main>
    </div>
  );
}

export default App;
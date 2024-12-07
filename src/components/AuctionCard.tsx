import React from 'react';
import { Clock, DollarSign, User } from 'lucide-react';
import { Auction } from '../types';
import { useCountdown } from '../hooks/useCountdown';
import { formatCurrency } from '../utils/format';

interface AuctionCardProps {
  auction: Auction;
  onBid: (auctionId: string, amount: number) => void;
}

export function AuctionCard({ auction, onBid }: AuctionCardProps) {
  const { timeLeft, isExpired } = useCountdown(auction.endTime);
  const [bidAmount, setBidAmount] = React.useState(auction.currentPrice + 1);

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    onBid(auction.id, bidAmount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={auction.imageUrl} 
        alt={auction.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{auction.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{auction.description}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span className="font-bold text-lg">
            {formatCurrency(auction.currentPrice)}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-blue-600" />
          <span className={`font-medium ${isExpired ? 'text-red-500' : 'text-blue-600'}`}>
            {isExpired ? 'Auction ended' : timeLeft}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <User className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">
            {auction.seller.name}
          </span>
        </div>

        {!isExpired && (
          <form onSubmit={handleBid} className="mt-4">
            <div className="flex gap-2">
              <input
                type="number"
                min={auction.currentPrice + 1}
                value={bidAmount}
                onChange={(e) => setBidAmount(Number(e.target.value))}
                className="flex-1 px-3 py-2 border rounded-lg"
                placeholder="Enter bid amount"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Place Bid
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
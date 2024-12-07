import React from 'react';
import { Auction } from '../types';
import { AuctionCard } from './AuctionCard';

interface AuctionGridProps {
  auctions: Auction[];
  onBid: (auctionId: string, amount: number) => void;
}

export function AuctionGrid({ auctions, onBid }: AuctionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <AuctionCard
          key={auction.id}
          auction={auction}
          onBid={onBid}
        />
      ))}
    </div>
  );
}
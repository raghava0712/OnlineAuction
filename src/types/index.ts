export interface Auction {
  id: string;
  title: string;
  description: string;
  currentPrice: number;
  startingPrice: number;
  imageUrl: string;
  endTime: Date;
  seller: User;
  bids: Bid[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Bid {
  id: string;
  amount: number;
  timestamp: Date;
  bidder: User;
}
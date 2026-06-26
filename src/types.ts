export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  title: string;
  message: string;
  agreed: boolean;
  createdAt: string;
  status: 'pending' | 'reviewing' | 'completed';
}

export interface PortfolioItem {
  id: string;
  category: 'national' | 'labor' | 'regional' | 'private';
  title: string;
  details: string[];
  tags: string[];
}

export type ThemeMode = 'dark' | 'light';

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  accentColor: 'green' | 'gold' | 'red' | 'blue';
  popular?: boolean;
  features: string[];
  idealFor: string;
  deliveryTime: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
  growthMetric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'timeline' | 'payments' | 'design' | 'support';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  accentColor: 'green' | 'gold' | 'red' | 'blue';
}

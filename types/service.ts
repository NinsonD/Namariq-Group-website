export interface Service {
  id: number;
  title: string;
  summary: string;
  icon: string;
  slug?: string;
  features?: string[];
}
import type { WorkItem } from '@/types';
import { getFeaturedPortfolio, getPortfolioWorks } from './portfolio';

export const getCombinedWorks = (): WorkItem[] => getPortfolioWorks();

export const getFeaturedWorksForHomepage = (): WorkItem[] =>
  getFeaturedPortfolio();

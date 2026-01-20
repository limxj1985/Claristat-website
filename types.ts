
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ResearchInsight {
  query: string;
  answer: string;
  sources: GroundingSource[];
  timestamp: Date;
}

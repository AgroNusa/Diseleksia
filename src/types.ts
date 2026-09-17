export interface SectionItem {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  keyPoints: string[];
  explanation: string;
  analogyOrQuote?: string;
  badge: string;
}

export interface PhonologicalSkill {
  name: string;
  description: string;
  example: string;
  tag: string;
}

export interface ReadingStep {
  step: number;
  title: string;
  detail: string;
  iconName: string;
}

export interface ComparisonRow {
  activity: string;
  typical: string;
  dyslexia: string;
}

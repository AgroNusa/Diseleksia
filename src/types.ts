export interface AgeStage {
  ageGroup: string;
  stageTitle: string;
  summary: string;
  signs: string[];
  psychologicalImpact: string;
  keyRiskOrAlert?: string;
  badgeColor: string;
}

export interface ClinicalClassification {
  type: string;
  condition: string;
  description: string;
  signs: string[];
}

export interface VideoTopic {
  id: 'memahami-disleksia' | 'otak-anak-disleksia';
  title: string;
  subtitle: string;
  tag: string;
}

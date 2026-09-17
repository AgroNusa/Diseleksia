// Types for Compiled Video Series: Video 2, 3, 4, 5 (Edukasi Medika Teknologi)

export type VideoModuleId = 'all' | 'video2' | 'video3' | 'video4' | 'video5';

export interface VideoModuleMeta {
  id: VideoModuleId;
  videoNumber: number;
  title: string;
  subtitle: string;
  themeColor: string;
  badge: string;
  summary: string;
}

// VIDEO 2 TYPES
export interface AgeProgressionStage {
  ageGroup: string;
  title: string;
  coreSymptoms: string[];
  psychologicalRisk: string;
  dangerFlag?: string;
}

export interface DyslexiaTriadItem {
  id: string;
  name: string;
  latinName: string;
  definition: string;
  manifestations: string[];
  color: string;
}

export interface SlowReaderComparison {
  aspect: string;
  slowReader: string;
  dyslexia: string;
}

// VIDEO 3 TYPES
export interface ExecutiveFunctionPillar {
  title: string;
  analogy: string;
  description: string;
  classroomImpact: string;
}

export interface WritingOrchestraInstrument {
  number: number;
  name: string;
  function: string;
  dysgraphiaGlitch: string;
}

export interface FailureLoopStep {
  step: number;
  title: string;
  experience: string;
  psychologicalToll: string;
}

export interface HiddenStrength {
  name: string;
  tagline: string;
  description: string;
  realWorldField: string;
}

// VIDEO 4 TYPES
export interface RioSpiralStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface PreschoolSign {
  id: string;
  title: string;
  example: string;
  iconType: string;
}

export interface RedFlag {
  number: number;
  title: string;
  description: string;
  dangerLevel: string;
}

export interface ObservationRoleItem {
  parentPoint: string;
  teacherPoint: string;
  professionalPoint: string;
}

export interface ActionCycleStep {
  step: number;
  title: string;
  description: string;
  deliverable: string;
}

// VIDEO 5 TYPES
export interface IEPPrinciple {
  step: number;
  component: string;
  description: string;
  exampleInSchool: string;
}

export interface ClassroomAccommodation {
  category: string;
  icon: string;
  title: string;
  problemSolved: string;
  concreteStrategy: string;
}

export interface VAKTMensensoryMethod {
  modality: string;
  title: string;
  sensesUsed: string;
  classroomApplication: string;
  homeApplication: string;
}

export interface HomeStrategy {
  rule: string;
  title: string;
  doThis: string;
  avoidThis: string;
}

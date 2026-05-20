// ─────────────────────────────────────────────
//  data/projects.ts
//  Typed data layer for the ProjectGallery
// ─────────────────────────────────────────────

export type ProjectStatus =
  | 'Ongoing'
  | 'Published'
  | 'Submitted'
  | 'Completed'
  | 'Awarded';

export type ProjectArea =
  | 'NLP'
  | 'Cognitive Science'
  | 'Machine Learning'
  | 'Computational Linguistics'
  | 'Human-Computer Interaction';

export interface Student {
  name: string;
  /** e.g. "PhD", "MS", "Undergrad" */
  level: 'PhD' | 'MS' | 'Undergrad' | 'Postdoc';
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  students: Student[];
  status: ProjectStatus;
  area: ProjectArea;
  /** ISO date string: when the project started */
  startedAt: string;
  /** Optional link to paper, repo, or project page */
  link?: string;
  /** Optional venue if Published / Submitted */
  venue?: string;
}

// ─────────────────────────────────────────────
//  Data
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'Probing Semantic Geometry in Transformer Encoders',
    shortDescription:
      'Investigating how contextual embeddings organize semantic similarity and how this diverges from human conceptual structure.',
    students: [
      { name: 'Maya Okafor', level: 'PhD' },
      { name: 'James Richter', level: 'PhD' },
    ],
    status: 'Published',
    area: 'NLP',
    startedAt: '2022-09-01',
    venue: 'ACL 2024',
    link: '#',
  },
  {
    id: 'proj-002',
    title: 'Emergent Communication in Multi-Agent Reinforcement Learning',
    shortDescription:
      'Studying the structural properties of proto-languages that arise when agents learn to cooperate in grounded environments.',
    students: [
      { name: 'Priya Nair', level: 'PhD' },
      { name: 'Samuel Torres', level: 'MS' },
    ],
    status: 'Ongoing',
    area: 'Computational Linguistics',
    startedAt: '2023-02-15',
  },
  {
    id: 'proj-003',
    title: 'Cognitive Load Estimation via Eye-Tracking & LLM Transcripts',
    shortDescription:
      'Cross-modal analysis correlating gaze patterns during reading with attention head activations in language models.',
    students: [
      { name: 'Felix Berger', level: 'PhD' },
      { name: 'Amara Diallo', level: 'Undergrad' },
    ],
    status: 'Submitted',
    area: 'Cognitive Science',
    startedAt: '2023-09-01',
    venue: 'NeurIPS 2024 (under review)',
  },
  {
    id: 'proj-004',
    title: 'Syntactic Universals Encoded in Massively Multilingual Models',
    shortDescription:
      'Examining whether cross-lingual representations implicitly learn typological universals from the World Atlas of Language Structures.',
    students: [
      { name: 'Yuki Tanaka', level: 'PhD' },
    ],
    status: 'Ongoing',
    area: 'Computational Linguistics',
    startedAt: '2024-01-10',
    link: '#',
  },
  {
    id: 'proj-005',
    title: 'Annotation Calibration for Low-Resource Semantic Role Labeling',
    shortDescription:
      'Developing Bayesian crowd-sourcing models to reconcile annotator disagreement in languages with fewer than 100k training tokens.',
    students: [
      { name: 'Chiara Esposito', level: 'Postdoc' },
      { name: 'Rafael Kim', level: 'MS' },
    ],
    status: 'Completed',
    area: 'NLP',
    startedAt: '2022-03-01',
  },
  {
    id: 'proj-006',
    title: 'Best Paper: Adaptive Curriculum for Grammar Induction',
    shortDescription:
      'A self-paced training regime that schedules linguistic complexity to match model capacity, yielding stronger parse performance.',
    students: [
      { name: 'Nadia Volkov', level: 'PhD' },
      { name: 'Leon Martínez', level: 'PhD' },
    ],
    status: 'Awarded',
    area: 'Machine Learning',
    startedAt: '2021-09-01',
    venue: 'EMNLP 2023 — Best Paper',
    link: '#',
  },
];
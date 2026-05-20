// ─────────────────────────────────────────────────────────────────
//  data/publications.ts
//  All publications for Dr. Bhaskar Ghosh
//  Sources: ATU faculty profile + resume
//  DOI links included where available — add Google Scholar / IEEE
//  links for the remaining entries by clicking each paper in Scholar.
// ─────────────────────────────────────────────────────────────────

export type PubRole = 'First Author' | 'Co-Author';
export type PubArea = 'AI & Machine Learning' | 'Cybersecurity' | 'Computer Vision' | 'IoT' | 'HCI';

export interface Publication {
  id:      string;
  year:    string;
  title:   string;
  authors: string;       // full author string as it appears in citation
  venue:   string;       // conference / journal name
  role:    PubRole;
  area:    PubArea;
  doi?:    string;       // e.g. '10.1109/CCWC60891.2024.10427620'
  href?:   string;       // full URL — fill in from Scholar or IEEE Xplore
  award?:  string;       // e.g. 'Best Paper Award'
}

export const publications: Publication[] = [

  // ── 2024 ────────────────────────────────────────────────────────
  {
    id:      'pub-2024-01',
    year:    '2024',
    title:   'PyroScan: Wildfire Behavior Prediction System using Unmanned Aerial Vehicles (UAV)',
    authors: 'D. Thompson, P. Padgett, T. C. Johnson and B. Ghosh',
    venue:   'IEEE World AI IoT Congress (AIIoT), Seattle, WA',
    role:    'Co-Author',
    area:    'Computer Vision',
    doi:     '10.1109/AIIoT61789.2024.10578978',
    href:    'https://doi.org/10.1109/AIIoT61789.2024.10578978',
  },
  {
    id:      'pub-2024-02',
    year:    '2024',
    title:   'Techniques to Detect Fake Profiles on Social Media Using the New Age Algorithms — A Survey',
    authors: 'A. K. M. Rubaiyat Reza Habib, E. Elijah Akpan, B. Ghosh and I. K. Dutta',
    venue:   'IEEE 14th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, NV',
    role:    'Co-Author',
    area:    'AI & Machine Learning',
    doi:     '10.1109/CCWC60891.2024.10427620',
    href:    'https://doi.org/10.1109/CCWC60891.2024.10427620',
  },

  // ── 2021 ────────────────────────────────────────────────────────
  {
    id:      'pub-2021-01',
    year:    '2021',
    title:   'Key Space Reduction Using Isomorphs',
    authors: 'A. H. Carlson, B. Ghosh, I. K. Dutta, S. Khare, and M. Totaro',
    venue:   'IEEE 12th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)',
    role:    'Co-Author',
    area:    'Cybersecurity',
    award:   'Best Paper Award',
    href:    '#', // ← replace with IEEE Xplore link
  },
  {
    id:      'pub-2021-02',
    year:    '2021',
    title:   'Isomorphic Cipher Reduction',
    authors: 'B. Ghosh, I. K. Dutta, S. Khare, A. H. Carlson, and M. Totaro',
    venue:   'IEEE 12th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)',
    role:    'First Author',
    area:    'Cybersecurity',
    href:    '#',
  },
  {
    id:      'pub-2021-03',
    year:    '2021',
    title:   'Modeling Polymorphic Ciphers',
    authors: 'A. H. Carlson, B. Ghosh, I. K. Dutta, S. Khare, and M. Totaro',
    venue:   'IEEE 4th International Symposium on Future Cyber Security Technologies (FCST 2021)',
    role:    'Co-Author',
    area:    'Cybersecurity',
    href:    '#',
  },
  {
    id:      'pub-2021-04',
    year:    '2021',
    title:   'Evaluating True Cryptographic Key Space Size',
    authors: 'A. H. Carlson, G. Gang, T. Gang, B. Ghosh, and I. K. Dutta',
    venue:   'IEEE 12th Annual Ubiquitous Computing, Electronics and Mobile Communication Conference (UEMCON)',
    role:    'Co-Author',
    area:    'Cybersecurity',
    href:    '#',
  },
  {
    id:      'pub-2021-05',
    year:    '2021',
    title:   'Space Selection and Abstraction in Set Theoretic Estimation',
    authors: 'S. Khare, B. Ghosh, I. K. Dutta, A. H. Carlson, and M. Totaro',
    venue:   'Public Key Cryptography 2021',
    role:    'Co-Author',
    area:    'Cybersecurity',
    href:    '#',
  },

  // ── 2020 ────────────────────────────────────────────────────────
  {
    id:      'pub-2020-01',
    year:    '2020',
    title:   'A Survey on the Progression and Performance of Generative Adversarial Networks',
    authors: 'B. Ghosh, I. K. Dutta, M. Totaro, and M. Bayoumi',
    venue:   'IEEE 11th International Conference on Computing, Communication and Networking Technologies (ICCCNT)',
    role:    'First Author',
    area:    'AI & Machine Learning',
    href:    '#',
  },
  {
    id:      'pub-2020-02',
    year:    '2020',
    title:   'Mathematical Modeling and Prediction of Neural Network Training based on RC Circuits',
    authors: 'B. Ghosh, I. K. Dutta, A. H. Carlson, and M. Totaro',
    venue:   'IEEE International Symposium on Networks, Computers and Communications (ISNCC)',
    role:    'First Author',
    area:    'AI & Machine Learning',
    href:    '#',
  },
  {
    id:      'pub-2020-03',
    year:    '2020',
    title:   'An Empirical Analysis of Generative Adversarial Network Training Times with Varying Batch Sizes',
    authors: 'B. Ghosh, I. K. Dutta, A. H. Carlson, and M. Totaro',
    venue:   'IEEE 11th Annual Ubiquitous Computing, Electronics and Mobile Communication Conference (UEMCON)',
    role:    'First Author',
    area:    'AI & Machine Learning',
    href:    '#',
  },
  {
    id:      'pub-2020-04',
    year:    '2020',
    title:   'Generative Adversarial Networks in Security: A Survey',
    authors: 'I. K. Dutta, B. Ghosh, A. H. Carlson, and M. Bayoumi',
    venue:   'IEEE 11th Annual Ubiquitous Computing, Electronics and Mobile Communication Conference (UEMCON)',
    role:    'Co-Author',
    area:    'AI & Machine Learning',
    href:    '#',
  },
  {
    id:      'pub-2020-05',
    year:    '2020',
    title:   'Lightweight Polymorphic Encryption for the Data Associated with Constrained Internet of Things Devices',
    authors: 'I. K. Dutta, B. Ghosh, A. H. Carlson, and M. Bayoumi',
    venue:   'IEEE 6th World Forum on Internet of Things (WF-IoT)',
    role:    'Co-Author',
    area:    'IoT',
    href:    '#',
  },

  // ── 2019 ────────────────────────────────────────────────────────
  {
    id:      'pub-2019-01',
    year:    '2019',
    title:   'Lightweight Cryptography for Internet of Insecure Things: A Survey',
    authors: 'I. K. Dutta, B. Ghosh, and M. Bayoumi',
    venue:   'IEEE 8th Annual Computing and Communication Workshop and Conference (CCWC)',
    role:    'Co-Author',
    area:    'IoT',
    href:    '#',
  },
];

// ── Helpers ──────────────────────────────────────────────────────

/** Publications where Bhaskar is first author */
export const firstAuthorPubs = publications.filter(p => p.role === 'First Author');

/** Most recent N publications */
export const recentPubs = (n: number) =>
  [...publications].sort((a, b) => Number(b.year) - Number(a.year)).slice(0, n);

/** Filter by research area */
export const pubsByArea = (area: PubArea) =>
  publications.filter(p => p.area === area);

/** Awards */
export const awardedPubs = publications.filter(p => p.award);
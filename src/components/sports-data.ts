// Mock data for sports leagues application

export interface League {
  id: string;
  name: string;
  country: string;
  isInternational: boolean;
  tier: number;
  teams: number;
  gender: 'male' | 'female' | 'mixed';
}

export interface Sport {
  id: string;
  name: string;
  icon: string;
  imageUrl: string;
  color: string;
}

export interface Team {
  id: string;
  name: string;
  country: string;
  league: string;
  gender: 'male' | 'female' | 'mixed';
  founded?: number;
}

export interface Player {
  id: string;
  name: string;
  country: string;
  team: string;
  position: string;
  gender: 'male' | 'female';
  age?: number;
}

export const sports: Sport[] = [
  {
    id: 'soccer',
    name: 'Soccer',
    icon: 'Dribbble',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MzMxMDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#10b981' // emerald-500
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: 'Circle',
    imageUrl: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzYzMzMyNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#f97316' // orange-500
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: 'Disc',
    imageUrl: 'https://images.unsplash.com/photo-1448743133657-f67644da3008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3NjMzMjE1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#eab308' // yellow-500
  },
  {
    id: 'cricket',
    name: 'Cricket',
    icon: 'Target',
    imageUrl: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2h8ZW58MXx8fHwxNzYzMzUzNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#3b82f6' // blue-500
  },
  {
    id: 'rugby',
    name: 'Rugby',
    icon: 'Hexagon',
    imageUrl: 'https://images.unsplash.com/photo-1613330524291-3330afe5920e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdieSUyMGdhbWV8ZW58MXx8fHwxNzYzMzc2NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#8b5cf6' // violet-500
  },
  {
    id: 'athletics',
    name: 'Athletics',
    icon: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1457470572216-1240fac24b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpY3MlMjB0cmFja3xlbnwxfHx8fDE3NjMzNzY1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#ef4444' // red-500
  },
  {
    id: 'padel',
    name: 'Padel',
    icon: 'Square',
    imageUrl: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pc3xlbnwxfHx8fDE3NjMzNzY1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#06b6d4' // cyan-500
  }
];

export const countries = [
  'All Countries',
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Brazil',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Croatia',
  'Czech Republic',
  'Denmark',
  'Egypt',
  'England',
  'France',
  'Germany',
  'Greece',
  'India',
  'Indonesia',
  'Ireland',
  'Italy',
  'Japan',
  'Kenya',
  'Mexico',
  'Morocco',
  'Netherlands',
  'New Zealand',
  'Nigeria',
  'Norway',
  'Pakistan',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Scotland',
  'Serbia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sweden',
  'Switzerland',
  'Thailand',
  'Turkey',
  'Ukraine',
  'United States',
  'Uruguay',
  'Wales'
];

export const leagues: Record<string, League[]> = {
  soccer: [
    // International - Male
    { id: 's1', name: 'FIFA World Cup', country: 'International', isInternational: true, tier: 1, teams: 32, gender: 'male' },
    { id: 's1f', name: 'FIFA Women\'s World Cup', country: 'International', isInternational: true, tier: 1, teams: 32, gender: 'female' },
    { id: 's2', name: 'UEFA Champions League', country: 'International', isInternational: true, tier: 1, teams: 32, gender: 'male' },
    { id: 's2f', name: 'UEFA Women\'s Champions League', country: 'International', isInternational: true, tier: 1, teams: 16, gender: 'female' },
    { id: 's3', name: 'UEFA Europa League', country: 'International', isInternational: true, tier: 2, teams: 48, gender: 'male' },
    { id: 's4', name: 'Copa Libertadores', country: 'International', isInternational: true, tier: 1, teams: 47, gender: 'male' },
    { id: 's5', name: 'AFC Champions League', country: 'International', isInternational: true, tier: 1, teams: 40, gender: 'male' },
    // Local Leagues - Male
    { id: 's6', name: 'Premier League', country: 'England', isInternational: false, tier: 1, teams: 20, gender: 'male' },
    { id: 's6f', name: 'Women\'s Super League', country: 'England', isInternational: false, tier: 1, teams: 12, gender: 'female' },
    { id: 's7', name: 'La Liga', country: 'Spain', isInternational: false, tier: 1, teams: 20, gender: 'male' },
    { id: 's7f', name: 'Liga F', country: 'Spain', isInternational: false, tier: 1, teams: 16, gender: 'female' },
    { id: 's8', name: 'Serie A', country: 'Italy', isInternational: false, tier: 1, teams: 20, gender: 'male' },
    { id: 's8f', name: 'Serie A Femminile', country: 'Italy', isInternational: false, tier: 1, teams: 10, gender: 'female' },
    { id: 's9', name: 'Bundesliga', country: 'Germany', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 's9f', name: 'Frauen-Bundesliga', country: 'Germany', isInternational: false, tier: 1, teams: 12, gender: 'female' },
    { id: 's10', name: 'Ligue 1', country: 'France', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 's10f', name: 'Division 1 Féminine', country: 'France', isInternational: false, tier: 1, teams: 12, gender: 'female' },
    { id: 's11', name: 'MLS', country: 'United States', isInternational: false, tier: 1, teams: 29, gender: 'male' },
    { id: 's11f', name: 'NWSL', country: 'United States', isInternational: false, tier: 1, teams: 14, gender: 'female' },
    { id: 's12', name: 'Brasileirão', country: 'Brazil', isInternational: false, tier: 1, teams: 20, gender: 'male' },
    { id: 's13', name: 'Liga MX', country: 'Mexico', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 's14', name: 'Eredivisie', country: 'Netherlands', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 's15', name: 'Primeira Liga', country: 'Portugal', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 's16', name: 'Scottish Premiership', country: 'Scotland', isInternational: false, tier: 1, teams: 12, gender: 'male' },
    { id: 's17', name: 'Belgian Pro League', country: 'Belgium', isInternational: false, tier: 1, teams: 16, gender: 'male' },
    { id: 's18', name: 'Super Lig', country: 'Turkey', isInternational: false, tier: 1, teams: 19, gender: 'male' },
    { id: 's19', name: 'Russian Premier League', country: 'Russia', isInternational: false, tier: 1, teams: 16, gender: 'male' },
    { id: 's20', name: 'J1 League', country: 'Japan', isInternational: false, tier: 1, teams: 18, gender: 'male' },
  ],
  basketball: [
    // International
    { id: 'b1', name: 'FIBA World Cup', country: 'International', isInternational: true, tier: 1, teams: 32, gender: 'male' },
    { id: 'b1f', name: 'FIBA Women\'s World Cup', country: 'International', isInternational: true, tier: 1, teams: 16, gender: 'female' },
    { id: 'b2', name: 'EuroLeague', country: 'International', isInternational: true, tier: 1, teams: 18, gender: 'male' },
    { id: 'b2f', name: 'EuroLeague Women', country: 'International', isInternational: true, tier: 1, teams: 16, gender: 'female' },
    { id: 'b3', name: 'EuroCup', country: 'International', isInternational: true, tier: 2, teams: 20, gender: 'male' },
    { id: 'b4', name: 'Basketball Champions League', country: 'International', isInternational: true, tier: 2, teams: 32, gender: 'male' },
    // Local Leagues
    { id: 'b5', name: 'NBA', country: 'United States', isInternational: false, tier: 1, teams: 30, gender: 'male' },
    { id: 'b5f', name: 'WNBA', country: 'United States', isInternational: false, tier: 1, teams: 12, gender: 'female' },
    { id: 'b6', name: 'Liga ACB', country: 'Spain', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 'b7', name: 'Lega Basket Serie A', country: 'Italy', isInternational: false, tier: 1, teams: 16, gender: 'male' },
    { id: 'b8', name: 'Basketball Bundesliga', country: 'Germany', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 'b9', name: 'LNB Pro A', country: 'France', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 'b10', name: 'Greek Basket League', country: 'Greece', isInternational: false, tier: 1, teams: 14, gender: 'male' },
    { id: 'b11', name: 'Turkish Basketball Super League', country: 'Turkey', isInternational: false, tier: 1, teams: 16, gender: 'male' },
    { id: 'b12', name: 'VTB United League', country: 'Russia', isInternational: false, tier: 1, teams: 13, gender: 'male' },
    { id: 'b13', name: 'NBL', country: 'Australia', isInternational: false, tier: 1, teams: 10, gender: 'male' },
    { id: 'b13f', name: 'WNBL', country: 'Australia', isInternational: false, tier: 1, teams: 8, gender: 'female' },
    { id: 'b14', name: 'CBA', country: 'China', isInternational: false, tier: 1, teams: 20, gender: 'male' },
  ],
  tennis: [
    // International
    { id: 't1', name: 'ATP Tour', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'male' },
    { id: 't2', name: 'WTA Tour', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'female' },
    { id: 't3', name: 'Grand Slam Tournaments', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 't4', name: 'Davis Cup', country: 'International', isInternational: true, tier: 1, teams: 142, gender: 'male' },
    { id: 't5', name: 'Billie Jean King Cup', country: 'International', isInternational: true, tier: 1, teams: 116, gender: 'female' },
    { id: 't6', name: 'ATP Cup', country: 'International', isInternational: true, tier: 2, teams: 24, gender: 'male' },
    { id: 't7', name: 'Laver Cup', country: 'International', isInternational: true, tier: 2, teams: 12, gender: 'mixed' },
    // Local
    { id: 't8', name: 'Australian Open', country: 'Australia', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 't9', name: 'French Open', country: 'France', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 't10', name: 'Wimbledon', country: 'England', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 't11', name: 'US Open', country: 'United States', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
  ],
  cricket: [
    // International
    { id: 'c1', name: 'ICC Cricket World Cup', country: 'International', isInternational: true, tier: 1, teams: 10, gender: 'male' },
    { id: 'c1f', name: 'ICC Women\'s Cricket World Cup', country: 'International', isInternational: true, tier: 1, teams: 10, gender: 'female' },
    { id: 'c2', name: 'ICC T20 World Cup', country: 'International', isInternational: true, tier: 1, teams: 16, gender: 'male' },
    { id: 'c2f', name: 'ICC Women\'s T20 World Cup', country: 'International', isInternational: true, tier: 1, teams: 10, gender: 'female' },
    { id: 'c3', name: 'ICC Champions Trophy', country: 'International', isInternational: true, tier: 1, teams: 8, gender: 'male' },
    { id: 'c4', name: 'The Ashes', country: 'International', isInternational: true, tier: 1, teams: 2, gender: 'male' },
    { id: 'c4f', name: 'Women\'s Ashes', country: 'International', isInternational: true, tier: 1, teams: 2, gender: 'female' },
    // Local Leagues
    { id: 'c5', name: 'Indian Premier League', country: 'India', isInternational: false, tier: 1, teams: 10, gender: 'male' },
    { id: 'c5f', name: 'Women\'s Premier League', country: 'India', isInternational: false, tier: 1, teams: 5, gender: 'female' },
    { id: 'c6', name: 'Big Bash League', country: 'Australia', isInternational: false, tier: 1, teams: 8, gender: 'male' },
    { id: 'c6f', name: 'Women\'s Big Bash League', country: 'Australia', isInternational: false, tier: 1, teams: 8, gender: 'female' },
    { id: 'c7', name: 'Pakistan Super League', country: 'Pakistan', isInternational: false, tier: 1, teams: 6, gender: 'male' },
    { id: 'c8', name: 'Caribbean Premier League', country: 'International', isInternational: false, tier: 1, teams: 6, gender: 'male' },
    { id: 'c9', name: 'The Hundred', country: 'England', isInternational: false, tier: 1, teams: 8, gender: 'mixed' },
    { id: 'c10', name: 'County Championship', country: 'England', isInternational: false, tier: 1, teams: 18, gender: 'male' },
    { id: 'c11', name: 'Sheffield Shield', country: 'Australia', isInternational: false, tier: 1, teams: 6, gender: 'male' },
    { id: 'c12', name: 'Ranji Trophy', country: 'India', isInternational: false, tier: 1, teams: 38, gender: 'male' },
    { id: 'c13', name: 'Plunket Shield', country: 'New Zealand', isInternational: false, tier: 1, teams: 6, gender: 'male' },
    { id: 'c14', name: 'CSA T20 League', country: 'South Africa', isInternational: false, tier: 1, teams: 6, gender: 'male' },
  ],
  rugby: [
    // International
    { id: 'r1', name: 'Rugby World Cup', country: 'International', isInternational: true, tier: 1, teams: 20, gender: 'male' },
    { id: 'r1f', name: 'Women\'s Rugby World Cup', country: 'International', isInternational: true, tier: 1, teams: 12, gender: 'female' },
    { id: 'r2', name: 'Six Nations Championship', country: 'International', isInternational: true, tier: 1, teams: 6, gender: 'male' },
    { id: 'r2f', name: 'Women\'s Six Nations', country: 'International', isInternational: true, tier: 1, teams: 6, gender: 'female' },
    { id: 'r3', name: 'The Rugby Championship', country: 'International', isInternational: true, tier: 1, teams: 4, gender: 'male' },
    { id: 'r4', name: 'European Rugby Champions Cup', country: 'International', isInternational: true, tier: 1, teams: 24, gender: 'male' },
    { id: 'r5', name: 'Rugby World Cup Sevens', country: 'International', isInternational: true, tier: 2, teams: 24, gender: 'mixed' },
    // Local Leagues
    { id: 'r6', name: 'Premiership Rugby', country: 'England', isInternational: false, tier: 1, teams: 10, gender: 'male' },
    { id: 'r6f', name: 'Premier 15s', country: 'England', isInternational: false, tier: 1, teams: 10, gender: 'female' },
    { id: 'r7', name: 'Top 14', country: 'France', isInternational: false, tier: 1, teams: 14, gender: 'male' },
    { id: 'r8', name: 'United Rugby Championship', country: 'International', isInternational: false, tier: 1, teams: 16, gender: 'male' },
    { id: 'r9', name: 'Super Rugby Pacific', country: 'International', isInternational: false, tier: 1, teams: 12, gender: 'male' },
    { id: 'r10', name: 'Currie Cup', country: 'South Africa', isInternational: false, tier: 1, teams: 14, gender: 'male' },
    { id: 'r11', name: 'National Rugby Championship', country: 'Australia', isInternational: false, tier: 2, teams: 9, gender: 'male' },
    { id: 'r12', name: 'Mitre 10 Cup', country: 'New Zealand', isInternational: false, tier: 1, teams: 14, gender: 'male' },
  ],
  athletics: [
    // International
    { id: 'a1', name: 'World Athletics Championships', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a2', name: 'Diamond League', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a3', name: 'World Athletics Indoor Championships', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a4', name: 'World Athletics Cross Country Championships', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a5', name: 'World Marathon Majors', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a6', name: 'Continental Cup', country: 'International', isInternational: true, tier: 2, teams: 0, gender: 'mixed' },
    // Local
    { id: 'a7', name: 'Boston Marathon', country: 'United States', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a8', name: 'London Marathon', country: 'England', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a9', name: 'Berlin Marathon', country: 'Germany', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a10', name: 'Tokyo Marathon', country: 'Japan', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a11', name: 'Chicago Marathon', country: 'United States', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'a12', name: 'New York City Marathon', country: 'United States', isInternational: false, tier: 1, teams: 0, gender: 'mixed' },
  ],
  padel: [
    // International
    { id: 'p1', name: 'World Padel Tour', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'p2', name: 'Premier Padel', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'p3', name: 'Padel World Championships', country: 'International', isInternational: true, tier: 1, teams: 0, gender: 'mixed' },
    { id: 'p4', name: 'European Padel Championship', country: 'International', isInternational: true, tier: 2, teams: 0, gender: 'mixed' },
    // Local
    { id: 'p5', name: 'Liga Nacional de Padel', country: 'Spain', isInternational: false, tier: 1, teams: 16, gender: 'male' },
    { id: 'p5f', name: 'Liga Nacional de Padel Femenino', country: 'Spain', isInternational: false, tier: 1, teams: 12, gender: 'female' },
    { id: 'p6', name: 'Campeonato Argentino de Padel', country: 'Argentina', isInternational: false, tier: 1, teams: 12, gender: 'male' },
    { id: 'p7', name: 'Padel Pro Tour Italy', country: 'Italy', isInternational: false, tier: 2, teams: 8, gender: 'mixed' },
    { id: 'p8', name: 'France Padel Championship', country: 'France', isInternational: false, tier: 2, teams: 10, gender: 'mixed' },
    { id: 'p9', name: 'Portugal Padel Tour', country: 'Portugal', isInternational: false, tier: 2, teams: 8, gender: 'mixed' },
    { id: 'p10', name: 'Mexico Padel Open', country: 'Mexico', isInternational: false, tier: 2, teams: 12, gender: 'mixed' },
  ]
};

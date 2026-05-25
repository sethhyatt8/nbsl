export type RankingEntry = {
  teamId: string
  comment?: string
}

export const lastYearFinishRanking: RankingEntry[] = [
  { teamId: 'crestview' },
  { teamId: 'graylyn-crest' },
  { teamId: 'silverside' },
  { teamId: 'fair-blue' },
  { teamId: 'lane' },
]

export const mostUsefulWebsiteRanking: RankingEntry[] = [
  {
    teamId: 'silverside',
    comment: 'Best layout, accurate schedule, swim team prominence.',
  },
  {
    teamId: 'fair-blue',
    comment: 'Accurate schedule, swim team prominence.',
  },
  {
    teamId: 'graylyn-crest',
    comment: 'No schedule, swim team prominence.',
  },
  {
    teamId: 'crestview',
    comment: "If they have a swim team, I wouldn't know.",
  },
  {
    teamId: 'lane',
    comment: 'Could be good but webmaster must have quit during 2025 season.',
  },
]

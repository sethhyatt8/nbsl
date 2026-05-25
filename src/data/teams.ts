export type RedDivisionTeam = {
  id: string
  name: string
  mascot: string
  /** Simple mascot mark until real logos are added */
  glyph: string
  primary: string
  accent: string
  siteUrl?: string
}

export const redDivisionTeams: RedDivisionTeam[] = [
  {
    id: 'fair-blue',
    name: 'Fair Blue',
    mascot: 'Flying Fish',
    glyph: '🐟',
    primary: '#1565c0',
    accent: '#90caf9',
    siteUrl: 'https://swimteam.fairblueswimclub.com/',
  },
  {
    id: 'graylyn-crest',
    name: 'Graylyn Crest',
    mascot: 'Gators',
    glyph: '🐊',
    primary: '#2e7d32',
    accent: '#a5d6a7',
    siteUrl: 'https://graylyncrestswimclub.membershiptoolkit.com/',
  },
  {
    id: 'silverside',
    name: 'Silverside',
    mascot: 'Swordfish',
    glyph: '🐡',
    primary: '#6a1b9a',
    accent: '#ce93d8',
    siteUrl: 'https://silversideswimclub.com/swim-team/',
  },
  {
    id: 'lane',
    name: 'Lane',
    mascot: 'Lightning',
    glyph: '⚡',
    primary: '#f57f17',
    accent: '#fff59d',
    siteUrl: 'https://www.gomotionapp.com/team/reclsc/page/swim-team/swim-team-information',
  },
  {
    id: 'crestview',
    name: 'Crestview',
    mascot: 'Rays',
    glyph: '🌊',
    primary: '#c62828',
    accent: '#ef9a9a',
    siteUrl: 'https://sites.google.com/view/crestviewswimclub/swim-team',
  },
]

export function getTeam(id: string): RedDivisionTeam | undefined {
  return redDivisionTeams.find((t) => t.id === id)
}

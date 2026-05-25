import type { CSSProperties } from 'react'
import type { RedDivisionTeam } from '../data/teams'
import './TeamBadge.css'

type TeamBadgeProps = {
  team: RedDivisionTeam
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
}

export function TeamBadge({ team, size = 'md', showName = true }: TeamBadgeProps) {
  return (
    <div
      className={`team-badge team-badge--${size}`}
      style={
        {
          '--team-primary': team.primary,
          '--team-accent': team.accent,
        } as CSSProperties
      }
    >
      <span className="team-badge__glyph" aria-hidden>
        {team.glyph}
      </span>
      {showName && (
        <div className="team-badge__text">
          <span className="team-badge__name">{team.name}</span>
          <span className="team-badge__mascot">{team.mascot}</span>
        </div>
      )}
    </div>
  )
}

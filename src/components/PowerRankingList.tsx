import { getTeam } from '../data/teams'
import { TeamBadge } from './TeamBadge'
import './PowerRankingList.css'

type PowerRankingListProps = {
  title: string
  teamIds: readonly string[]
}

export function PowerRankingList({ title, teamIds }: PowerRankingListProps) {
  return (
    <div className="power-ranking">
      <h3 className="power-ranking__title">{title}</h3>
      <ol className="power-ranking__list">
        {teamIds.map((id, index) => {
          const team = getTeam(id)
          if (!team) return null
          return (
            <li key={id} className="power-ranking__row">
              <span className="power-ranking__rank">{index + 1}</span>
              <TeamBadge team={team} size="sm" />
            </li>
          )
        })}
      </ol>
    </div>
  )
}

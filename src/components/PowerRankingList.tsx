import type { RankingEntry } from '../data/rankings'
import { getTeam } from '../data/teams'
import { TeamBadge } from './TeamBadge'
import './PowerRankingList.css'

type PowerRankingListProps = {
  title: string
  entries: readonly RankingEntry[]
}

export function PowerRankingList({ title, entries }: PowerRankingListProps) {
  return (
    <div className="power-ranking">
      <h3 className="power-ranking__title">{title}</h3>
      <ol className="power-ranking__list">
        {entries.map((entry, index) => {
          const team = getTeam(entry.teamId)
          if (!team) return null
          return (
            <li key={entry.teamId} className="power-ranking__row">
              <span className="power-ranking__rank">{index + 1}</span>
              <div className="power-ranking__body">
                <TeamBadge team={team} size="sm" />
                {entry.comment && (
                  <p className="power-ranking__comment">{entry.comment}</p>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

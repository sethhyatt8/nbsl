import { TeamBadge } from '../components/TeamBadge'
import { redDivisionTeams } from '../data/teams'
import './Teams.css'

export function Teams() {
  return (
    <div className="teams-page">
      <header className="teams-page__intro">
        <h2>Red Division teams</h2>
        <p>
          Mascot badges are placeholders until we add real logos. Tap a club site for
          schedules and registration.
        </p>
      </header>
      <ul className="teams-page__list">
        {redDivisionTeams.map((team) => (
          <li key={team.id} id={team.id} className="teams-page__item">
            <TeamBadge team={team} size="lg" />
            <div className="teams-page__details">
              <h3>{team.name}</h3>
              <p className="teams-page__mascot">{team.mascot}</p>
              {team.siteUrl && (
                <a href={team.siteUrl} target="_blank" rel="noreferrer">
                  Club website →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

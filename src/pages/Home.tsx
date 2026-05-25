import { Link } from 'react-router-dom'
import { TeamBadge } from '../components/TeamBadge'
import { redDivisionTeams } from '../data/teams'
import './Home.css'

const sampleStories = [
  {
    id: 'welcome',
    title: 'Welcome to Red Division',
    date: 'May 2026',
    excerpt:
      'News, meet recaps, and division standings — starting with Fair Blue, Graylyn Crest, Silverside, Lane, and Crestview.',
  },
  {
    id: 'data-soon',
    title: 'Results pipeline coming',
    date: 'Soon',
    excerpt:
      'Times and matchups will load from meet exports. For now, explore teams and bookmark this page for the season.',
  },
]

export function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <h2 className="home__headline">Summer swim news for the Red Division</h2>
        <p className="home__lede">
          A fan newsletter for five NBSL clubs — stories, standings, and times when
          the data is in.
        </p>
      </section>

      <section className="home__teams" aria-labelledby="teams-heading">
        <h2 id="teams-heading" className="section-title">
          The five teams
        </h2>
        <ul className="home__team-grid">
          {redDivisionTeams.map((team) => (
            <li key={team.id}>
              <Link to={`/teams#${team.id}`} className="home__team-card">
                <TeamBadge team={team} size="lg" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home__stories" aria-labelledby="news-heading">
        <h2 id="news-heading" className="section-title">
          Latest
        </h2>
        <ul className="home__story-list">
          {sampleStories.map((story) => (
            <li key={story.id} className="home__story">
              <time className="home__story-date">{story.date}</time>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>

      <aside className="home__note">
        <h3>2025 season snapshot</h3>
        <p>
          Crestview&apos;s team site lists <strong>3× NBSL champions (2022–2024)</strong>{' '}
          with undefeated dual seasons. League-wide 2025 champs aren&apos;t posted clearly
          on nbslswim.com — we&apos;ll add verified scores when we have them.
        </p>
      </aside>
    </div>
  )
}

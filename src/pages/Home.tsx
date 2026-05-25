import { PowerRankingList } from '../components/PowerRankingList'
import {
  lastYearFinishRanking,
  mostUsefulWebsiteRanking,
} from '../data/rankings'
import './Home.css'

const sampleStories = [
  {
    id: 'silverside-pickleball',
    title: 'Pickleball at Silverside',
    date: 'May 2026',
    excerpt:
      'The deck beside the pool is louder than usual — Silverside has leaned into pickleball, and swim families are learning to share the noise, the courts, and the parking lot with a whole new crowd.',
  },
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

      <section className="home__rankings-section" aria-labelledby="teams-heading">
        <h2 id="teams-heading" className="section-title">
          Power Rankings
        </h2>
        <div className="home__rankings">
          <PowerRankingList title="Last Year's Finish" entries={lastYearFinishRanking} />
          <PowerRankingList
            title="Most Useful Team Website"
            entries={mostUsefulWebsiteRanking}
          />
        </div>
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
    </div>
  )
}

import './Times.css'

export function Times() {
  return (
    <div className="times-page">
      <h2>Times &amp; matchups</h2>
      <p className="times-page__lede">
        Results will show here once we import meet data (Swimmingly export or manual
        entry). Each row: date, venue, home, away, event, swimmer, time, place.
      </p>
      <div className="times-page__placeholder" role="status">
        <p>No meet data yet.</p>
        <p className="times-page__hint">Check back after the first dual meet.</p>
      </div>
    </div>
  )
}

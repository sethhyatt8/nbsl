import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const navItems = [
  { to: '/', label: 'News' },
  { to: '/teams', label: 'Teams' },
  { to: '/times', label: 'Times' },
]

export function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__brand">
          <span className="layout__mark" aria-hidden>
            ◆
          </span>
          <div>
            <p className="layout__eyebrow">NBSL · North Brandywine Swim League</p>
            <h1 className="layout__title">Red Division</h1>
          </div>
        </div>
        <nav className="layout__nav" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'layout__link layout__link--active' : 'layout__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="layout__footer">
        <p>
          Unofficial fan site · Data coming soon from meet results ·{' '}
          <a href="https://www.nbslswim.com/" target="_blank" rel="noreferrer">
            nbslswim.com
          </a>
        </p>
      </footer>
    </div>
  )
}

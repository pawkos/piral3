import * as React from 'react';
import { Link } from 'react-router-dom';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps } from 'piral';

const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="nav-item">{children}</li>;

const defaultTiles = (
  <>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <div className="teaser-tag">Architecture</div>
        <h5>Piral Shell</h5>
        <p>The microfrontend orchestrator hosting independent pilets.</p>
        <a href="https://piral.io/" target="_blank" rel="noreferrer" className="teaser-link">
          piral.io &rarr;
        </a>
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <div className="teaser-tag">Bundler</div>
        <h5>Vite 8</h5>
        <p>Ultra-fast HMR and bundling with piral-cli-vite8 plugin.</p>
        <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="teaser-link">
          vite.dev &rarr;
        </a>
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <div className="teaser-tag">Framework</div>
        <h5>React 19</h5>
        <p>Modern React 19 component trees and microfrontend APIs.</p>
        <a href="https://react.dev/" target="_blank" rel="noreferrer" className="teaser-link">
          react.dev &rarr;
        </a>
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <div className="teaser-tag">Discovery</div>
        <h5>feed.json</h5>
        <p>Runtime manifest querying decoupled pilets dynamically.</p>
        <a href="/feed.json" target="_blank" rel="noreferrer" className="teaser-link">
          View feed.json &rarr;
        </a>
      </div>
    </div>
  </>
);

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link" to="/sample">
        Sample Pilet
      </Link>
    </MenuItem>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div className="error-container py-5 text-center">
      <h2 className="text-danger mb-3">404 - Page Not Found</h2>
      <p className="text-muted">The requested microfrontend route could not be found.</p>
      <Link to="/" className="btn btn-outline-primary mt-2">
        Back to Dashboard
      </Link>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div className="error-wrapper p-4 my-3 bg-light border rounded">
      <h3 className="text-danger">Application Error</h3>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div className="dashboard-content">
      <div className="hero-section text-center p-4 p-md-5 mb-4 rounded-3">
        <div className="badge-pill mb-3">
          <span className="dot" /> Piral 1.12 &bull; React 19 &bull; Vite 8
        </div>
        <h1 className="hero-title display-5 fw-bold">Microfrontends with Piral</h1>
        <p className="hero-subtitle col-md-8 mx-auto text-secondary">
          Decoupled frontend modules loaded at runtime from <code>/feed.json</code>.
          Built strictly following the official Piral tutorial guidelines.
        </p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link to="/sample" className="btn btn-primary px-4 py-2 me-2">
            Explore Pilet Route &rarr;
          </Link>
          <a href="/feed.json" target="_blank" rel="noreferrer" className="btn btn-outline-secondary px-4 py-2">
            Inspect feed.json
          </a>
        </div>
      </div>

      <div className="section-header mb-3">
        <h4 className="fw-bold mb-1">Microfrontend Dashboard</h4>
        <p className="text-muted small">Registered dashboard tiles from App Shell and loaded Pilets:</p>
      </div>

      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <div className={`tile cols-${columns} rows-${rows}`}>
      {children}
    </div>
  ),
  Layout: ({ children }) => (
    <div className="app-shell-root">
      <Notifications />
      <Menu type="general" />
      <main className="container my-4 app-shell-main">{children}</main>
      <footer className="footer border-top py-4 text-center text-muted small mt-auto">
        <div className="container">
          <p className="mb-1">
            <strong>Piral Microfrontend Portal</strong> &bull; Powered by React 19, Vite 8, and Piral CLI
          </p>
          <p className="mb-0 text-secondary">
            Pilets loaded dynamically via <code>/feed.json</code>
          </p>
        </div>
      </footer>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header className="app-shell-header">
        <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
              <span className="brand-icon">🦋</span>
              <span className="brand-name">Piral Portal</span>
              <span className="badge bg-light text-primary border ms-2">React 19</span>
            </Link>
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end ${collapsed ? '' : 'show'}`}
              aria-expanded={!collapsed}>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                </li>
                {children}
                {defaultMenuItems}
                <li className="nav-item ms-md-2">
                  <a
                    className="btn btn-sm btn-outline-primary"
                    href="/feed.json"
                    target="_blank"
                    rel="noreferrer">
                    feed.json
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type || 'info'}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <button type="button" className="btn-close ms-2" onClick={onClose} aria-label="Close" />
    </div>
  ),
};

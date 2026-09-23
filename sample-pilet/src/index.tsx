import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';

const Page = React.lazy(() => import('./Page'));

function SampleTile() {
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="teaser pilet-teaser" style={{ background: '#eef2ff', borderColor: '#c7d2fe', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem', borderRadius: '8px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
          <strong style={{ color: '#4338ca' }}>Sample Pilet</strong>
          <span style={{ fontSize: '0.75rem', background: '#6366f1', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>v1.0</span>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#475569' }}>
          Loaded dynamically from <code>/feed.json</code> with React 19 &amp; Vite 8.
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLikes((l) => l + 1);
          }}
          style={{ cursor: 'pointer', border: 'none', background: '#fff', color: '#4338ca', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          👍 Likes ({likes})
        </button>
        <Link to="/sample" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4f46e5', textDecoration: 'none' }}>
          Open Page &rarr;
        </Link>
      </div>
    </div>
  );
}

export function setup(app: PiletApi) {
  app.registerPage('/sample', Page);

  app.showNotification('Sample Pilet successfully mounted from feed.json!', {
    autoClose: 4000,
    type: 'success',
  });

  app.registerMenu(() => (
    <Link className="nav-link font-weight-bold text-primary" to="/sample">
      Sample Pilet
    </Link>
  ));

  app.registerTile(SampleTile, {
    initialColumns: 4,
    initialRows: 2,
  });
}

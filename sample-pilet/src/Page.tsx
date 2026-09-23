import * as React from 'react';

export default function SamplePage() {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('');

  return (
    <div className="pilet-page-container" style={{ padding: '2rem 0' }}>
      <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '12px', overflow: 'hidden' }}>
        <div className="card-header bg-primary text-white py-3">
          <h2 className="h4 mb-0">🧩 Sample Pilet Microfrontend</h2>
          <small className="opacity-75">Loaded dynamically via feed.json &bull; React 19 &bull; Vite 8</small>
        </div>
        <div className="card-body p-4">
          <p className="lead">
            This page is rendered by an independently developed and bundled <strong>Pilet</strong>.
            The Piral App Shell discovered and loaded this microfrontend at runtime from <code>/feed.json</code>!
          </p>

          <div className="row g-4 my-3">
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <h5 className="text-secondary">⚡ Microfrontend State (React 19)</h5>
                <p>Interactive state inside the isolated pilet:</p>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setCount((c) => c - 1)}>
                    - Decrement
                  </button>
                  <span className="badge bg-primary fs-6 px-3 py-2">Count: {count}</span>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setCount((c) => c + 1)}>
                    + Increment
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <h5 className="text-secondary">📡 Pilet Metadata</h5>
                <ul className="list-unstyled mb-0 small">
                  <li><strong>Name:</strong> sample-pilet</li>
                  <li><strong>Version:</strong> 1.0.0</li>
                  <li><strong>Format:</strong> Schema v2 (SystemJS)</li>
                  <li><strong>Bundler:</strong> Vite 8 (piral-cli-vite8)</li>
                  <li><strong>Framework:</strong> React 19 (react 19.3.0)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h5>Interactive Feedback</h5>
            <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Type a test message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="btn btn-success"
                type="button"
                onClick={() => alert(`Pilet Echo: "${message || 'Hello Microfrontends!'}"`)}>
                Test Pilet Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const piletDist = path.join(rootDir, 'sample-pilet', 'dist');

if (!fs.existsSync(piletDist)) {
  console.error('Error: sample-pilet/dist does not exist. Please run "npm run build:pilet" first.');
  process.exit(1);
}

// Read requireRef and spec from pilet bundle
const indexJs = fs.readFileSync(path.join(piletDist, 'index.js'), 'utf8');
const piletHeaderMatch = indexJs.match(/\/\/@pilet v:(\d+)\(([^,]+),/);
const spec = piletHeaderMatch ? `v${piletHeaderMatch[1]}` : 'v2';
const requireRef = piletHeaderMatch ? piletHeaderMatch[2] : 'rolluppr_samplepilet';

const piletPackageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'sample-pilet', 'package.json'), 'utf8'));

const feed = [
  {
    name: piletPackageJson.name,
    version: piletPackageJson.version,
    link: `/pilets/${piletPackageJson.name}/index.js`,
    spec: spec,
    requireRef: requireRef,
  },
];

const targetDirs = [
  path.join(rootDir, 'my-app', 'src', 'public'),
  path.join(rootDir, 'my-app', 'public'),
  path.join(rootDir, 'my-app', 'dist', 'release'),
];

for (const targetDir of targetDirs) {
  if (targetDir.includes('dist') && !fs.existsSync(path.dirname(targetDir))) {
    continue;
  }
  const piletTargetDir = path.join(targetDir, 'pilets', piletPackageJson.name);
  fs.mkdirSync(piletTargetDir, { recursive: true });

  // Copy dist files
  fs.cpSync(piletDist, piletTargetDir, { recursive: true });

  // Write feed.json
  const feedPath = path.join(targetDir, 'feed.json');
  fs.writeFileSync(feedPath, JSON.stringify(feed, null, 2), 'utf8');
  console.log(`Synced pilet & feed to: ${feedPath}`);
}
console.log('Feed synchronization completed successfully!');

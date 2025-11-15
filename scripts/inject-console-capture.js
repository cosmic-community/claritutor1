const fs = require('fs');
const path = require('path');

const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
const htmlFiles = [
  '.next/server/app/index.html',
  '.next/server/app.html',
  'out/index.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('dashboard-console-capture.js')) {
      content = content.replace('</head>', `${scriptTag}\n</head>`);
      fs.writeFileSync(filePath, content);
      console.log(`Injected console capture script into ${file}`);
    }
  }
});
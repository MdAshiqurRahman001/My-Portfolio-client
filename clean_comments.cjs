const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remove JSX block comments like {/* ── Name card ── */}
  content = content.replace(/\{\/\*\s*[─-]+\s*(.*?)\s*[─-]+\s*\*\/\}/g, '{/* $1 */}');
  
  // Remove CSS block comments like 
  // /* ========================================
  //    SOME TEXT
  //    ======================================== */
  content = content.replace(/\/\*\s*={10,}\s*\n\s*(.*?)\s*\n\s*={10,}\s*\*\//g, '/* $1 */');
  
  // Clean up React/JSX comments like {/* Bio section */} -> removing them entirely or making them lowercase?
  // Let's just remove the fancy ── characters, which is the biggest AI tell.

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Cleaned:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(process.cwd(), 'src'));

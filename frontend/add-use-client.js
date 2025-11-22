const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) walk(fullPath);
    else if (/\.(tsx|jsx)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('useTranslation') && !content.startsWith("'use client';")) {
        content = `'use client';\n${content}`;
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Added 'use client' to ${fullPath}`);
      }
    }
  });
}

walk(path.join(__dirname)); // chạy từ thư mục frontend

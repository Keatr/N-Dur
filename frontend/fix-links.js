// fix-links.js
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname); // thư mục hiện tại (frontend)

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(tsx|jsx)$/.test(file)) {
      fixFile(fullPath);
    }
  });
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex thay thế <Link ...><a ...>...</a></Link> thành <Link ... className=...>...</Link>
  const regex = /<Link([^>]*)>\s*<a([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/gm;

  const newContent = content.replace(regex, (_, linkAttrs, aAttrs, inner) => {
    // Lấy className từ <a> nếu có
    let classMatch = aAttrs.match(/className\s*=\s*["']([^"']*)["']/);
    let className = classMatch ? ` className="${classMatch[1]}"` : '';

    return `<Link${linkAttrs}${className}>${inner}</Link>`;
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
  }
}

walkDir(targetDir);
console.log('🎉 All done!');

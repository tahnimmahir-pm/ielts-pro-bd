// scripts/replace-img.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  // Replace <img ... /> with <Image ... width={600} height={400} />
  const imgRegex = /<img\s+([^>]*?)\s*\/?>/g;
  content = content.replace(imgRegex, (match, attrs) => {
    // Extract src and alt if present
    const srcMatch = attrs.match(/src=\"([^\"]+)\"/);
    const altMatch = attrs.match(/alt=\"([^\"]*)\"/);
    const classMatch = attrs.match(/className=\"([^\"]*)\"/);
    const src = srcMatch ? srcMatch[1] : '';
    const alt = altMatch ? altMatch[1] : '';
    const className = classMatch ? classMatch[1] : '';
    const newAttrs = [];
    if (src) newAttrs.push(`src="${src}"`);
    if (alt) newAttrs.push(`alt="${alt}"`);
    if (className) newAttrs.push(`className="${className}"`);
    // Add placeholder dimensions
    newAttrs.push('width={600}');
    newAttrs.push('height={400}');
    modified = true;
    return `<Image ${newAttrs.join(' ')} />`;
  });

  // also fix unescaped apostrophes in certain text nodes. Actually it's safer to just fix next/image for now.
  // Wait, the error is 270:48 Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
  const aposRegex = /([^="']*)'([^="']*)/g;
  // it's risky to bulk replace ' with &apos; without parsing AST, but we can fix specific instances later.

  if (modified) {
    // Ensure import Image from 'next/image' at top
    if (!content.includes("import Image from 'next/image'")) {
      const importRegex = /import\s+React.*?from\s+['\"]react['\"];?/;
      if (importRegex.test(content)) {
        content = content.replace(importRegex, match => `${match}\nimport Image from 'next/image';`);
      } else {
        // prepend import
        content = `import Image from 'next/image';\n` + content;
      }
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

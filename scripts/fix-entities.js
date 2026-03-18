const fs = require('fs');
const path = require('path');

const lintOutputFile = path.join(__dirname, '../lint-results.json');
if (!fs.existsSync(lintOutputFile)) {
    console.error('Lint results not found');
    process.exit(1);
}

const results = JSON.parse(fs.readFileSync(lintOutputFile, 'utf8'));

results.forEach(fileResult => {
    const unescapedErrors = fileResult.messages.filter(m => m.ruleId === 'react/no-unescaped-entities');
    if (unescapedErrors.length > 0) {
        let content = fs.readFileSync(fileResult.filePath, 'utf8');
        let lines = content.split('\n');
        
        // Group by line number, sort descending to avoid index shifting
        const errorsByLine = {};
        unescapedErrors.forEach(err => {
            if (!errorsByLine[err.line]) errorsByLine[err.line] = [];
            errorsByLine[err.line].push(err);
        });
        
        const lineNums = Object.keys(errorsByLine).map(Number).sort((a, b) => b - a);
        
        lineNums.forEach(lineNum => {
            const errs = errorsByLine[lineNum].sort((a, b) => b.column - a.column);
            let lineStr = lines[lineNum - 1];
            
            errs.forEach(err => {
                // Determine what character it complained about based on message
                let match = err.message.match(/`([^`]+)` can be escaped with/);
                if (match) {
                    const charToEscape = match[1];
                    let escaped = charToEscape;
                    if (charToEscape === "'") escaped = "&apos;";
                    else if (charToEscape === '"') escaped = "&quot;";
                    else if (charToEscape === '>') escaped = "&gt;";
                    else if (charToEscape === '}') escaped = "&#125;";
                    
                    const colIdx = err.column - 1;
                    // Verify the character is there
                    if (lineStr[colIdx] === charToEscape) {
                        lineStr = lineStr.substring(0, colIdx) + escaped + lineStr.substring(colIdx + 1);
                    }
                }
            });
            lines[lineNum - 1] = lineStr;
        });
        
        fs.writeFileSync(fileResult.filePath, lines.join('\n'), 'utf8');
        console.log(`Fixed entities in ${fileResult.filePath}`);
    }
});

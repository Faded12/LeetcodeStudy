const fs = require('fs');
const glob = require('glob');
const path = require('path');

const generateInstall = (dirPath = '.') => {
    const files = glob.sync(`${dirPath}/*.js`);
    var mdData = ''

    files.map((item) => {
        if(item.indexOf('genMd')>-1) return
        const name = item.split('/')[1].split('.').splice(0,2).join('.');
        // toReadFile(item, name)
        fs.readFile(path.join(__dirname, item), 'utf8', function (err, data) {
            if (err) throw err;
            mdData += `## ${name}
\`\`\` javascript
            ${data}
\`\`\`
`
        })
    })

    setTimeout(()=>{
        fs.writeFileSync(path.join(__dirname, `./README.md`), mdData, 'utf8', (err) => {
            if (err) throw err;
        });
    },1000)
    
}


generateInstall()
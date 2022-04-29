!(function () {
    const fs = require('fs');
    const glob = require('glob');
    const path = require('path');

    const generateInstall = (dirPath = '.') => {
        const files = glob.sync(`${dirPath}/*.js`);
        let mdData = ''
        let flag = true
        let hrefList = `
## 开始
##### 文档由 <a href="https://github.com/Faded12/LeetcodeStudy/blob/main/genMd.js">./genMd.js</a> 生成
| 🌟 Title 🌟 | 🌟 Title 🌟 |
| -- | -- |`
        const listRes = files.map(async (item, index) => {
            if (item.indexOf('genMd') > -1) return
            const name = item.split('/')[1]
            let data = await read(item)
            if (flag) {
                hrefList += `
| `
            }
            hrefList += ` ☑️    <a href="#${name.split('.').join('')}">${name}</a> |`
            flag = !flag
            mdData += `
        
## ${name}
\`\`\` javascript
${data}
\`\`\`
<a href="#开始">回到目录</a>
`
            mdData += ``
        })

        Promise.all(listRes).then(() => {
            let data = hrefList + mdData
            fs.writeFile(path.join(__dirname, `./README.md`), data, 'utf8', (err) => {
                if (err) throw err;
            });
        })

    }

    const read = (dir) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, dir), 'utf-8', (err, data) => {
                if (err) {
                    reject()
                } else {
                    resolve(data)
                }
            })
        })
    }

    generateInstall()
})()
!(function () {
    const fs = require('fs');
    const glob = require('glob');
    const path = require('path');

    const generateInstall = (dirPath = '.') => {
        const files = glob.sync(`${dirPath}/*.js`);
        let mdData = ''
        let lcNum = 0
        let fnNum = 0
        let flag = true
        let headInfo = `
## 开始
##### 文档由 <a href="./genMd.js">./genMd.js</a> 生成`
        let hrefList = `
| 🌟 Title 🌟 | 🌟 Title 🌟 |
| -- | -- |`
        const listRes = files.map(async (item, index) => {
            if (item.indexOf('genMd') > -1) return
            const name = item.split('/')[1]
            let data = await read(item)
            let hook = data.substring(data.lastIndexOf('{')+1,data.lastIndexOf('}')).length>10 ? '🔘':'⚪️';
            (/[\u4e00-\u9fa5]/).test(item)?lcNum++:fnNum++
            if (flag) {
                hrefList += `
| `
            }
            hrefList += ` ${hook}    <a href="#${name.split('.').join('')}">${name}</a> |`
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
            headInfo += `
<p>leetcode：${lcNum}</p>
函数实现：${fnNum}`
            let data = headInfo + hrefList + mdData
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
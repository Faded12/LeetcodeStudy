!(function () {
    const fs = require('fs');
    const glob = require('glob');
    const path = require('path');

    const generateInstall = (dirPath = '.') => {
        const leetcodeList = glob.sync(`${dirPath}/leetcode/*.js`)
        leetcodeList.sort((a,b)=>a.split('/')[2].split('.')[0]-b.split('/')[2].split('.')[0])
        const files = [...leetcodeList, ...glob.sync(`${dirPath}/function/*.js`)];
        let mdData = ''
        let lcNum = 0
        let fnNum = 0
        let flag = true
        let headInfo = `
## 开始
##### 此文档涵盖项目内所有代码实现，由 <a href="./genMd.js">./genMd.js</a> 自动生成 🌪

`
        let hrefList = `
| 🌟 Title 🌟 | 🌟 Title 🌟 |
| -- | -- |`
        async function listRes(){
            for(let item of files){
                const name = item.split('/')[2]
                let data = await read(item)
                let hook = data.substring(data.lastIndexOf('{') + 1, data.lastIndexOf('}')).length > 10 ? '🔘' : '⚪️';
                (/[\u4e00-\u9fa5]/).test(item) ? lcNum++ : fnNum++
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
            }
        }

        listRes().then(() => {
            headInfo += `
##### 🤯 LeetCode：${lcNum}
##### 🧐 JS方法实现：${fnNum}
`
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
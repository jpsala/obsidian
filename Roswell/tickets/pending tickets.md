```dataview
table project, name, estimated, difficulty, status
from #ticket and -#ticket/non-billable and -'/templates/ticket'
where status != "done"
```

``` dataviewjs
	
	let pages = dv.pages("#ticket or #ticket/non-billable")
	dv.table(["file", "project", "estimated", "difficulty"], pages.map(row => {
		return [row.file.link, row.project, row.estimated, row.difficulty]
	}))
```

// dataviewjs block in *.md
```dataviewjs
const {CoolString} = customJS
dv.list(dv.pages().file.name.map(n => CoolString.coolify(n)))
```
_
![[Recording 20220529011950.webm]]
_
```dataviewjs
const {CoolString} = customJS
dv.span(CoolString.coolify('hola'))
```
```js dataviewjs
require("child_process").exec("ls",(_0,stdout,_1) => 
	{
		const out = stdout.split('\n')
		out.forEach(r => dv.el('div', r))
	}
)
```
```dataviewjs
	let date = dv.current().file.mtime
	dv.span(date)
```
```dataviewjs
let pages = dv.pages('#ticket').where('"-#non-billable"')
dv.view('js/views/test1', {pages})
```

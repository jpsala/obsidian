```dataview
table project, name, estimated, difficulty, status
from #ticket and -#ticket/non-billable and -'/templates/ticket'
where status != "done"
```

``` dataviewjs
	
	let pages = dv.pages('#ticket and -#ticket/non-billable and !"templates/ticket.md"')
	dv.table(["file", "project", "estimated", "difficulty"], pages.map(row => {
		return [row.file.path, row.project, row.estimated, row.difficulty]
	}))
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

```dataview
table project, name, estimated, difficulty, status
from #ticket and -#ticket/non-billable
where status != "done"
```
``` dataviewjs
	
	let pages = dv.pages("#ticket")
	dv.table(["project", "name"], pages.map(row => {
		if(row.project) {
			console.log('row', row.project)
			return [row.project, row.name]
		}
		else {
			dv.el("b", "This is some bold text");
			return ["nada", "nada"]
		}
	}))
```

// dataviewjs block in *.md
```dataviewjs
const {CoolString} = customJS
dv.list(dv.pages().file.name.map(n => CoolString.coolify(n)))
```

```dataviewjs
const {CoolString} = customJS
dv.span(CoolString.coolify('hola'))
```
```dataviewjs
require("child_process").exec("ls",(_0,stdout,_1) => 
	{
		const out = stdout.split('\n')
		out.forEach(r => dv.el('div', r))
	}
)
```
`$= dv.current().file.mtime`


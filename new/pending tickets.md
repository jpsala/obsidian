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

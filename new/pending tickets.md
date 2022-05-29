```dataview
table project, name, estimated, difficulty, status
from #ticket and -#ticket/non-billable
where status != "done"
```
```js dataviewjs
dv.el("b", "This is some bold text");
let pages = dv.pages("#ticket")
dv.table(["project", "name"], pages.map(row => {
console.log('row', row)
if(row.project) {
	return [row.project, row.name]
}
else return []
}))
```

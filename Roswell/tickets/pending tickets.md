# Pending tickets
---

## lista
``` dataviewjs
	
	let pages = dv.pages('#ticket and -#ticket/non-billable and !"templates/ticket.md"')
	dv.table(["file", "project", "estimated", "difficulty", "other"], pages.map(row=> {
		return [row.file.link, row.project, row.estimated, row.difficulty, "akdsf asdfhjahsd flajshdflajd f dsfkjsdh fkjshdfkjsdhfkjsdh fkjsdhfkjd"]
	}))
```

> [!NOTE] Title
> Contents

1. hola
	1. 33
	2. 44
2. 222
	1. 2222

1. chau
	1. chau 2
	2. chau3
		1. eee
### uno
	1
	2
	3


## lista 2
```dataviewjs
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

```dataview
table project, name, estimated, difficulty, status
from #ticket and -#ticket/non-billable
where status != "done"
```
```dataviewjs
dv.el("b", "This is some bold text");
dv.pages("#ticket")
```

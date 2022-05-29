```dataview
table project, name, estimated, difficulty
from #ticket and -#ticket/non-billable
where status != "done"
```

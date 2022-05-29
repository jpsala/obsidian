---
tags: roswell-project
---
# Juliska
---
![[Pasted image 20220528221700.png]]

- URL: https://www.juliska.com/
- themes:: https://shop-juliska.myshopify.com/admin/themes?channel=true
```dataviewjs
dv.table(['Project'], dv.pages('#ticket')
	.where(r=>r.project)
	.map(r=>[JSON.stringify(r.name)=='Juliska']))
```

let {pages} = input
let rows = []
pages.forEach(row=>{
  // dv.el('div', row)
  rows.push([row.file.name, `<span style="color: ${row.project?'white':'red'}">${row.project ?? '-'}</span>`])
})
dv.table(['file','ticket'], rows)
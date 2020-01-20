const recast = require('recast')
recast.run(function (ast, printSource) {
    recast.visit(ast, {
        visitExpressionStatement: function (path) {
            const node = path.node
            printSource(node)
            this.traverse(path)
        }
    })
})
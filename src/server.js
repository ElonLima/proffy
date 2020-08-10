
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses} = require("./pages")

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

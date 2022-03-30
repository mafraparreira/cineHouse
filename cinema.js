let filmes = require('./catalogo.json')
let cinema = 'Cine Belas Artes 2.4.5.6'

const filme4 = {
    codigo: 4,
    titulo: 'Rambo 2',
    duracao: 240,
    genero: 'terror',
    emCartaz: true
}

filmes.push(filme4) // add no finally

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo // o retorno tem que ser booleana
    })

    return filmeEncontrado
}

const filmeEnc = buscarFilme(1)

function adicionarFilme(codigo, titulo, duracao, genero, emCartaz) {
    const filme = {
        codigo,
        titulo,
        duracao,
        genero,
        emCartaz
    }

    filmes.push(filme)
}

adicionarFilme(5, 'Harry Potter 5', 180, 'fantasia', true)

function alterarFilmeEmCartaz(codigo, encontrarFilme) {
        const filmeEncontrado = encontrarFilme(codigo)

    filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true
}

alterarFilmeEmCartaz(5, buscarFilme)

const imprimeFilme = (filme, index) => console.log(index + ' - ' + filme.titulo + ' - ' + filme.emCartaz)

function listarTodosOsFilmes() {
    filmes.forEach(imprimeFilme)
}
    
// listarTodosOsFilmes()

const filmesFiltrados = filmes.filter( filmes => {
    return filmes.titulo.includes('2')
})

//console.table(filmesFiltrados)

function listarFilmesLongaDuracao() {
    return filmes.filter(filmes => {
        return filmes.duracao > 120
    })

    return filmesEncontrados

}
console.log(listarFilmesLongaDuracao())

const listarFilmesEmCartaz = () => filmes.filter(filme => !filme.emCartaz)

console.table(listarFilmesEmCartaz())

console.log(cinema)
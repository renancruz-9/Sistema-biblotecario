class Livro {

    #id;
    #titulo;
    #isbn
    #anoPublicacao
    #quantidade

    constructor(titulo, isbn, anoPublicacao, quantidade, id = null) {
        this.#id = id;
        this.#titulo = titulo;
        this.#isbn = isbn
        this.#quantidade = quantidade
        this.#anoPublicacao = anoPublicacao
    }

    // Getters
    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get isbn() {
        return this.#isbn;
    }

    get anoPublicacao() {
        return this.#anoPublicacao;
    }

    get quantidade() {
        return this.#quantidade;
    }

    // Setters
    set name(newName) {
        this.#titulo = newName;
    }
    // Setters
    set isbn(newIsbn) {
        this.#isbn = newIsbn;
    }
    set anoPublicacao(newAnoPublicacao) {
        this.#anoPublicacao = newAnoPublicacao;
    }
    set quantidade(newQuantidade) {
        this.#quantidade = newQuantidade;
    }
   

}

export default Livro;


class Autor {

    #id;
    #nome;
    #nacionalidade;
    #data_nascimento;

    constructor(nome, nacionalidade, data_nascimento, id = null) {
        this.#id = id;
        this.#nome = nome;
        this.#nacionalidade = nacionalidade;
        this.#data_nascimento = data_nascimento;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get nacionalidade() {
        return this.#nacionalidade;
    }

    get data_nascimento() {
        return this.#data_nascimento;
    }

    // Setters
    set nome(newNome) {
        return   this.#nome = newNome;
    }

    set nacionalidade(newNacionalidade) {
        return this.#nacionalidade = newNacionalidade;
    }

    set data_nascimento(newData_nascimento) {
        return this.#data_nascimento = newData_nascimento;
    }

}

export default Autor;


class Usuario {

    #id;
    #nome;
    #email;
    #cpf;
    #telefone;
   
    constructor(nome, email, cpf, telefone, id = null) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#cpf = cpf;
        this.#telefone = telefone;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get cpf() {
        return this.#cpf;
    
    }

    get telefone() {
        return this.#telefone;

    }

    // Setters
    set nome(newNome) {
        this.#nome = newNome;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    set cpf(newCpf) {
        this.#cpf = newCpf;
    }

    set telefone(newTelefone) {
        this.#telefone = newTelefone;
    }
}

export default Usuario;


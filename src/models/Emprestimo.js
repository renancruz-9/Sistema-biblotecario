class Emprestimo {

    #id 
    #data_emprestimo
    #devolucao_prevista 
    #data_devolucao
    #id_usuario
    #id_livro

    constructor(data_emprestimo,devolucao_prevista,data_devolucao, id_usuario, id_livro, id = null) {
        this.#id = id
        this.#data_emprestimo = data_emprestimo 
        this.#devolucao_prevista = devolucao_prevista
        this.#data_devolucao = data_devolucao
        this.#id_usuario = id_usuario
        this.#id_livro = id_livro
    }

     // Getters
  get id(){
    return this.#id
  }
  get data_emprestimo(){
    return this.#data_emprestimo
  }
  get devolucao_prevista(){
    return this.#devolucao_prevista
  }
  get data_devolucao(){
    return this.#data_devolucao
  }
  get id_usuario(){
    return this.#id_usuario
  }
  get id_livro(){
    return this.#id_livro
  }

  // Setters 

  set data_emprestimo(newData_emprestimo){
     this.#data_emprestimo = newData_emprestimo
  }
  set devolucao_prevista(newDevolucao_prevista){
     this.#devolucao_prevista = newDevolucao_prevista
  }
  set data_devolucao(newData_devolucao){
     this.#data_devolucao = newData_devolucao
  }
}
export default Emprestimo
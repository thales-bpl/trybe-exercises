// Setando uma key e seu valor:
localStorage.setItem(chave, valor)
//ex:
localStorage.setItem('xulambs', 'blambs')
localStorage['key'] = 'valor'

// Como obter o valor de uma chave:
localStorage.xulambs
// vai nos retornar 'blambs'
// Outra forma de chamar a chave:
localStorage['xulambs']
// também nos retorna 'blambs'
localStorage.getItem('xulambs')
// É a terceira forma de obter uma key


//Removendo uma key:
delete localStorage.xulambs
localStorage.removeItem('xulambs')
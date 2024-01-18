/// Capturando os elementos
const titulo = document.getElementById('titulo');

const link = document.querySelector('a');

const listaOrdenada = document.getElementById('lista-ordenada');

const lista = document.querySelector('ul');

/// Adicionando o innerText

titulo.innerText = 'Titulo da página'

link.innerText = 'Link para proz'

/// Adicionando o innerHTML e criando elementos para a lista não ordenada

lista.innerHTML = `
Lista não ordenada
<li>Item 1</li>
<li>Item 2</li>
<li>Item 2</li>
`

/// Adicionando o innerHTML e adicionando links a lista ordenada


listaOrdenada.innerHTML = `
Lista ordenada
<li><a href = '#' >Link 1</a></li>
<li><a href = '#' >Link 2</a></li>
<li><a href = '#' >Link 3</a></li>
`


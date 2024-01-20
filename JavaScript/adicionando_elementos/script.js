let corpo = document.querySelector('body')
let titulo = document.createElement('h1');
let produtoImagem = document.createElement('ul')


titulo.innerText = 'Bicicleta'
titulo.id = 'titulo'

produtoImagem.innerHTML =
`<img src="https://static.netshoes.com.br/produtos/bicicleta-aro-29-ksw-xlt-21v-cambios-shimano/72/CGY-1089-172/CGY-1089-172_zoom1.jpg?ts=1696863363&ims=544x" alt="Bicicleta">
<li> Nome: Bicicleta Aro 29 KSW</li>
<li> Descrição: Bicicleta perfeita para as atividades do seu dia a dia.</li>
<li> Preço: R$ 1000,00</li>`


corpo.appendChild(titulo)
corpo.appendChild(produtoImagem)



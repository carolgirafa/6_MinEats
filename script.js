let comida = null;

let precocomida = null;

let bebida = null;

let precobebida = null;

let sobremesa = null;

let precosobremesa = null;

let precofinal = null;

function pratoselecionado(item) {

  /*
  Função que seleciona o item que é clicado, mudando sua formataçao
  No caso de um item selecionado da mesma categoria, ele é desselecionado
  Se o item selecionado já estava na formatação 'selecionada', ele é desselecionado
  Libera o botão fechar pedido
  */

  let selec = document.querySelector(".itensprato .selecao");
  let iconselec = document.querySelector(".itensprato .mostraricon");

  if (selec !== null) {
    selec.classList.remove("selecao");
    iconselec.classList.remove("mostraricon");
    if (document.getElementsByClassName("selecao").length === 0) {
      document.querySelector(".fecharpedido").disabled = true;
      document.querySelector(".fecharpedido").innerHTML = "Choose at least 1 item to submit your order";
    }
  }
  
  if (selec !== item) {
    item.querySelector(".iconselecao").classList.add("mostraricon");
    item.classList.add("selecao");
    if (document.querySelector(".fecharpedido").disabled) {
      document.querySelector(".fecharpedido").disabled = false;
      document.querySelector(".fecharpedido").innerHTML = "Fechar pedido";
    }
  }

  comida = item.querySelector("h2").innerHTML;
  precocomida = Number(item.querySelector("span").innerHTML);

}

function bebidaselecionada(item) {
  const selec = document.querySelector(".itensbebida .selecao");
  const iconselec = document.querySelector(".itensbebida .mostraricon");

  if (selec !== null) {
    selec.classList.remove("selecao");
    iconselec.classList.remove("mostraricon");
    if (document.getElementsByClassName("selecao").length === 0) {
      document.querySelector(".fecharpedido").disabled = true;
      document.querySelector(".fecharpedido").innerHTML = "Choose at least 1 item to submit your order";
    }
  }
  
  if (selec !== item) {
    item.querySelector(".iconselecao").classList.add("mostraricon");
    item.classList.add("selecao");
    if (document.querySelector(".fecharpedido").disabled) {
      document.querySelector(".fecharpedido").disabled = false;
      document.querySelector(".fecharpedido").innerHTML = "Fechar pedido";
    }
  }

  bebida = item.querySelector("h2").innerHTML;
  precobebida = Number(item.querySelector("span").innerHTML);

}

function sobremesaselecionada(item) {
  const selec = document.querySelector(".itenssobremesa .selecao");
  const iconselec = document.querySelector(".itenssobremesa .mostraricon");

  if (selec !== null) {
    selec.classList.remove("selecao");
    iconselec.classList.remove("mostraricon");
    if (document.getElementsByClassName("selecao").length === 0) {
      document.querySelector(".fecharpedido").disabled = true;
      document.querySelector(".fecharpedido").innerHTML = "Choose at least 1 item to submit your order";
    }
  }
  
  if (selec !== item) {
    item.querySelector(".iconselecao").classList.add("mostraricon");
    item.classList.add("selecao");
    if (document.querySelector(".fecharpedido").disabled) {
      document.querySelector(".fecharpedido").disabled = false;
      document.querySelector(".fecharpedido").innerHTML = "Fechar pedido";
    }
  }

  sobremesa = item.querySelector("h2").innerHTML;
  precosobremesa = Number(item.querySelector("span").innerHTML);

}

function confirmarpedido() {
  precofinal = precocomida + precobebida + precosobremesa;

  document.querySelector(".prato").innerHTML = comida;

  document.querySelector(".precoprato").innerHTML = precocomida;

  document.querySelector(".bebida").innerHTML = bebida;

  document.querySelector(".precobebida").innerHTML = precobebida;

  document.querySelector(".sobremesa").innerHTML = sobremesa;

  document.querySelector(".precosobremesa").innerHTML = precosobremesa;

  document.querySelector(".precofinal").innerHTML =
    "€ " + precofinal;

  const fundo = document.querySelector(".fundo");
  fundo.classList.remove("esconder");

  const janelaconfirm = document.querySelector(".confirmacao");
  janelaconfirm.classList.remove("esconder");
}

function cancelar() {
  const fundo = document.querySelector(".fundo");
  fundo.classList.add("esconder");

  const janelaconfirm = document.querySelector(".confirmacao");
  janelaconfirm.classList.add("esconder");
}

function enviarpedido() {
  const nome = prompt("Digite seu nome:");
  const endereco = prompt("Digite o endereço de entega:");

  let msg =
    "Olá, gostaria de fazer o pedido:\n" +
    "- Prato: " +
    comida +
    "\n- Bebida: " +
    bebida +
    "\n- Sobremesa: " +
    sobremesa +
    "\nTotal: R$ " +
    precofinal.toFixed(2).replace(".", ",") +
    "\n\nNome: " +
    nome +
    "\nEndereço: " +
    endereco;

  const msgenc = encodeURIComponent(msg);
  // deixamos o # no lugar do link do wpp - no escopo do projeto tem um link para ver isso
  window.open("#" + msgenc, "_blank");
}

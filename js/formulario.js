// Resetar mensagens de erro ao clicar fora do formulário

//Usando o método de clique, que monitora em qualquer parte do documento (document)
$(document).click(function(event) {

/*Se o elemento clicado (event.target) não for (!) dentro do formulario (closest #formulario) ou seus ancestrais (length)*/
  if (!$(event.target).closest('#formulario').length){

//A condiçaõ verdadeira e os avisos de preencher o campo desaparecerão    
      $("#nome-error, #email-error, #mensagem-error").text("");
  }
});




/*VALIDAÇÃO DOS FORMULÁRIOS*/

$("#formulario").submit(function(event){
    // Declarando e ocultando mensagens de erro e sucesso no preenchimento de formulário
    $("#nome-error, #email-error, #mensagem-error").text("");
    $("#mensagem-sucesso").hide();

    //Declarando uma variável como verdadeira dentro da seguinte lógica:
    let isValid = true;


    /*Verificando o campo nome, onde val() assume o valor real do campo #nome e o trim() remove os espaços, ou seja se o valor 
    (val) for um espaço vazio (trim) a variavel geral (isValid) será falsa, aparecendo os avisos para preencher o formulario*/
    if($("#nome").val().trim() === ""){
        $("#nome-error").text("Por favor, preencha seu nome.");
        isValid = false;
    
    /*Aqui a mesma lógica com o val e trim se mantém, porém adiciona o split que divide a strig #nome em duas (nome e sobrenome)
    e caso não tenha pelo menos nome e sobrenome (length < 2), a variável será falsa, aparecendo a mensagem de aviso*/
    } else if ($("#nome").val().trim().split(" ").length < 2) {
        $("#nome-error").text("Por favor, preencha seu nome completo.");
        isValid = false;
    }

  // Verificando o campo email, aplicando a mesma lógica do exemplo acima com val e o trim
  if($("#email").val().trim() === ""){
    $("#email-error").text("Por favor, preencha seu e-mail.");
    isValid = false;

  } else {
    // Separando o email em duas partes: parte antes do "@" e parte após o "@" utilizando o (split(@))
    let parts = $("#email").val().split("@");

/*Verificando se há pelo menos um caractere antes do "@" (parts[0].length < 1) e se o domínio é "@hotmail.com" ou "@gmail.com"
parts[1] === "hotmail.com" || parts[1] === "gmail.com"*/
    if (parts[0].length < 1 || !(parts[1] === "hotmail.com" || parts[1] === "gmail.com")) {
        $("#email-error").text("Por favor, insira um e-mail válido com '@gmail.com' ou '@hotmail.com'.");
        isValid = false;
    }
}

  // Verificando o campo mensagem
  if($("#mensagem").val().trim() === ""){
    $("#mensagem-error").text("Por favor, preencha sua mensagem.");
    isValid = false;
  }


// Validando se todo formulário for preenchido corretamente
  if (isValid) {
    $("#mensagem-sucesso").show();
//Atualizando a página após validação simulando envio do formulário
    setTimeout(function() {
      location.reload();
    }, 1500); // 5000 milissegundos = 5 segundos
  }

  return false;
    
});    


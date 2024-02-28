# Testes Unitários com Jest
Este repositório inclui testes unitários escritos com o framework Jest para garantir a integridade e a funcionalidade do código JavaScript. Para auxiliar nos testes, foram utilizados dados mock, fornecendo um ambiente controlado para testar diferentes partes da aplicação de forma isolada.

# Uso de Dados Mock
A função _inOneHour_, foi testada isolando a parte da função teste em que retornava a hora com a função nativa _now()_
com isso teve que ser feito o _mock_ do valor para que o teste tivesse sucesso.

# Vantagens do Uso de Dados Mock:
Isolamento de Testes: Permite testar componentes e funções de forma independente, sem depender de implementações externas ou recursos de rede.
Rapidez e Eficiência: Os dados mock podem ser facilmente manipulados e adaptados para diferentes cenários de teste, o que agiliza o processo de desenvolvimento e teste.
Estabilidade dos Testes: Ao usar dados mock, os testes tornam-se mais estáveis e menos propensos a falhas devido a mudanças externas ou imprevistas.

Esse é um simple repositório, apenas para se ter uma noção do que é teste e seu uso.

Para testar o teste (rsrsrsrs), siga os passos:

 - Instale as depencias
    `npm install`

 - Execute o teste
    `npm test`

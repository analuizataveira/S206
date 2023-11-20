Feature: Testando API Pokemon

Background: Comandos executados antes do inicio de cada teste
    * def url_padrao = https://pokeapi.co/api/v2

Scenario: Testando retorno para o pokemon no indice 4
    Given url_padrao
    And path '/pokemon/7'
    When method get
    Then status 200
    And match response.name == "squirtle"

Scenario: Testando retorno Caterpie e verificando JSON
    Given url_padrao
    And path '/pokemon/caterpie'
    When method get
    Then status 200
    And match response.name == "caterpie"  
    And match response.id == 10  

Scenario: Testando retorno pokemon Rede entrando em um dos elementos do array de idiomas e testeando o retorno do JSON
   Given url_padrao
    And path '/version/1'
    When method get
    Then status 200
    And def idioma = $.name[5].language.url_padrao
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7
# Especificações do Projeto
O projeto trará uma aplicação voltada para usuários que sejam imigrantes, turistas, refugiados ou intercambistas, que trará as ferramentas de seu idioma, facilitando o seu convívio no país em que estejam. O aplicativo contará com serviços de suporte a transporte e alimentação.

Trazendo consigo funcionalidades que indique a localidade de hospedagens, restaurantes, informações culturais e os devidos órgãos para legalização des documentos e para o usuário.

A aplicação será desenvolvida utilizando:

Frontend: HTML, CSS, Bootstrap.

Backend: Javascript, JSON CRUDServer.


## Personas

01 - Raul Gonzalez, de 28 anos, venezuelano, está vindo morar no Brasil em busca de melhores condições de vida. Está à procura de trabalho, porém está com dificuldades de legalizar sua documentação. Está à procura de orientação para colocar sua documentação em dia, para que possa exercer uma profissão de forma regular.

02 - Mary Ann, canadense de 19 anos, estudante de Ciências Biológicas, está chegando ao Brasil para estudar os climas e a fauna brasileira. Está à procura de uma hospedagem perto dos campos de pesquisa e em busca de uma adaptação mais prática. A fim de se aventurar no país e fazer amigos.

03 - Muhammad Habib, 32 anos, sírio, recém-chegado ao Brasil em busca de refúgio. À procura de moradia e condições básicas para sobrevivência. Ao fugir da guerra, está à procura de estabilidade e uma condição de vida digna. Em busca de moradia e disposto a prestar serviços braçais como autônomo.

04 - Antonio Javier, espanhol de 28 anos, vem ao Brasil a turismo. Publicitário em busca de atrações turísticas e contato com a natureza. Afim de conhecer a cultura e a gastronomia local.

05 - Maria Antonella, aposentada de 68 anos, é uma italiana que adora praias de climas tropicais e está sempre à procura de uma bela vista. Visita o país periodicamente. Sempre que está no país, procura locais com facilidades de acesso às áreas litorâneas e com ótimos pontos gastronômicos.

06 - Heng Liang, chinês de 38 anos, vindo ao Brasil atrás de estabilidade financeira, trabalha com artefatos importados. À procura de residências de baixo custo e perto da região central da cidade, para que tenha facilidade de transporte. Dificuldade de interpretação da língua portuguesa.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:
imigrantes, turistas, refugiados ou intercambistas,
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|usuário-imigrante   | Consultar vagas de emprego          | Conseguir me estabilizar  |
|usuário-imigrante   | Procurar moradia                 | Possuir uma residência fixa |
|usuário-imigrante   | Ver os processos de legalização de documentos | Conseguir residir legalmente no Brasil |
|usuário-intercambista   | Informações práticas sobre alugueis e residências | Residir perto de seus campos de pesquisa |
|usuário-intercambista   | Conhecer ambientes de pesquisa de fauna e flora | Conseguir concluir seu projeto |
|usuário-turista   | Descobrir áreas boêmias | Conhecer pessoas |
|usuário-refugiado   | Auxílio sobre documentos | Me legalizar no país  |
|usuário-refugiado   | Buscar residências disponiveis | Possuir residência fixa |
|usuário-refugiado   | Consultar vagas de emprego | Conseguir me estabilizar  |
|usuário-imigrante   | Procurar hospedagens | Me hospedar no país |
|usuário-turista   | Pesquisar pontos turísticos e culturais | Conhecer melhor a cultura do país |
|usuário-turista   | Procurar sobre restaurantes | Ter contato com a gastronomia local |
|usuário-turista   | Consultar locais de hospedagens com acessibilidade a praia | Me hospedar de forma prática e acessivel |
|usuário-turista   | Saber a respeito de restaurantes renomados | Saborear a gastronomia brasileira |
|usuário-imigrante   | Informações sobre praias próximas ao local da hospedagem | Usufruir de praias com praticidade |
|usuário-intercambista   | Buscar residências de baixo custo e próximas da região central | Residir com facilidade de mobilidade |
|usuário-intercambista   | Auxílio sobre a lingua portuguesa | Melhorar sua comunicação com o povo local |
|usuário-imigrante   | Achar locais que possa vender seus produtos | Me sustentar |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Buscar informações sobre legalização de documentos | ALTA | Davi Costa |
|RF-002| Buscar informações sobre moradias e hospedagens | MÉDIA | | Davi Costa |
|RF-003| informar sobre vagas de emprego  | MÉDIA | |
|RF-004| Informar a respeito de pontos turísticos | BAIXA | Gabriel Luiz |
|RF-005| Disponibilizar informações sobre comércios locais | MÉDIA | |
|RF-006| Visualização de mapa onde o usuário se encontra | ALTA | |
|RF-007| Informar a respeito de auxílio a língua portuguesa | MÉDIA | Gabriel Luiz |
|RF-008| Cadastrar objetivo do estrangeiro no país | ALTA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Deve estar disponivel 24 horas por dia |  BAIXA | 
|RNF-004| O sistema deve ter as opções tradução para as principais linguagens | ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O treinamento das ferramentas devem durar no máximo 3 meses |

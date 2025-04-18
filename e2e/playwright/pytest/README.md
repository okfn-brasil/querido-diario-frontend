# Automação de Testes E2E

A automação de testes utiliza **pytest** e **playwright**. O Playwright é uma biblioteca poderosa para automação de navegadores web, e quando combinado com o pytest, oferece um framework de testes flexível, escalável e fácil de manter.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- Python 3.12

## Instalando Dependências

Para configurar o projeto, clone o repositório e instale as dependências necessárias.

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/okfn-brasil/querido-diario-frontend.git

   cd e2e/playwright/pytest
   ```

2. **Configure um ambiente virtual** (opcional, mas recomendado):

   Instale o pipenv

   ```bash
   pip install pipenv
   ```

   Verifique se o pipenv foi instalado com sucesso

   ```bash
   pipenv
   ```

3. **Instale os pacotes Python requeridos via Pipfile**:

   Dentro da pasta `e2e/playwright/pytest`

   ```bash
   pipenv install
   ```

   Isso iniciará o ambiente virtual e instalará as dependências:

   - `pytest`
   - `pytest-playwright`
   - `playwright`

4. **Instale os navegadores do Playwright**:

   Após todas as dependências estarem instaladas, execute o comando para instalar os navegadores do Playwright:

   ```bash
   playwright install    
   ```

   Esse comando fará o download dos binários necessários dos navegadores.

5. **Executando os testes**

Acesse a pasta `/tests`:

```bash
cd /tests
```

Para rodar todos os testes:

```bash
pytest
```

Verifique todas as *markers* disponíveis no arquivo `pytest.ini`.

Exemplo:

```bash
pytest -m pagina_dados
```

---

Após executar qualquer teste, a automação irá gerar um relatório simples em 

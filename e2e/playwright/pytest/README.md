# E2E Test Automation 

The test automation is using  **pytest** and **playwright**. Playwright is a powerful library for automating web browsers, and when combined with pytest, it offers a flexible, scalable, and easy-to-maintain testing framework.

## Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.7 or later

## Installing Dependencies

To set up the project, clone the repository and install the necessary dependencies.

1. **Clone the repository**:

    ```bash
    git clone https://github.com/okfn-brasil/querido-diario-frontend.git
    
    cd e2e/playwright/pytest
    ```

2. **Set up a virtual environment** (optional but recommended):

    Install pipenv
    
    ```bash
    pip install pipenv
    ```
    Check if pipenv is successfully installed
    ```bash
    pipenv
    ```
    
3. **Install the required Python packages via Pipfile**:

    Under e2e/playwright/pytest
    ```bash
    pipenv install
    ```

    This will start and  dependencies in the virtual environment:

    - `pytest`
    - `pytest-playwright`
    - `playwright`

4. **Install Playwright browsers**:

    After all dependencies installed, run the command to install playwright browsers
    ```bash
    playwright install    
    ```

    This command will trigger Playwright to download the necessary browser binaries.


5. **Running the tests**

Go to folder /tests
   ```bash
     cd /tests    
   ```
To run all tests
  ```bash
    pytest
  ```

Check all markers via *pytest.ini* file

Example
```bash
  pytest -m pagina_dados
```

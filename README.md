# codeceptjs-bdd-dh-oranum-tests

RECOMMENDED SECTIONS TO READ AND FOLLOW:
    - 1. Clone this project from [GitHub]
    - 2. Installing this project from the ground up locally
    - 3. Running the tests locally
    - 4. Running dockerized tests (RECOMMENDED)

## 1. Clone this project from [GitHub](https://github.com/hudsonssrosa/codecept-bdd-dh-oranum-tests)

Into your local repository for Git, clone by running this command:

```bash
    cd ./your-own-local-repo/
    git clone git@github.com:hudsonssrosa/codecept-bdd-dh-oranum-tests.git
```

## 2. Installing this project from the ground up locally

In a terminal, into the `./codecept-bdd-dh-oranum-tests/` directory, run the shell script `./cc_local_installation.sh` to get installed CodeceptJS with Playwright and Allure Report as the minimum requirements for tests on BDD approach (with Gherkin sectionalready added in the `codecept.conf.js`):

- For MacOS and Linux:

```bash
    cd codecept-bdd-dh-oranum-tests/
    sh cc_local_installation.sh
```

- For Windows 10:

```bash
    cd codecept-bdd-dh-oranum-tests/
    ./cc_local_installation.sh
```

After the successful installation of all dependencies, a single scenario will be automatically started to check if everything is working as expected in your local machine.

## 3. Running the tests locally

First, decide a way that you are going to run the tests. If you need to set another specific browser, you have also the options such as Cromium `chromium`, Firefox `firefox` or Webkit `webkit`. By default, the browser is **`webkit`** using Playwright. Thus, you can set those values in the `codecept.conf.js` with headless mode if you want (also as default).

For now, you could ignore these changes:

```javascript
    helpers: {
        Playwright: {
            url: 'http://localhost',
            show: false, // Change it to "true" if you don't want the Headless mode
            browser: 'firefox',
            waitForNavigation: "networkidle0"
        }
    }
```

Then, ensure that you are into the `./codecept-bdd-dh-oranum-tests/` directory and run **ALL THE TESTS** through the `run_tests_locally` script:

- For MacOS and Linux:

```bash
    cd codecept-bdd-dh-oranum-tests/
    sh run_tests_locally.sh
```

- For Windows 10:

```bash
    cd codecept-bdd-dh-oranum-tests/
    ./run_tests_locally.sh
```

You can also run just one feature / scenario. So, copy and paste an existing **TAG** into the command as first argument, with or without `@`, as showed below:

```bash
    sh run_tests_locally.sh <PASTE_THE_TAG_HERE>

    # example:
    #   sh run_tests_locally.sh @no-duplicate-psychics
    #   sh run_tests_locally.sh no-duplicate-psychics
```

- Tags available:
  
```Gherkin
    ALL FEATURES:
        @acceptance

        FEATURE 1: 
            @view-all-psychics
            SCENARIOS:
                @view-all-live
                @no-duplicate-psychics
                @psychic-pictures
                @psychic-status

        FEATURE 2:
            @search-filtering
            SCENARIOS:
                @searching-results-dropdown

        FEATURE 3:
            @specific-search
            SCENARIOS:
                @filtering-by-full-name

        FEATURE 4:
            @psychic-livestream
            SCENARIOS:
                @signup-to-get-credits
                @signup-to-add-favorites
                @signup-to-a-suprise-model
                @signup-to-buy-credits
                @signup-to-messenger

        FEATURE 5:
            @psychics-by-topic
            SCENARIOS:
                @topic-results
```

After finishing the execution, if you want to check the results, an Allure Report will be automatically generated and opened in a web browser.

### 3.1. (OPTIONAL) Do you want to execute using an interactive GUI with Codecept UI?

Just call the script passing the argument `ccui`. The benefit is that you can choose features or scenarios to run easily:

```bash
    sh run_tests_locally.sh ccui
```

### 3.2. (OPTIONAL) Do you want to execute tests in multiple browsers?

Inform the argument `multi`. You are able to run in at least 3 different browsers supported with Playwright: Chromium, Firefox and PW-Webkit. You may have flaky tests in this case (stable browsers on execution is not guaranteed depending on the OS):

```bash
    sh run_tests_locally.sh multi
```

```bash
    sh run_tests_locally.sh <PASTE_THE_TAG_HERE> multi
```

## 4. Running dockerized tests (RECOMMENDED)

Regarding the environment or OS that you have, probably you might face flaky tests or even have other unexpected errors during the execution for this project. So, as alternative, you can install [Docker and Docker Compose](https://docs.docker.com/desktop/) to ensure an adequate environment for the tests.

For the first time, to build an image and container may take a long.

Having that requirement met, then follow the instructions below to build an image and run automatically the tests considering also strategies to pass `TAGS` (with or without `@`, like those shown previously under Section 3) and / or `CROSSBROWSER=multi`, if you want:

- RECOMMENDED command:

```bash
    cd ./codecept-bdd-dh-oranum-tests/
    docker-compose run --rm codeceptjs-bdd-oranum
```

- Other execution ways:

```bash
    # docker-compose run -e CROSSBROWSER=multi --rm codeceptjs-bdd-oranum
    # docker-compose run -e TAG=psychics-by-topic --rm codeceptjs-bdd-oranum
    # docker-compose run -e TAG=psychics-by-topic -e CROSSBROWSER=multi --rm codeceptjs-bdd-oranum
```

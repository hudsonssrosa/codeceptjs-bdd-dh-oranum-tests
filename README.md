# codeceptjs-bdd-dh-oranum-tests

RECOMMENDED SECTIONS TO READ AND FOLLOW:
    - 1. Clone this project from [GitHub]
    - 2. Installing this project from the ground up
    - 3. Run the tests implemented for Docler Challenge - Oranium.com

## 1. Clone this project from [GitHub](https://github.com/hudsonssrosa/codecept-bdd-dh-oranum-tests)

Into your local repository for Git, clone by running this command:

```bash
    cd ./your-own-local-repo/
    git clone git@github.com:hudsonssrosa/codecept-bdd-dh-oranum-tests.git
```

## 2. Installing this project from the ground up

In a terminal, into the `./codecept-bdd-dh-oranum-tests/` directory, run the shell script `./cc_local_installation.sh` to get installed CodeceptJS with Playwright and Allure Report as the minimum requirements for tests on BDD approach (with Gherkin sectionalready added in the `codecept.conf.js`):

```bash
    cd ./codecept-bdd-dh-oranum-tests/
    sh cc_local_installation.sh
```

After the successful installation of all dependencies, a single scenario will be automatically started to check if everything is working as expected in your local machine.

## 3. Run the tests implemented for Docler Challenge - Oranium.com

First, ensure that you are into the `./codecept-bdd-dh-oranum-tests/` directory:

```bash
    cd ./codecept-bdd-dh-oranum-tests/
```

Then, decide a way that you are going to run the tests. The default browser is **`webkit`** using Playwright. Thus, if you need to set another specific browser, you have also the options such as Cromium `chromium` and Firefox `firefox`. You can set those values in the `codecept.conf.js`.

```javascript
    helpers: {
        Playwright: {
            url: 'http://localhost',
            show: true,
            browser: 'firefox'
        }
    }
```

## 4. Further information about test executions (OPTIONAL)

### 4.1 Do you want to execute all tests?

```bash
    sh run_tests_locally.sh
```

### 4.2 Do you want to execute using an interactive GUI with Codecept UI?

Just call the script passing the argument `ccui`. The benefit is that you can choose features or scenarios to run easily:

```bash
    sh run_tests_locally.sh ccui
```

### 4.3 Do you want to execute all tests in multiple browsers like Chromium, Firefox and PW-Webkit?

Inform the argument `crossbr`. You are able to run in at least 3 different browsers supported with Playwright: Chromium, Firefox and PW-Webkit. You may have flaky tests in this case (stability of browsers on execution is not guaranteed):

```bash
    sh run_tests_locally.sh crossbr
```

### 4.4 Do you prefer to run a feature or scenario using tags?

Use one of these **tags** below to start running a feature/s or a single scenario:

```bash
    sh run_tests_locally.sh <PASTE_THE_TAG_HERE>
```

You can also run just one feature / scenario as a cross-browser parallel strategy:

```bash
    sh run_tests_locally.sh <PASTE_THE_TAG_HERE> crossbr
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

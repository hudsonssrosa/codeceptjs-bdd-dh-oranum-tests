@echo off

set ARG1=%1
set ARG2=%2

if [%ARG1%] == [] (
    echo "Running all the tests..."
    npx codeceptjs run --features --steps
) else (
    if [%ARG1%] == "ccui" (
        REM RUN TESTS IN CODECEPTJS-UI
        npx codecept-ui --app --features
    )
) else (
    set tag="@%ARG1%"
    if [%ARG1%] == [] (
        tag="'@acceptance'"
    )
    echo "Running the Feature / Scenario with '%tag%'. Command:"
    
    if %ARG2% && [%ARG2%] == ["crossbr"] (
        REM RUN TESTS BY TAGS: - Multiple browsers
        echo "MULTIPLE BROWSERS (WEBKIT, CHROMIUM, FIREFOX)"
        echo "npx codeceptjs run-multiple parallel --features --grep '%tag%'"
        npx codeceptjs run-multiple parallel --features --grep %tag%
    ) else (
        REM RUN TESTS BY TAGS: - Single browser
        echo "npx codeceptjs run --features --steps --grep '%tag%'"
        npx codeceptjs run --features --steps --grep %tag%
    )   

)

    REM RUN TESTS USING TERMINAL IN YOUR WAY - SEE ALL OPTIONS AND EXAMPLES

    REM Run all tests
    REM npx codeceptjs run --features --steps --grep '@acceptance'

    REM Run a specific feature. Example:
    REM npx codeceptjs run --features --steps --grep '@view-all-psychics'
    REM npx codeceptjs run --features --steps --grep '@search-filtering'
    REM npx codeceptjs run --features --steps --grep '@specific-search'
    REM npx codeceptjs run --features --steps --grep '@psychic-livestream'

    REM Run a specific scenario. Change the tag to another existing in the .feature files. Example:
    REM npx codeceptjs run --features --steps --grep '@psychics-by-topic'

    REM Run the tests considering DEBUG logs. Example:
    REM DEBUG=pw:api npx codeceptjs run --features --steps --grep '@view-all-psychics'

    REM Run tests with Codecept UI. Example:
    REM npx codecept-ui --app --features

    REM Run in parallel with workers (choose the number of workers). Example:
    REM npx codeceptjs run-workers --features 2
    REM npx codeceptjs run-workers --features 2 --grep '@view-all-psychics'

    REM Run in multiple browsers (default: chromium, firefox, webkit). Example:
    REM npx codeceptjs run-multiple --features chromium firefox
    REM npx codeceptjs run-multiple parallel --features --grep '@acceptance'

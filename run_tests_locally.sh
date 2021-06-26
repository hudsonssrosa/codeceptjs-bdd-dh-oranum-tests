#!/bin/bash

if [ $# -eq 0 ] ; then
    echo "Running all the tests..."
    npx codeceptjs run --features --steps

elif [ ${1} == "ccui" ] ; then
    # RUN TESTS IN CODECEPTJS-UI
    npx codecept-ui --app --features

else
    tag=`echo @${1}`
    if [ ${1} -eq 0 ] ; then
        tag=`echo '@acceptance'`
    fi
    echo "Running the Feature / Scenario with '${tag}'. Command:"
    # RUN TESTS SPECIFIED BY TAGS
    
    if [[ ${2} && ${2} == "crossbr" ]] ; then
        echo "MULTIPLE BROWSERS (WEBKIT, CHROMIUM, FIREFOX)"
        echo "npx codeceptjs run-multiple parallel --features --grep '${tag}'"
        npx codeceptjs run-multiple parallel --features --grep ${tag}
    else
        echo "npx codeceptjs run --features --steps --grep '${tag}'"
        npx codeceptjs run --features --steps --grep ${tag}
    fi

fi

    ## RUN TESTS USING TERMINAL IN YOUR WAY - SEE ALL OPTIONS AND EXAMPLES

    ## Run all tests
    # npx codeceptjs run --features --steps --grep '@acceptance'

    ## Run a specific feature. Example:
    # npx codeceptjs run --features --steps --grep '@view-all-psychics'
    # npx codeceptjs run --features --steps --grep '@search-filtering'
    # npx codeceptjs run --features --steps --grep '@specific-search'
    # npx codeceptjs run --features --steps --grep '@psychic-livestream'

    ## Run a specific scenario. Change the tag to another existing in the .feature files. Example:
    # npx codeceptjs run --features --steps --grep '@psychics-by-topic'

    ## Run the tests considering DEBUG logs. Example:
    # DEBUG=pw:api npx codeceptjs run --features --steps --grep '@view-all-psychics'

    ## Run tests with Codecept UI. Example:
    # npx codecept-ui --app --features

    ## Run in parallel with workers (choose the number of workers). Example:
    # npx codeceptjs run-workers --features 2
    # npx codeceptjs run-workers --features 2 --grep '@view-all-psychics'

    ## Run in multiple browsers (default: chromium, firefox, webkit). Example:
    # npx codeceptjs run-multiple --features chromium firefox
    # npx codeceptjs run-multiple parallel --features --grep '@acceptance'

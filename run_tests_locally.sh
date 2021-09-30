#!/bin/bash

echo "-----> ARG 1: ${1}"
echo "-----> ARG 2: ${2}"

# No external arguments informed
if [ $# -eq 0 ] ; then
    echo "Running all the tests..."
    npx codeceptjs run --features --steps

# One external argument with 'ccui' to run in Codecept UI
elif [ ${1} == "ccui" ] ; then
    echo "Opening Codecept UI..."
    npx codecept-ui --app --features

# Running Dockerized tests
elif [ ${1} == "docker" ] ; then
    docker-compose run --rm codeceptjs-bdd-oranum

# Running Dockerized tests in parallel
elif [ ${1} == "docker_multi" ] ; then
    docker-compose run -e CROSSBROWSER=multi --rm codeceptjs-bdd-oranum

# Single or multiple browsers with or withot Feature / Scenario tags
else
    with_parallel=""
    crossbrowser="multi"
    tag=`echo --grep @${1}`
    tag_norm=`echo ${tag} | sed 's/@//g'`
    
    if [[ ${1} && ${1} == ${crossbrowser} ]] ; then 
        with_parallel="-multiple parallel"
        tag_norm=""
    
    elif [[ ${2} && ${2} == ${crossbrowser} ]] ; then
        with_parallel="-multiple parallel"
        echo "-----> MULTIPLE BROWSERS IN PARALLEL: Webkit, Chromium, Firefox --- '${tag_norm}'"
        
    else
        with_parallel=""
        echo "-----> Running single browser the Feature / Scenario with '${tag_norm}'. Command:"
    fi
        
    echo "(command: npx codeceptjs run${with_parallel} --features --steps ${tag_norm})"
    npx codeceptjs run${with_parallel} --features --steps ${tag_norm}
fi
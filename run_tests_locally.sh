#!/bin/bash
## Uncomment the line that you wish to run with throughout script

# Run all tests
npx codeceptjs run --features --steps --grep '@acceptance'

# Run a specific feature. Example:
# npx codeceptjs run --features --steps --grep '@view-all-psychics'
# npx codeceptjs run --features --steps --grep '@search-filtering'
# npx codeceptjs run --features --steps --grep '@specific-search'
# npx codeceptjs run --features --steps --grep '@psychic-livestream'

# Run a specific scenario. Change the tag to another existing in the .feature files. Example:
# npx codeceptjs run --features --steps --grep '@psychics-by-topic'

# Run the tests considering DEBUG logs. Example:
# DEBUG=pw:api npx codeceptjs run --features --steps --grep '@view-all-psychics'

# Run in parallel with workers (choose the number of workers). Example:
# npx codeceptjs run-workers --features 2

# Run tests with Codecept UI. Example:
# npx codecept-ui --app --features

# Run in multiple browsers (default: chrome, safari, firefox, ...). Example:
# npx codeceptjs run-multiple --features chrome firefox safari
# npx codeceptjs run-multiple parallel --features firefox chrome --grep '@acceptance'

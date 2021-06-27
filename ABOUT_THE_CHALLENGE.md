# codeceptjs-bdd-dh-oranum-tests

Project created in CodeceptJS-BDD aiming to validate the requirements from DH's challenge on the product www.oranum.com

# 1 - OVERVIEW ABOUT TEST AUTOMATION CHALLENGE

- Are the tests implemented using CodeceptJS (in Javascript)?
  - YES 👍

- Are the project adopting BDD approach with tests in Gherkin? 
  - YES 👍

- Are there a README.md file with the instructions about how to execute the test cases?
  - YES 👍

- Are the test results being reported using Allure Report?
  - YES 👍

## 1.1 - About the challenge requirements details

Please, read some considerations around those requirements.
Basically, the REQ-1 and REQ-4 were partially adapted to meet those requirements properly, which the latter being **outdated** against the currently Oranum released. Additionally, the missing scenarios were described in Gherkin but they were commented. See the details in the sections below.

### 1.1.1 - REQ-1 - Done, but: There are Outdated Details 👍 🙋

1) There is no information in the application about `languages spoken` or `rating` as proposed in the requirements.
2) The tests are considering "View All Live Psychics" in place to "See More" (this last one doesn't exist in any page of Oranum application).

### 1.1.2 - REQ-2 - implemented 100% 👍

### 1.1.3 - REQ-3 - implemented 100% 👍

### 1.1.4 - REQ-4 - Done, but: There are Outdated Details 👍 🙋

1) The option to "Vote" and "Turn Camera On" buttons are not displayed in Livestream applet.
2) For the "Private Show" button was considered the validations around the "START SESSION" button.

### 1.1.5 - REQ-5 - implemented 100% 👍

1) The topic about "Home" was considered as "Family" in place.

# 2 - PROPOSAL

Cover the below requirements with automated tests. Please use JavaScript, BDD and CodeceptJS to implement the test cases. Upload your code to a git repository and write a README.md file with details of how to execute the test cases. Please also use some reporting tool, such as allure.

## [ORANUM Website](www.oranum.com) - CHALLENGE REQUIREMENTS

Oranum is the world’s largest spiritual community, and the only live webcam platform that allows users to video chat with psychics and spiritual advisors live and in the comfort of their own home. Though recognized worldwide for its psychics, anyone with a spiritual message or skill (ranging from horoscope, dream interpretation, reiki healing, tarot card reading, meditation, clairvoyance, to even spell casting) can use Oranum. Oranum’s mission is to help connect, inspire and empower the world’s spiritual community by bringing ancient knowledge to the digital age.

### REQ-1

"Show More" button is displayed when scrolling down the home page.

Clicking on the button should display new psychics. No duplicate psychic should be displayed and all of them should have a profile picture, languages spoken, nickname, rating and status (private/live/offline)

## REQ-2

Searching for partial text should display only matching psychics. Example:

- Search for 'Matt', all results should contain 'matt'
- Search for 'Myst', all results should contain 'myst'
- Search for 'Ann', all results should contain 'ann'
- Search for 'psy', all results should contain 'psy'

## REQ-3

Searching for full text should show a specific psychic profile. Example:

- Search for 'MattWarren', MattWarren's profile should be displayed
- Search for 'MysticMilena', MysticMilena's profile should be displayed
- Search for 'EternalFlame', EternalFlame's profile should be displayed

## REQ-4

Open the livestream of any psychic, make sure the psychic is live (https://www.oranum.com/en/chat/MattWarren this page, for example).

Validate that the following buttons will trigger a 'Sign up' overlay to be displayed:

- Get Credits button
- Add to favorites button
- Surprise Model button
- Vote button
- Turn camera on button
- Start Private Show button (on the top-right corner)
- Start Private Show button (on the bottom-center)
- Buy credits button

## REQ-5

On the home page, selecting different topics should display only matching psychics.

Topics to validate:

- Clicking on Love and Relationship shows matching psychics
- Clicking on Tarot and Cards shows matching psychics
- Clicking on Dream Interpretation shows matching psychics
- Clicking on Astrology shows matching psychics
- Clicking on Spiritual Guides shows matching psychics
- Clicking on Home and Family shows matching psychics
- Clicking on Numerology shows matching psychics

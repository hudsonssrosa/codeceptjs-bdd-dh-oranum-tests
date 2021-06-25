# codecept-bdd-dh-oranum-tests
Project created in CodeceptJS-BDD with the objective of validating the requirements from DH's challenge on the product www.oranum.com

# [ORANUM Website](www.oranum.com)

Oranum is the world’s largest spiritual community, and the only live webcam platform that allows users to video chat with psychics and spiritual advisors live and in the comfort of their own home. Though recognized worldwide for its psychics, anyone with a spiritual message or skill (ranging from horoscope, dream interpretation, reiki healing, tarot card reading, meditation, clairvoyance, to even spell casting) can use Oranum. Oranum’s mission is to help connect, inspire and empower the world’s spiritual community by bringing ancient knowledge to the digital age.

## REQ-1

"Show More" button is displayed when scrolling down the home page.

Clicking on the button should display new psychics. No duplicate psychic should be displayed and all of them should have a profile picture, languages spoken, nickname, rating and status (private/live/offline)
### Outdated Details from Req-1

1) There are no `languages spoken` or `rating` presented in the proposed requirement, after clicking on "See More", which was considered as "View All Live Psychics" in place, actually.

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

# REQ-4

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

# REQ-5

On the home page, selecting different topics should display only matching psychics.

Topics to validate:

- Clicking on Love and Relationship shows matching psychics
- Clicking on Tarot and Cards shows matching psychics
- Clicking on Dream Interpretation shows matching psychics
- Clicking on Astrology shows matching psychics
- Clicking on Spiritual Guides shows matching psychics
- Clicking on Home and Family shows matching psychics
- Clicking on Numerology shows matching psychics
@psychic-livestream
Feature: Open a Psychic's Livestream
	In order to meet a known psychic
	As a user
	I want to be able to sign up for a livestream

	Background: Open Oranum website
		Given that Oranum website is open

	@signup-to-get-credits
	Scenario: Sign up first to Get Credits
		Given that a live profile is open
		When I press to get free credits
		Then a sign up page is showed

	@signup-to-add-favorites
	Scenario: Sign up first to Add Favorites
		Given that a live profile is open
		When I press add to favorites
		Then a sign up page is showed

	@signup-to-a-suprise-model
	Scenario Outline: Sign up first to have a Surprise Model
		Given that a live profile is open
		When I press to get a surprise "<modelId>"
		Then a sign up page is showed

		Examples:
			| modelId                     |
			| OranumSurprisesBird         |
			| OranumSurprisesCards        |
			| OranumSurprisesMoon         |
			| OranumSurprisesGlobe        |
			| OranumSurprisesDiamond      |
			| OranumSurprisesDreamcatcher |
			| OranumSurprisesFox          |
			| OranumSurprisesHeart        |
			| OranumSurprisesSun          |
			| OranumSurprisesPhoenix      |
			| OranumSurprisesYinYang      |
			| OranumSurprisesFlower       |
			| OranumSurprisesEye          |
			| OranumSurprisesHand         |
			| OranumSurprisesTree         |
			| OranumSurprisesHuman        |
			| OranumSurprisesPattern      |
			| OranumSurprisesAngel        |
			| OranumSurprisesElephant     |
			| OranumSurprisesSymbol       |
			| OranumSurprisesBuda         |

	# @signup-to-vote
	# Scenario: Sign up first to Vote
	# 	Given that a live profile is open
	# 	When I press to vote
	# 	Then a sign up page is showed

	# @signup-to-turn-camera-on
	# Scenario: Sign up first to Turn Camera On
	# 	Given that a live profile is open
	# 	When I press to turn the camera on
	# 	Then a sign up page is showed

	# @signup-to-start-private-show
	# Scenario: Sign up first to Start a Private Show
	# 	Given that a live profile is open
	# 	When I press to start a private show
	# 	Then a sign up page is showed

	@signup-to-buy-credits
	Scenario: Sign up first to Buy credits
		Given that a live profile is open
		When I press to buy credits
		Then a sign up page is showed



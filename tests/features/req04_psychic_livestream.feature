@psychic-livestrea @acceptance
Feature: Open a Psychic's Livestream
	In order to meet a known psychic
	As a user
	I want to be able to sign up for a livestream

	Background: Open Oranum website
		Given that a live profile is open

	@signup-to-get-credits
	Scenario: Sign up first to Get Credits
		When I press to get credits
		Then a sign up page is showed

	@signup-to-add-favorites
	Scenario: Sign up first to Add Favorites
		When I press to add to favorites
		Then a sign up page is showed

	@signup-to-a-suprise-model
	Scenario: Sign up first to have a Surprise Model
		When I press to have a surprise model
		Then a sign up page is showed

	@signup-to-vote
	Scenario: Sign up first to Vote
		When I press to vote
		Then a sign up page is showed

	@signup-to-turn-camera-on
	Scenario: Sign up first to Turn Camera On
		When I press to turn the camera on
		Then a sign up page is showed

	@signup-to-start-private-show
	Scenario Outline: Sign up first to Start a Private Show
		When I press to start a private show
		Then a sign up page is showed

	@signup-to-buy-credits
	Scenario Outline: Sign up first to Buy credits
		When I press to buy credits
		Then a sign up page is showed



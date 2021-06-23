@psychics-view @acceptance
Feature: Psychics View
	In order to check psychics information
	As a user
	I want to be able to view all profiles available

	Background: Open Oranum website
		Given that Oranum website is open

	@view-all-psychics
	Scenario: View all the psychics
		Given that I scroll until the View all live psychics
		When I access the View all live psychics
		Then all the psychics are displayed

	@no-duplicate-psychics
	Scenario: No duplicate psychics are displayed
		Given that all the psychics are viewed
		When I verify all the psychic profile nicknames
		Then each profile is displayed only once

	@psychic-pictures
	Scenario: Psychic pictures displayed
		Given that all the psychics are viewed
		When I verify all the psychic profile nicknames
		Then all psychic pictures are displayed

	@psychic-language-spoken
	Scenario: Psychic languages spoken displayed
		Given that all the psychics are viewed
		When I verify all the psychic profile nicknames
		Then all psychics has its languages spoken displayed

	@psychic-rating
	Scenario: Psychic rating displayed
		Given that all the psychics are viewed
		When I verify all the psychic profile nicknames
		Then all psychics has its rating displayed

	@psychic-rating
	Scenario: Psychic status displayed
		Given that all the psychics are viewed
		When I verify all the psychic profile nicknames
		Then all psychics has its status displayed

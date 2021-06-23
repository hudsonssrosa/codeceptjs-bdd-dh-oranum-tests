@search-for-psychics @acceptance
Feature: Psychics Searching Results
	In order to find psychics
	As a user
	I want to be able to find only results that matches the search

	@searching-results
	Scenario Outline: Searching results match
		Given that Oranum website is open
		When I type "<name>" on search
		Then only matching "<results>" are displayed

		Examples:
			| name | results |
			| Matt | matt    |
			| Myst | myst    |
			| Ann  | ann     |
			| psy  | psy     |


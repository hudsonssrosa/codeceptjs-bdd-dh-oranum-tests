@specific-search  @acceptance
Feature: Searching for a Specific Psychic
	In order to find a known psychic
	As a user
	I want to be able to find a specific profile

	@searching-by-full-name
	Scenario Outline: Specific profile search
		Given that Oranum website is open
		When I type "<name>" on search
		Then only the "<profile>" searched is displayed
		And 

		Examples:
			| name         | profile      |
			| MattWarren   | MattWarren   |
			| MysticMilena | MysticMilena |
			| EternalFlame | EternalFlame |


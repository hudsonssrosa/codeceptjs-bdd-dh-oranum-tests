@psychic-by-topics
Feature: Select a Topic
	In order to find a psychic by topics
	As a user
	I want to be able to see all corresponding profiles filtered

	@select-a-topic
	Scenario Outline: Select a topic with its matching psychics
		Given that Oranum website is open
		When I choose a "<topic>"
		Then the "<profile>" is matching the current topic

		Examples:
			| topic       | profile                                         |
			| Love        | LoveDove477, PeaceLight, spiritlover0, Loveknot |
			| Tarot       | Gypsy88, MysticalDiana, AllastorsReading        |
			| Dreams      | TheTruth, MidNightStars, PsychicEmm             |
			| Astrology   | Elevenmoons, PsychicTatjana, GaryGuru           |
			| Clairvoyant | TheTruth, Nicovoyant, Caetano                   |
			| Family      | LadyMaria, EternalFlame, PsychicEmm             |
			| Numerology  | TheThirdEye, FAIRYSECRETS, DianaPsychic         |

Feature: Search for an article on Wikipedia

    Scenario: We should find one article and land on its page

        Given I open web browser for wikipedia;

        When I type "Nicola Tesla" on the search box
        Then I click on search button

        Then the URL should be "https://en.wikipedia.org/wiki/Nikola_Tesla";
        Then I want to see an image under title "Nikola Tesla" on the right column
        Then I want to read information about "Born", "Died", "Education" on the right column
        Then I want to read a section about "Early years"
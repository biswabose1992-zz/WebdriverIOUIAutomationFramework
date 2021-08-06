Feature: Validate user sucessfully able to add & remove items from cart

  Scenario Outline: As a user, I want to add & remove items from cart

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see products page
    Then I add 2 cheapest products into my basket
    Then I remove the cheapest product from my basket
    Then I checkout products from my basket
    Examples:
      | username | password             |
      | standard_user | secret_sauce |


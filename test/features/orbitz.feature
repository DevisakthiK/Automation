Feature: Performing a flight search

    As a user on the Orbitz home page
    I want to search for an itinerary
    Because I want to book the ticket

    Background:

        Given I am on the Orbitz Home page
        And I click on Flights Tab

    Scenario Outline: Performing seacrh for a ticket by passing test data as data table
        When I click on One way submenu
        And Enter Flying From City as <from>
        And Enter Flying To City as <to>
        And Enter Departing Date as <fromDate>
        And Click on Search Button
        Then I should get a result page with flight options

        Examples:
        |from|  |to|    |fromDate|
        |"MEL"| |"MAA"| |04/20/2019|
        

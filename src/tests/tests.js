let homePage = require('../pages/homePage.js');
let favoritePage = require('../pages/favoritePage.js')

describe('Search for repository and add to favorites', function() {

    it('Search for repo', function() {
        homePage.get();
        homePage.enterSearchQuery("QA");
        homePage.sleep(3000);
        homePage.chooseLanguage("Python");
        homePage.sleep(3000);
        homePage.assertListIsDisplayed();
        homePage.assertAllReposDueToQuery("Python")
        homePage.compareTitleNameWithQuerySearch("QA");
        homePage.assertSearchByLanguageWorksCorrect("Python");
    });
    it("Add repo to favorites", function() {
        homePage.addToFavorite();
        homePage.sleep(1000);
        homePage.assertRepoWasAddedToFavourite();
        homePage.goToFavoritesTabAndEnterPassword("1234");
        homePage.sleep(1000);
        favoritePage.assertUserIsOnFavoritesPage();
        favoritePage.assertCardInFavouritesIsPresent();
        favoritePage.assertTitleIsEqualToExpected("QA");
    });

    it("Remove repo from favorites", function() {
        favoritePage.removeFromFavorite();
        favoritePage.assertItemWasRemovedFromFavorites();
    });

     it('Add repo to favorite and remove it from home page', function() {
            homePage.get();
            homePage.enterSearchQuery("QA");
            homePage.sleep(3000);
            homePage.chooseLanguage("TypeScript");
            homePage.sleep(3000);
            homePage.assertListIsDisplayed();
            homePage.assertAllReposDueToQuery("TypeScript")
            homePage.compareTitleNameWithQuerySearch("qa");
            homePage.assertSearchByLanguageWorksCorrect("TypeScript");
            homePage.addToFavorite();
            homePage.assertRepoWasAddedToFavourite();
            homePage.removeFromFavoriteFromHomePage();
            homePage.assertRepoWasDeletedToFavourite();

});

});
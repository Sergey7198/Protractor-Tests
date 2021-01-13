let favoritePage = function() {

    //-----------locators-----------
    let itemInFavorites = element(by.css(".repo-list__item"));
    let titleNameOnFavoritesPage = element(by.css("mat-card:nth-child(1) .repo-list__name"));
    let removeFromFavoriteButton = element(by.css("app-favorite-btn > button"));

    //-----------methods-----------


    this.removeFromFavorite = function() {
        removeFromFavoriteButton.click();
    }

    //-----------assertions-----------

    this.assertUserIsOnFavoritesPage = function() {
        let expectedUrl = "http://localhost:4200/favorites";
        expect(browser.getCurrentUrl()).toEqual(expectedUrl);
    };

    this.assertCardInFavouritesIsPresent = async () => {
        expect(await itemInFavorites.isDisplayed()).toBe(true);
    };


    this.assertTitleIsEqualToExpected = function (text1) {
        titleNameOnFavoritesPage.getText().then(function(text) {
        console.log(text)
        expect(text.includes(text1)).toBe(true);
        });

    };


    this.assertItemWasRemovedFromFavorites = async () => {
        expect(await itemInFavorites.isPresent()).toBe(false);

    }

};
module.exports = new favoritePage();
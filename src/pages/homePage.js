let homePage = function() {

    // -------- locators---------
    let searchInput = element(by.css("[formcontrolname='searchQuery']"));
    let langFilter = element(by.id("mat-select-0"));
    let filterOption = ".mat-option-text";
    let foundedList = element(by.css(".mat-card.mat-focus-indicator.repo-list__item"));
    let langSearchResults = element(by.css("mat-card:nth-child(1) tr:nth-child(1) > td"));
    let addToFavoriteButton = element(by.css("mat-card:nth-child(1) button > i"));
    let attributeOfFavoriteButton = element(by.css("mat-card:nth-child(1) app-favorite-btn"));
    let favoriteLink = element(by.css("body > app-root > app-header > header > nav > a:nth-child(2)"));
    let repoTitle = element(by.css("mat-card:nth-child(1) .repo-list__name"));
    let table = element.all(by.css("table > tr:nth-child(1) > td"));
    let removeFromFavoriteOnHomePage = element(by.css("mat-card:nth-child(1) button > i"));


    // -------- methods---------

    this.sleep = function(time) {
        browser.sleep(time);
    };

    this.get = function() {
        browser.get('http://localhost:4200/');
    };

    this.enterSearchQuery = function(name) {
        searchInput.sendKeys(name);
    };

    this.chooseLanguage = function(text) {
        langFilter.click();
        browser.sleep(1000);
        let option = element(by.cssContainingText(filterOption, text));
        option.click();
    };

    this.compareTitleNameWithQuerySearch = function (text1) {
        repoTitle.getText().then(function(text) {
        expect(text.includes(text1)).toBe(true);
        });
    }

    this.addToFavorite = function() {
        addToFavoriteButton.click();
    }

    this.removeFromFavoriteFromHomePage = function () {
    removeFromFavoriteOnHomePage.click();
    }

    this.goToFavoritesTabAndEnterPassword = function(password) {
        favoriteLink.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000);
        var alert = browser.switchTo().alert();
        alert.sendKeys(password);
        alert.accept()
    }

    // -------- assertions---------

    this.assertListIsDisplayed = function() {
        expect(foundedList.isPresent()).toBe(true);
    };

    this.assertSearchByLanguageWorksCorrect = function(text) {
        let lang = langSearchResults.getText();
        expect(lang).toContain(text);
    }

    this.assertRepoWasAddedToFavourite = function() {
        expect(attributeOfFavoriteButton.getAttribute('ng-reflect-is-favorite')).toEqual('true')
    }

    this.assertRepoWasDeletedToFavourite = function() {
            expect(attributeOfFavoriteButton.getAttribute('ng-reflect-is-favorite')).toEqual('false')
        }


    this.assertAllReposDueToQuery = function(text1) {
        table.each(function(element) {
            element.getText().then(function(text) {
                expect(text).toBe(text1)
            });
        });
    }


};

module.exports = new homePage();
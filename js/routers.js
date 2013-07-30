angular.module('App', [])
.config(function ($compileProvider){
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: HistoryCtrl,
        templateUrl: 'partials/history.html'
    })
    .when('/history', {
        controller: HistoryCtrl,
        templateUrl: 'partials/history.html'
    })
    .when('/tag', {
        controller: TagCtrl,
        templateUrl: 'partials/tag.html'
    })
    .when('/account', {
        controller: AccountCtrl,
        templateUrl: 'partials/account.html'
    });
});

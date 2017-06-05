var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/Project/home/partial-home.html'
        })

        // nested why
        .state('home.why', {
            url: '/why',
            templateUrl: '/Project/home/partial-home-why.html'
        })

        // nested list with market-need data
        .state('home.market-need', {
            url: '/market-need',
            templateUrl: '/Project/home/partial-home-market-need.html'
        })

        // tutorial PAGE =================================
        .state('tutorial', {
            url: '/tutorial',
            templateUrl: '/Project/tutorial/partial-tutorial.html'

        })
//tutorials
    //basics of python
        //hello-world
        .state('hello-world', {
            url:'/hello-world',
            templateUrl:'/Project/tutorial/basics-of-python/ipythonFiles/hello-world.html'
        })
        //Data-types-and-variables
        .state('data-type-variables',{
            url:'/data-type-variables',
            templateUrl:'/Project/tutorial/basics-of-python/data-type-variables.html'
        })
        .state('data-type-variables-ipython',{
            url:'/data-type-variables-ipython',
            templateUrl:'/Project/tutorial/basics-of-python/ipythonFiles/dtv-py.html'
        })
        //numbers
        .state('numbers',{
            url:'/numbers',
            templateUrl:'/Project/tutorial/basics-of-python/numbers.html'
        })
        .state('numbers-ipython',{
            url:'/numbers-ipython',
            templateUrl:'/Project/tutorial/basics-of-python/ipythonFiles/numbers-ipython.html'
        })
        .state('lists',{
            url:'/lists',
            templateUrl:'/Project/tutorial/basics-of-python/lists.html'
        })
        .state('lists-ipython',{
            url:'/lists-ipython',
            templateUrl:'/Project/tutorial/basics-of-python/ipythonFiles/lists-ipython.html'
        })
        //end

    //end of basics-of-python
//end tutorials
;});

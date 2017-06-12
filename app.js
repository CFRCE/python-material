var routerApp = angular.module("routerApp", ["ui.router"]);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state("home", {
            url: "/home",
            templateUrl: "/Project/home/partial-home.html"
        })

        // nested why
        .state("home.why", {
            url: "/why",
            templateUrl: "/Project/home/partial-home-why.html"
        })

        // nested list with market-need data
        .state("home.market-need", {
            url: "/market-need",
            templateUrl: "/Project/home/partial-home-market-need.html"
        })

        // tutorial PAGE =================================
        .state("tutorial", {
            url: "/tutorial",
            templateUrl: "/Project/tutorial/partial-tutorial.html"

        })
//tutorials
    //basics of python
        //hello-world
        .state("hello-world", {
            url:"/tutorial/hello-world",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/hello-world.html"
        })
        //Data-types-and-variables
        .state("data-type-variables",{
            url:"/tutorial/data-type-variables",
            templateUrl:"/Project/tutorial/basics-of-python/data-type-variables.html"
        })
        .state("data-type-variables-ipython",{
            url:"/tutorial/data-type-variables-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/dtv-py.html"
        })
        //numbers
        .state("numbers",{
            url:"/tutorial/numbers",
            templateUrl:"/Project/tutorial/basics-of-python/numbers.html"
        })
        .state("numbers-ipython",{
            url:"/tutorial/numbers-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/numbers-ipython.html"
        })
        //lists
        .state("lists",{
            url:"/tutorial/lists",
            templateUrl:"/Project/tutorial/basics-of-python/lists.html"
        })
        .state("lists-ipython",{
            url:"/tutorial/lists-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/lists-ipython.html"
        })
        //Basic Operators
        .state("basicop",{
            url:"/tutorial/basicop",
            templateUrl:"/Project/tutorial/basics-of-python/basicop.html"
        })
        .state("basicop-ipython",{
            url:"/tutorial/basicop-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/basicop-ipython.html"
        })
        //string Operations
        .state("strop",{
            url:"/tutorial/string-operations",
            templateUrl:"/Project/tutorial/basics-of-python/strop.html"
        })
        .state("strop-ipython",{
            url:"/tutorial/string-operations-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/strop-ipython.html"
        })
        //Conditions
        .state("conditions",{
            url:"/tutorial/conditions",
            templateUrl:"/Project/tutorial/basics-of-python/conditions.html"
        })
        .state("conditions-ipython",{
            url:"/tutorial/conditions-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/conditions-ipython.html"
        })
        //loops
        .state("loops",{
            url:"/tutorial/loops",
            templateUrl:"/Project/tutorial/basics-of-python/loops.html"
        })
        .state("loops-ipython",{
            url:"/tutorial/loops-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/loops-ipython.html"
        })
        //functions
        .state("functions",{
            url:"/tutorial/functions",
            templateUrl:"/Project/tutorial/basics-of-python/functions.html"
        })
        .state("functions-ipython",{
            url:"/tutorial/functions-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/functions-ipython.html"
        })
        //modules and packages
        .state("modules-and-packages",{
            url:"/tutorial/modules-and-packages",
            templateUrl:"/Project/tutorial/basics-of-python/modules-and-packages.html"
        })
        .state("modules-and-packages-ipython",{
            url:"/tutorial/modules-and-packages-ipython",
            templateUrl:"/Project/tutorial/basics-of-python/ipythonFiles/modules-and-packages-ipython.html"
        })
//modules
    //numpy
        //Why Numpy
        .state("why-numpy",{
            url:"/tutorial/why-numpy",
            templateUrl:'/Project/tutorial/numpy/why-numpy.html'
        })
        .state('why-numpy-ipython',{
            url:"tutorial/why-numpy-ipython",
            templateUrl:'/Project/tutorial/numpy/ipythonFiles/why-numpy-ipython.html'
        })
        //end

    //end of basics-of-python
//end tutorials
;});

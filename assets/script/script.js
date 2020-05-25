$(document).ready(function () {

    //================================================================== SIDE BAR LINKS =================================================================

    //---------------------------GitHub------------------------------
    //GitHub Mouse Over change
    $("#github").css('cursor', 'pointer');

    //Linking Page GitHub
    $("#github").on("click", function () {
        window.open("https://github.com/korkdaork");
    });

    //-------------------------LinkedIn------------------------------
    //LinkedIn Mouse Over Events
    $("#linkedin").css('cursor', 'pointer');

    //Linking Page LinkedIn
    $("#linkedin").on("click", function () {
        window.open("https://www.linkedin.com/in/yevgeniy-rokhin-3439691a4/");
    });

    //---------------------------Stack Overflow-------------------------
    //Stack Overflow Mouse Over change
    $("#stack").css('cursor', 'pointer');

    //Linking Page Stack
    $("#stack").on("click", function () {
        window.open("https://stackoverflow.com/");
    });

    //========================================================== PORTFOLIO LINKS ==========================================================================

    //Mouse Over
    $(".hoverPointer").css('cursor', 'pointer')

    //---------------------Day Scheduler--------------------------
    $(".dayPlanner").on("click", function () {
        window.open("https://github.com/korkdaork/Day-Scheduler");
    });

    //--------------------Weather Dash--------------------------
    $(".weatherDash").on("click", function () {
        window.open("https://github.com/korkdaork/WeatherDash");
    });

    //--------------------Project1Dinner/Meal-Anator-----------------

    $(".mealAnator").on("click", function () {
        window.open("https://github.com/EricGip/Project1Dinner");
    });


    //========================================================= CONTACT SECTION ==========================================================================

    //future functions

});
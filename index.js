$(document).on("submit", function () {
        let firstname = $('#fname').val();
        let lastname = $('#lname').val();
        $("#jumbotron").text(firstname + " " + lastname);
        return false;
    });
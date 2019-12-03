$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Form validation
    var formComplete = true;
    if ($("#brg").val() === "") {
      formComplete = false;
    }
    if (formComplete === true) {
      // Gather user inputs
      var newBurger = {
        burger_name: $("#brg")
          .val()
          .trim(),
        devoured: 0
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added a new burger");
        // Reload the page to get the updated list
        location.reload();
      });
      //});
    } else {
      //if does not pass validation throw error
      alert("Please Enter a Burger");
    }
  });

  $(".devour-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });

  $(".remove-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      //       // Reload the page to get the updated list
      location.reload();
    });
  });
});

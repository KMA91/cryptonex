(function () {
    var vm = this;
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCRucsZt06BEx1pELBhIdeIRZjtwhytvfQ",
      authDomain: "cryptonex-69115.firebaseapp.com",
      databaseURL: "https://cryptonex-69115.firebaseio.com",
      projectId: "cryptonex-69115",
      storageBucket: "",
      messagingSenderId: "671894460805"
    };
    firebase.initializeApp(config);

    var db = firebase.database();

    document.getElementById("submitEmail").onclick = submit;

    function submit(e) {
        e.preventDefault();

        var id = Date.now()
        var email = $('#emailModal #emailInput').val();
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(email)) {
            db.ref('emails/' + id).set({
                id: id,
                email: email
            });
            $('#emailInput, #emailHelp').css("visibility", "hidden");
            $('#submitEmail').prop("disabled", true);
            $("#result").text(email + " was added successfully!");
            $("#result").css("color", "palegreen");
            delayedAlert();


        } else {
            $('#result').css("color", '#eee8aa');
            $("#result").text(email + " is not a valid email, please try again. 🤔");
        }
    };

    vm.openModal = () => {
        $('#emailModal').on('shown.bs.modal', function () {
          $('#emailInput').focus();
        });
    }

    vm.hideModal = () => {
        $('#emailModal').modal('hide');
        resetModal();
    }

    function resetModal() {
        $('#emailModal, #emailInput').val('');
        $("#result").text('');
        $("#result").css("color", "none");
        $('#submitEmail').prop("disabled", false);
        $('#emailInput, #emailHelp').css("visibility", "visible");

    }

    var timeoutID;

    function delayedAlert() {
      timeoutID = window.setTimeout(slowAlert, 800);

    }

    function slowAlert() {
      // alert('Thanks for your interest in Crypton.\nYou will receive a confirmation email shortly.');
      $('#emailModal').modal('hide');
      var modaltimeoutID;
      modaltimeoutID = window.setTimeout(resetModal, 500);

    };


})()

function openModal () {
  $('#emailModal').on('shown.bs.modal')
}

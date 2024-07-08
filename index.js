var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      alert("RSVP anda berjaya dihantar. Terima Kasih :) ");
      form.reset();
      $("#ModalRSVP").modal("hide");
        $('.modal-backdrop').removeClass('modal-backdrop fade show');
        $('.modal-backdrop').remove();

    });
});

$("#kedatangan").change(function () {
  if ($(this).val() == "hadir") {
    $("#jumlahkedatanganform").show();
    $("#namaform").show();
    $("#showcalendar").show();
    $("#waktuform").show();
  } else {
    $("#namaform").hide();
    $("#jumlahkedatanganform").hide();
    $("#showcalendar").hide();
    $("#waktuform").hide();
    $("#ModalRSVP").modal("hide");
  }
});



        // document.addEventListener('contextmenu', function(event) {
        //     event.preventDefault();
        // });

        // document.addEventListener('keydown', function(event) {
        //     if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        //         event.preventDefault();
        //     }
        // });

        // document.addEventListener('keydown', function(event) {
        //     if (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'P')) {
        //         event.preventDefault();
        //     }
        // });
   
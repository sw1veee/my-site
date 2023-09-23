document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances__sidenav = M.Sidenav.init(sidenav);

    var modal = document.querySelectorAll('.modal');
    var instances__modal = M.Modal.init(modal);

    var gallery = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(gallery);
  });
          
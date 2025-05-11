function scrolltodiv(id){
    var elem = document.getElementById(id)
    elem.scrollIntoView();
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      });
  });
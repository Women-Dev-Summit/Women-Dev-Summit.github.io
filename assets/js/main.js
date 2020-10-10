// Timezone switcher
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.tz-switcher').addEventListener('change',function() {
    var getText = document.querySelector('.tz-switcher option:checked').value;
    document.querySelector('body').classList.remove( ...document.querySelector('body').classList);
    document.querySelector('body').classList.toggle("tz-" + getText);
  });
});
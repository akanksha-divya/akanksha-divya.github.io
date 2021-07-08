function onSignedIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display","none");
  $(".data").css("display","block");
   $("#name").text(profile.getName());
   $("#email").text(profile.getEmail());
   $("#pic").attr('src',profile.getImageUrl());
  
   
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

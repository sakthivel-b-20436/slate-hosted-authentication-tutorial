async function showProfile() {
      debugger;
      await catalyst.auth.isUserAuthenticated().then(result => {
          document.getElementById("fname").innerHTML = "First Name: " + result.content.first_name;
          document.getElementById("lname").innerHTML = "Last Name: " + result.content.last_name;
          document.getElementById("mailid").innerHTML = "Email Address: " + result.content.email_id;
          document.getElementById("tzone").innerHTML = "Time Zone: " + result.content.time_zone;
          document.getElementById("ctime").innerHTML = "Joined On: " + result.content.created_time;
      }).catch(err => {
          document.body.innerHTML = 'You are not logged in. Please log in to continue. Redirecting you to the login page..';
          setTimeout(function () {
            window.location.href = "/__catalyst/auth/login?redirect_url=/index.html";
          }, 1500);
      }) .finally(() => {
        document.body.style.visibility = "visible";
    });;
    }

    function logout() {
      const redirectURL = location.protocol +"//"+ location.hostname + "/index.html";
      catalyst.auth.signOut(redirectURL);
    }

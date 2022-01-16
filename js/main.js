$(document).ready(function(){

  let inputUsername = $('#username');

  inputUsername.on({
    keypress: function(event){
      if(event.which === 13){
        // block default event
        event.preventDefault();

        // get content
        const apiURL = `https://api.github.com/users/${inputUsername.val()}`;
        $.getJSON(apiURL, function(data){
          addHTML(data);
          inputUsername.val('');
        })
      }
    }
  })

  function addHTML(user){
    let containerSt = $('.box_info');
    let date = new Date(user.created_at);
    let day = date.getDay();
    let month = date.getMonth();
    let arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    let year = date.getFullYear();

    var stHTML = `
      <div class="box_structure__user-info">
        <img
        src="${user.avatar_url}"
        alt="${user.name}"
        />
        <div class="top_info_user">
          <h2 id="name_user">${user.name}</h2>
          <p id="bio_user">${user.bio}</p>
        </div>
        <div class="social_information">
          <span id="followers_user"><i>Followers:</i> ${user.followers}</span>
          <span id="followeing_user"><i>Followeing:</i> ${user.following}</span>
          <span id="repository_user"><i>Repository: </i> ${user.public_repos}</span>
        </div>
        <div class="another_info">
           <span id="location_user">
             <i class="bi bi-geo-alt-fill"></i> <i>${user.location}</i>
           </span>
           <span id="date_account">
             <i class="bi bi-calendar-date"></i> <i>${day} ${arrMonth[month]} ${year}</i>
           </span>
           <span id="blog_user">
             <i class="bi bi-link-45deg"></i> <a href="${user.blog}" target="_blank"><i>${user.blog}</i></a>
           </span>
        </div>
      </div>
    `;

    containerSt.html(stHTML);
  }

})

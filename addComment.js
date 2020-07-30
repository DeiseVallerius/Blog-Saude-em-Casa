document.getElementById("addComment").addEventListener("submit", addComment);

function addComment() {
  var comment = document.getElementById("comment").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var time = new Date();

  comment = {
    comment,
    name,
    email,
    hour: time.toLocaleString(),
  };

  if (localStorage.getItem("newComment") === null) {
    var comments = [];
    comments.push(comment);
    localStorage.setItem("newComment", JSON.stringify(comments));
  } else {
    var comments = JSON.parse(localStorage.getItem("newComment"));
    comments.push(comment);
    localStorage.setItem("newComment", JSON.stringify(comments));
  }
}

function showComment() {
  var comments = JSON.parse(localStorage.getItem("newComment"));
  var commentsResult = document.getElementById("results");

  commentsResult.innerHTML = "";

  for (var i = 0; i < comments.length; i++) {
    var name = comments[i].name;
    //  var email = comments[i].email;
    var hour = comments[i].hour;
    var minute = comments[i].minute;

    var comment = comments[i].comment;

    commentsResult.innerHTML +=
      `
          <div class="container col-6 ">
              
                  <h4 >${name}</h4>
                  <h5 class="text-muted">${hour}</h5><br>    
          </div>
      ` +
      `  <div class="container col-6   text-dark">  
  <textarea class="form-control" id="comment" rows="3">${comment}</textarea>
</div><br><br>
`;
  }

  /*commentsResult.innerHTML +=
      "<tr><td>" +
      name +
      "</td><td>" +
      //  email +
      //  "</td><td>" +
      hour +
      " : " +
      minute +
      "</td><td>" +
      comment +
      "</tr>";
  }*/
}

document.getElementById("diabetes").onclick = function() {
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").options[document.getElementById("sex").selectedIndex].textContent;
    var cp = document.getElementById("cp").options[document.getElementById("cp").selectedIndex].textContent;
    var trestbps = document.getElementById("trestbps").value;
    var chol = document.getElementById("chol").value;
    var fbs = document.getElementById("fbs").options[document.getElementById("fbs").selectedIndex].textContent;
    var restecg = document.getElementById("restecg").options[document.getElementById("restecg").selectedIndex].textContent;
    var thalach = document.getElementById("thalach").value;
    var exang = document.getElementById("exang").options[document.getElementById("exang").selectedIndex].textContent;
    var oldpeak = document.getElementById("oldpeak").value;
    var slope = document.getElementById("slope").options[document.getElementById("slope").selectedIndex].textContent;
    var ca = document.getElementById("ca").value;
    var thal = document.getElementById("thal").options[document.getElementById("thal").selectedIndex].textContent;
    document.getElementById("myForm").reset();
  };
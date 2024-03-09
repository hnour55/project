function showOtherInput() {
  var countrySelect = document.getElementById("country");
  var otherCountryInput = document.getElementById("otherCountryInput");
  if (countrySelect.value === "other") {
    otherCountryInput.style.display = "block";
  } else {
    otherCountryInput.style.display = "none";
  }
}
function alpha_np(ch){
  var ch = ch.toUpperCase();
  pos_esp = ch.indexOf(" ")
  var test_esp = pos_esp != -1 && pos_esp != [0] && pos_esp != ch.length - 1;
  if (test_esp){
    var i = 0;
    do{
      test_alpha = (("A"<=ch[i])&&(ch[i]<="Z")) || ch[i] == " ";
      i += 1;
    }while(test_alpha && i < ch.length );
    return test_alpha && test_esp;
  }
  else{
    return false;
  }
}
function alpha(ch){
  var ch = ch.toUpperCase();
  var i = 0;
  do{
    test_alpha = (("A"<=ch[i])&&(ch[i]<="Z")) || ch[i] == " ";
    i += 1;
  }while(test_alpha && i < ch.length );
  return test_alpha;
}
function verif_mail(mail){
  point=mail.indexOf('.');
  at=mail.indexOf('@');
  if (at==-1 || point==-1 || (point-at)<3){
      return false;
  }
  cp_1 = mail;
  cp_2 = mail;
  social = mail.substr(at+1,point-at-1);
  long_ch = mail.length;
  tn = mail.substr(point+1, long_ch-point-1);
  if ( (!alpha(social)) || (!alpha(tn))){
    return false;
  }
  return true
}
function verif() {
  var nom_prenom = document.getElementById('np').value;
  var mail=document.getElementById('email').value;
  var pass=document.getElementById('pass').value;
  var Chiffre = /\d/.test(pass);
  var Lettre = /[a-zA-Z]/.test(pass);
  var ville = document.getElementById('ville').value; 
  var Symbole = /[!@#$%^&*()_+{}:;<>,.?~-]/.test(pass);
  var code_postale=document.getElementById('cp').value;
  if (!alpha_np(nom_prenom)){
    alert("verifier votre nom et prénom ");
    return false;
  }
  else if (!verif_mail(mail) || mail.length==0) {
    alert('verifier le e-mail');
    return false;
  }
  else if (pass.length<8 || pass.length>20){
    alert('verifier le password, le longeur de mot de passe faut etre entre 8 et 20');
    return false;
  }
  // Vérifier la présence d'au moins un chiffre
  else if (!(Chiffre)) {
    alert("ton mot de passe a au minimum un chiffre");
    return false;
  }
  // Vérifier la présence d'au moins une lettre
  else if (!(Lettre)) {
    alert("ton mot de passe a au minimum une lettre");
    return false;
  }
  // Vérifier la présence d'au moins un symbole (caractère spécial)
  else if (!(Symbole)) {
    alert("ton mot de passe a au minimum un symbole");
    return false;
  }
  else if (!alpha(ville)){
    alert("verifier votre ville");
    return false;
  }
  else if ((code_postale.length!=5) && (isNaN(code_postale))){
    alert('verifier votre code postale ');
    return false;
  }
  else{
    alert("votre msg est reçue ");
    return true;
  }
}
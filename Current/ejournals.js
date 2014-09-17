/**
 * Created by uqybarta on 16/09/2014.
 */


function init() {
  // Add availability link to all resources
  var rows = document.getElementsByClassName('SS_Holding');
  var issnSearchUrl = 'https://library.uq.edu.au/search~S1/?searchtype=i&searcharg=';
  var titleSearchUrl = 'https://library.uq.edu.au/search~S1/?searchtype=t&searcharg=';


  for(var i=0; i < rows.length; i++){
    var journalTitle = journalISSN = journalLink = '';
    if(typeof(rows[i].children) != 'undefined') {
      for(var j=0; j < rows[i].children.length; j++) {


        if(rows[i].children[j].className == "SS_JournalISSN") {
          journalISSN = rows[i].children[j].textContent.trim().replace('(','').replace(')','');
        }
        if(rows[i].children[j].className == "SS_JournalTitle") {
          journalTitle = rows[i].children[j].textContent.trim();
        }
      }

      if(journalISSN != ''){
        journalLink =  '<a class="checkLink" href="'+issnSearchUrl+encodeURIComponent(journalISSN)+'" target="_blank">Check print availability</a>';
      } else if(journalTitle != '') {
        journalLink = '<a class="checkLink" href="'+titleSearchUrl+encodeURIComponent(journalTitle)+'" target="_blank">Check print availability</a>';;
      }

      var td = document.createElement('td');
      var tr = document.createElement('tr');
      var table = document.createElement('table');
      table.setAttribute('cellpadding', '0');
      table.setAttribute('cellspacing', '0');
      td.innerHTML = journalLink;
      tr.appendChild(td);
      table.appendChild(tr);

      if(rows[i].children[rows[i].children.length -1].tagName.toUpperCase() == 'BR') {
        rows[i].removeChild(rows[i].children[rows[i].children.length -1]);
      }
      rows[i].appendChild(table);
      rows[i].appendChild(document.createElement('br'));
    }


  }

};
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

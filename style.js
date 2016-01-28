var notes = [];
var max= 10;

function Note(name){
  this.name = name;
  this.done = false;
}
//Add a note
function addNoteName(name){
  var tada = new Note(name);
  notes.push(tada);
  
  saveNotes();
}

//get note at listed index
function getNoteIndex(index){
  return notes[index];
}
//Remove a note
function removeNote(index){
  notes.splice(index, 1);
  saveNotes();
}

//to local storage
function saveNotes(){
  var str = JSON.stringify(notes);
  localStorage.setItem("notes", str);
}

//notes from storage
function getNotes(){
  var str = localStorage.getItem("notes");
  notes = JSON.parse(str); //turns json string to js object, reverse of stringify
  if (!notes){
  notes = [];
  }
}

function editNote(e){
    editing = true;
    console.log(this.parentNode);
    textBox.value = this.parentNode.firstChild.textContent;
    editedElement = this.parentNode;
    button.innerHTML = "Edit";
    e.preventDefault();
  }

getNotes();
allNotes();

function checkLength(){
  var text = document.getElementById("note-name");
    if(text.value.length <= 15 && text.value.length >= 2){
      saveNotes();
    }
    else{
      alert("make sure you note is between 2-15 characters long")
    }
}

//List all Notes
function allNotes(){
  var html = "";
  for(var x in notes){
    var note = notes[x];
    var name = note.name;
    var done = note.done;
    html += "<li>"+ name + "<span> " + "<a href=\'#\' onclick=\'removeNote()\'> Delete Note</a></span></li>";
  }
  $("#all-notes").html(html);
}

$("#add-note-form").submit(function(event){
  event.preventDefault();
  var name = $("#note-name").val();
  addNoteName(name);
  allNotes();
});












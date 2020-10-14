//changed text parameter
var textOnErrorChanged=false;
function textOnErrorChanged1(){
  console.log("changed");
  textOnErrorChanged=true;
}
var leftKeyTextChanged = false;
function leftKeyTextChanged1(){
  leftKeyTextChanged=true;
}
var orTextChangedChanged = false;
function orTextChangedChanged1(){
  orTextChangedChanged=true;
}
var rightKeyTextChanged = false;
function rightKeyTextChanged1(){
  rightKeyTextChanged=true;
}
var FinalTextChanged = false;
function FinalTextChanged1(){
  FinalTextChanged=true;
}
var AttributesTextChanged = false;
function AttributesTextChanged1(){
  AttributesTextChanged=true;
}
var CategoriesTextChanged = false;
function CategoriesTextChanged1(){
  CategoriesTextChanged=true;
}
var FirstCombinedTextChanged = false;
function FirstCombinedTextChanged1(){
  FirstCombinedTextChanged=true;
}
var SecondCombinedTxtChanged = false;
function SecondCombinedTxtChanged1(){
  SecondCombinedTxtChanged=true;
}
var instSwitchCategoriesChanged=false;
function instSwitchCategoriesChanged1(){
  instSwitchCategoriesChanged=true;
}
var preDebriefingTextChanged=false;
function preDebriefingTextChanged1(){
  preDebriefingTextChanged=true;
}




///////////////////////////Tabs////////////////////////////////////
function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

///////////////////////////Task Paramters////////////////////////////////////
function saveTaskParameters () {
  var touch = document.getElementById("touch").checked;
  //update text defoult according to the touch device
  if(touch){
    checkChangeInText();
  }
  if(!touch){
    checkChangeInText();
  }
  var full_screen = document.getElementById("full_screen").checked;
  console.log("touch "+touch, "full_screen "+full_screen);
  var debriefing = document.getElementById("debriefing").checked;
  var error_message = document.getElementById("error_message").checked;
  console.log("debriefing "+debriefing, "error_message "+error_message);
  var correct_wrong_answer = document.getElementById("correct_wrong_answer").checked;
  var base_url = document.getElementById("base_url").value;
  console.log("correct_wrong_answer "+correct_wrong_answer, "base_url "+base_url);
  if(base_url == null || base_url == "") {
    alert("Missing fields: \nImages URL");
  }
  else {
    alert("Task parameters saved successfully")
  }
}


document.getElementById("clearTask").addEventListener("click", clearTask);
document.getElementById("resetTask").addEventListener("click", resetTask);
function clearTask() {
    document.getElementById("touch").checked = false;
    document.getElementById("full_screen").checked = false;
    document.getElementById("debriefing").checked = false;
    document.getElementById("error_message").checked = false;
    document.getElementById("correct_wrong_answer").checked = false;
    document.getElementById("base_url").value = '';
}

function resetTask() {
  document.getElementById("touch").checked = false;
  document.getElementById("full_screen").checked = true;
  document.getElementById("debriefing").checked = true;
  document.getElementById("error_message").checked = true;
  document.getElementById("correct_wrong_answer").checked = false;
  document.getElementById("base_url").value = '';
}

//////////////////////////////////////////CATEGORIES/////////////////////////////////////////////////

//////////////////////////////////////////FIRST CATEGORY/////////////////////////////////////////////////
var first_ctg_word_flag = 0; //for indicating if type of word was choosen on stimuli section
checkCategoryWordsFirst();
var first_ctg_word_type_flag = 0 ; //for indicating if type of word was choosen on category section
var first_ctg_img_type_flag = 0; //for indicating if type of image was choosen on category section
checkFirstCategoryType();

function checkCategoryWordsFirst() {
  var flag = 0;
  var options = document.getElementById("first_ctg_stimuli").options;
  var i;
  for (i = 0; i < options.length; i++) {
    if ((options[i].text).includes("Word")) {
      flag = 1;
    }
  }
  console.log("flag "+flag +" first flag "+first_ctg_word_flag);
  if (flag == 1 && first_ctg_word_flag == 0) {
    first_ctg_word_flag = 1
    addDesignFirstCategoryWords()
  }
  else if (flag == 0 && first_ctg_word_flag == 1) {
        //delete cells
        first_ctg_word_flag = 0;
        var row = document.getElementById("first_ctg_text_design");
        row.remove();
  }
}

function addFirstCategoryStimulus(event) {
    var new_stimuli = document.getElementById("first_ctg_new_stimulus").value;
    console.log(new_stimuli);
    if(new_stimuli == null || new_stimuli == "") {
      alert("Please fill the stimulus field");
    }
    else {
      var x = document.getElementById("first_ctg_stimuli");
      var type;
      if (event == "first_add_ctg_word_stimulus")
        type = "Word";
      else type = "Image";
      var option = document.createElement("option");
      option.text = new_stimuli + " [" + type+"]";
      x.add(option);
      document.getElementById("first_ctg_new_stimulus").value='';
      checkCategoryWordsFirst();
    }
}

function addDesignFirstCategoryWords()
{
    var row = document.getElementById("first_ctg_stimuli_cell");
    var div = document.createElement("DIV");
    div.id = "first_ctg_text_design";
    div.style.position = "relative";
    div.style.top = "-260px";
    div.style.left = "255px";
    div.style.marginBottom =  "-150px";
    div.innerHTML = "<span class='fontStyle'>  Stimuli font's design:</span><br><label>Font color: </label><br><input type='color' id='first_ctg_stimuli_color' value='#336600'><br><label>Font size:</label><br><input type='number' id='first_ctg_stimuli_font_size' value=1.8 min=0 style='width: 45px;' />";
    row.appendChild(div);
}

function removeChosenFirstCategoryStimulus() {

    //get the listbox object from id.
    var src = document.getElementById("first_ctg_stimuli");
 
    //iterate through each option of the listbox
    for(var count= src.options.length-1; count >= 0; count--) {

         //if the option is selected, delete the option
        if(src.options[count].selected == true) {
 
                try {
                         src.remove(count, null);
                        
                 } catch(error) {
                        
                         src.remove(count);
                }
        }
    }
    checkCategoryWordsFirst();
}

function removeAllFirstCategoryStimuli(){
    var select = document.getElementById("first_ctg_stimuli");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
    checkCategoryWordsFirst();
}

function checkFirstCategoryType() {
  var type = document.getElementById("first_category_type");
  type = type.options[type.selectedIndex].text;
  var row = document.getElementById("row_first_name_presented");
  if (type == "Image") {
    row.deleteCell(4);
    row.deleteCell(4);
    if (first_ctg_img_type_flag == 0){
      first_ctg_img_type_flag = 1;
      row.insertCell(4);
      row.insertCell(5);
    }
    first_ctg_word_type_flag = 0;

  }
  if (type == "Word" && first_ctg_word_type_flag == 0) {
    var colorCell = row.insertCell(4);
    colorCell.style.width = '10%';
    colorCell.innerHTML ="<label>Font color:</label><input type='color' id='first_category_color' value='#336600'>";
    var fontCell = row.insertCell(5);
    fontCell.innerHTML="<label>Font size:</label><input type='number' id='first_ctg_font_size' value=1.8 min=0 style='width: 45px;' />";
    first_ctg_word_type_flag = 1;
  }
}


//////////////////////////////////////////SECOND CATEGORY/////////////////////////////////////////////////
var sec_ctg_word_flag = 0; //for indicating if type of word was choosen
checkCategoryWordsSec();

var sec_ctg_word_type_flag = 0 ; //for indicating if type of word was choosen on category section
var sec_ctg_img_type_flag = 0; //for indicating if type of image was choosen on category section
checkSecondCategoryType();


function checkCategoryWordsSec() {
  var flag = 0;
  var options = document.getElementById("sec_ctg_stimuli").options;
  var i;
  for (i = 0; i < options.length; i++) {
    if ((options[i].text).includes("Word")) {
      flag = 1;
    }
  }
  console.log("flag "+flag +" first flag "+sec_ctg_word_flag);
  if (flag == 1 && sec_ctg_word_flag == 0) {
    sec_ctg_word_flag = 1;
    addDesignSecCategoryWords();
  }
  else if (flag == 0 && sec_ctg_word_flag == 1) {
        //delete cells
        sec_ctg_word_flag = 0;
        var row = document.getElementById("second_ctg_text_design");
        row.remove();
  }
}

function addDesignSecCategoryWords()
{
    console.log("got here");
    var row = document.getElementById("sec_ctg_stimuli_cell");
    var div = document.createElement("DIV");
    div.id = "second_ctg_text_design";
    div.style.position = "relative";
    div.style.top = "-260px";
    div.style.left = "255px";
    div.style.marginBottom =  "-150px";
    div.innerHTML = "<span class='fontStyle'>  Stimuli font's design:</span><br><label>Font color: </label><br><input type='color' id='sec_ctg_stimuli_color' value='#336600'><br><label>Font size:</label><br><input type='number' id='sec_ctg_stimuli_font_size' value=1.8 min=0 style='width: 45px;' />";
    row.appendChild(div);
  }

function addSecondCategoryStimulus(event) {
  var new_stimuli = document.getElementById("sec_ctg_new_stimulus").value;
  if(new_stimuli == null || new_stimuli == "") {
    alert("Please fill the stimulus field");
  }
  else {
    var x = document.getElementById("sec_ctg_stimuli");
    var type;
    if (event == "sec_ctg_add_word_stimulus")
      type = "Word";
    else type = "Image";
    var option = document.createElement("option");
    option.text = new_stimuli + " [" + type+"]";
    x.add(option);
    document.getElementById("sec_ctg_new_stimulus").value='';
    checkCategoryWordsSec();
  }
}

function removeChosenSecondCategoryStimulus() {

    //get the listbox object from id.
    var src = document.getElementById("sec_ctg_stimuli");
 
    //iterate through each option of the listbox
    for(var count= src.options.length-1; count >= 0; count--) {

         //if the option is selected, delete the option
        if(src.options[count].selected == true) {
 
                try {
                         src.remove(count, null);
                        
                 } catch(error) {
                        
                         src.remove(count);
                }
        }
    }
    checkCategoryWordsSec();
}

function removeAllSecondCategoryStimuli(){
    var select = document.getElementById("sec_ctg_stimuli");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
    checkCategoryWordsSec();
}

function checkSecondCategoryType() {
  var type = document.getElementById("sec_category_type");
  type = type.options[type.selectedIndex].text;
  var row = document.getElementById("row_second_name_presented");
  if (type == "Image") {
    row.deleteCell(4);
    row.deleteCell(4);
    if (sec_ctg_img_type_flag == 0){
      sec_ctg_img_type_flag = 1;
      row.insertCell(4);
      row.insertCell(5);
      row.insertCell(6);
    }
    sec_ctg_word_type_flag = 0;

  }
  if (type == "Word" && sec_ctg_word_type_flag == 0) {
    var colorCell = row.insertCell(4);
    colorCell.innerHTML ="<label>Font color:</label><input type='color' id='sec_category_color' value='#336600'>";
    var fontCell = row.insertCell(5);
    fontCell.innerHTML="<label>Font size:</label><input type='number' id='sec_ctg_font_size' value=1.8 min=0 style='width: 45px;' />";
    sec_ctg_word_type_flag = 1;
  }
}
//////////////////////////////////////////BOTH CATEGORIES/////////////////////////////////////////////////
function saveCategories(){
  var errorStr="Missing Fields: \n";
  var first_name_in_data = document.getElementById("first_name_in_data").value;
  if (first_name_in_data == "" || first_name_in_data == null) {
    errorStr = errorStr+"First category name as will appear in the data.\n"
  }
  var first_name_presented = document.getElementById("first_name_presented").value;
  if (first_name_presented == "" || first_name_presented == null) {
    errorStr = errorStr+"First category title as will appear to the user.\n"
  }
  var first_ctg_stimuli_list = document.getElementById("first_ctg_stimuli")
  var first_list = "";
  for (var i = 0; i < first_ctg_stimuli_list.length; i++) {
    first_list = first_list + "\n" + first_ctg_stimuli_list.options[i].text;
  }
  if (first_list == ""){
    errorStr = errorStr+"Stimuli list for the first category.\n"
  }

  var sec_name_in_data = document.getElementById("sec_name_in_data").value;
  if (sec_name_in_data == "" || sec_name_in_data == null) {
    errorStr = errorStr+"Second category name as will appear in the data.\n"
  }
  var sec_name_presented = document.getElementById("sec_name_presented").value;
  if (sec_name_presented == "" || sec_name_presented == null) {
    errorStr = errorStr+"Second category title as will appear to the user.\n"
  }
  var sec_ctg_stimuli_list = document.getElementById("sec_ctg_stimuli")
  var sec_list = "";
  for (var i = 0; i < sec_ctg_stimuli_list.length; i++) {
    sec_list = sec_list + "\n" + sec_ctg_stimuli_list.options[i].text;
  }
  if (sec_list == ""){
    errorStr = errorStr+"Stimuli list for the second category.\n"
  }
  if (errorStr != "Missing Fields: \n") {
    alert(errorStr);
  }
  else {
    alert("Categories' parameters saved successfully")
  }
}

document.getElementById("clearCategories").addEventListener("click", clearCategories);
document.getElementById("resetCategories").addEventListener("click", resetCategories);
var reset_flag = 0 ; //did the form reset (for the stimuli list reset)
function clearCategories() {
    reset_flag = 1;
    removeAllFirstCategoryStimuli();
    removeAllSecondCategoryStimuli();
    
    document.getElementById('first_name_in_data').value = '';
    document.getElementById('first_name_presented').value = '';
    document.getElementById('first_category_type').options[0].selected = 'true';
    checkFirstCategoryType();
    document.getElementById('first_category_color').value = '#000000';
    document.getElementById('first_ctg_font_size').value = '0';

    document.getElementById('sec_name_in_data').value = '';
    document.getElementById('sec_name_presented').value = '';
    document.getElementById('sec_category_type').options[0].selected = 'true';
    checkSecondCategoryType();
    document.getElementById('sec_category_color').value = '#000000';
    document.getElementById('sec_ctg_font_size').value = '0';

}

function resetCategories() {
  document.getElementById('first_name_in_data').value = 'Black people';
  document.getElementById('first_name_presented').value = 'Black people';
  document.getElementById('first_category_type').options[0].selected = 'true';
  checkFirstCategoryType();
  document.getElementById('first_category_color').value = '#336600';
  document.getElementById('first_ctg_font_size').value = '1.8';

  document.getElementById('sec_name_in_data').value = 'White people';
  document.getElementById('sec_name_presented').value = 'White people';
  document.getElementById('sec_category_type').options[0].selected = 'true';
  checkSecondCategoryType();
  document.getElementById('sec_category_color').value = '#336600';
  document.getElementById('sec_ctg_font_size').value = '1.8';
  if (reset_flag == 1)
    resetCategoryStimuliList();
  checkCategoryWordsFirst();
  checkCategoryWordsSec();

}

function resetCategoryStimuliList() {
  var firstList = ["Tyron [Word]", "Malik [Word]", "Terrell [Word]", "Jazmin [Word]", "Tiara [Word]", "Shanice [Word]"];
  var secondList = ["Jake [Word]", "Connor [Word]", "Bradley [Word]", "Allison [Word]", "Emma [Word]", "Emily [Word]"];
  var length = firstList.length;
  var first = document.getElementById("first_ctg_stimuli");
  var second = document.getElementById("sec_ctg_stimuli");
  for (var i = 0; i < length; i++) {
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");

    option1.text = firstList[i];
    first.add(option1);

    option2.text = secondList[i];
    second.add(option2);
    reset_flag = 0;
  }
}

//////////////////////////////////////////Attributes/////////////////////////////////////////////////

//////////////////////////////////////////FIRST Attributes/////////////////////////////////////////////////
var first_attr_word_flag = 0; //for indicating if type of word was choosen on stimuli section
checkAttributeWordsFirst();
var first_attr_word_type_flag = 0 ; //for indicating if type of word was choosen on category section
var first_ctg_img_type_flag = 0; //for indicating if type of image was choosen on category section
checkFirstAttributeType();

function checkAttributeWordsFirst() {
  var flag = 0;
  var options = document.getElementById("first_attr_stimuli").options;
  var i;
  for (i = 0; i < options.length; i++) {
    if ((options[i].text).includes("Word")) {
      flag = 1;
    }
  }
  console.log("flag "+flag +" first flag "+first_attr_word_flag);
  if (flag == 1 && first_attr_word_flag == 0) {
    first_attr_word_flag = 1
    addDesignFirstAttributeWords()
  }
  else if (flag == 0 && first_attr_word_flag == 1) {
        //delete cells
        first_attr_word_flag = 0;
        var row = document.getElementById("first_attr_text_design");
        row.remove();
  }
}

function addFirstAttributeStimulus(event) {
    var new_stimuli = document.getElementById("first_attr_new_stimulus").value;
    console.log(new_stimuli);
    if(new_stimuli == null || new_stimuli == "") {
      alert("Please fill the stimulus field");
    }
    else {
      var x = document.getElementById("first_attr_stimuli");
      var type;
      if (event == "first_add_ctg_word_stimulus")
        type = "Word";
      else type = "Image";
      var option = document.createElement("option");
      option.text = new_stimuli + " [" + type+"]";
      x.add(option);
      document.getElementById("first_attr_new_stimulus").value='';
      checkAttributeWordsFirst();
    }
}

function addDesignFirstAttributeWords()
{
    var row = document.getElementById("first_attr_stimuli_cell");
    var div = document.createElement("DIV");
    div.id = "first_attr_text_design";
    div.style.position = "relative";
    div.style.top = "-260px";
    div.style.left = "255px";
    div.style.marginBottom =  "-150px";
    div.innerHTML = "<span class='fontStyle'>  Stimuli font's design:</span><br><label>Font color: </label><br><input type='color' id='first_attr_stimuli_color' value='#336600'><br><label>Font size:</label><br><input type='number' id='first_attr_stimuli_font_size' value=2.3 min=0 style='width: 45px;' />";
    row.appendChild(div);
}

function removeChosenFirstAttributeStimulus() {

    //get the listbox object from id.
    var src = document.getElementById("first_attr_stimuli");
 
    //iterate through each option of the listbox
    for(var count= src.options.length-1; count >= 0; count--) {

         //if the option is selected, delete the option
        if(src.options[count].selected == true) {
 
                try {
                         src.remove(count, null);
                        
                 } catch(error) {
                        
                         src.remove(count);
                }
        }
    }
    checkAttributeWordsFirst();
}

function removeAllFirstAttributeStimuli(){
    var select = document.getElementById("first_attr_stimuli");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
    checkAttributeWordsFirst();
}

function checkFirstAttributeType() {
  var type = document.getElementById("first_attr_type");
  type = type.options[type.selectedIndex].text;
  var row = document.getElementById("row_first_attr_presented");
  if (type == "Image") {
    row.deleteCell(4);
    row.deleteCell(4);
    if (first_ctg_img_type_flag == 0){
      first_ctg_img_type_flag = 1;
      row.insertCell(4);
      row.insertCell(5);
    }
    first_attr_word_type_flag = 0;

  }
  if (type == "Word" && first_attr_word_type_flag == 0) {
    var colorCell = row.insertCell(4);
    colorCell.style.width = '10%';
    colorCell.innerHTML ="<label>Font color:</label><input type='color' id='first_attr_color' value='#336600'>";
    var fontCell = row.insertCell(5);
    fontCell.innerHTML="<label>Font size:</label><input type='number' id='first_attr_font_size' value=1.8 min=0 style='width: 45px;' />";
    first_attr_word_type_flag = 1;
  }
}


//////////////////////////////////////////SECOND Attribute/////////////////////////////////////////////////
var sec_attr_word_flag = 0; //for indicating if type of word was choosen
checkAttributeWordsSec();

var sec_attr_word_type_flag = 0 ; //for indicating if type of word was choosen on category section
var sec_attr_img_type_flag = 0; //for indicating if type of image was choosen on category section
checkSecondAttributeType();


function checkAttributeWordsSec() {
  var flag = 0;
  var options = document.getElementById("sec_attr_stimuli").options;
  var i;
  for (i = 0; i < options.length; i++) {
    if ((options[i].text).includes("Word")) {
      flag = 1;
    }
  }
  if (flag == 1 && sec_attr_word_flag == 0) {
    sec_attr_word_flag = 1;
    addDesignSecAttributeWords();
  }
  else if (flag == 0 && sec_attr_word_flag == 1) {
        //delete cells
        sec_attr_word_flag = 0;
        var row = document.getElementById("second_attr_text_design");
        row.remove();
  }
}

function addDesignSecAttributeWords()
{
    var row = document.getElementById("sec_attr_stimuli_cell");
    var div = document.createElement("DIV");
    div.id = "second_attr_text_design";
    div.style.position = "relative";
    div.style.top = "-260px";
    div.style.left = "255px";
    div.style.marginBottom =  "-150px";
    div.innerHTML = "<span class='fontStyle'>  Stimuli font's design:</span><br><label>Font color: </label><br><input type='color' id='sec_attr_stimuli_color' value='#336600'><br><label>Font size:</label><br><input type='number' id='sec_attr_stimuli_font_size' value=2.3 min=0 style='width: 45px;' />";
    row.appendChild(div);
  }

function addSecondAttributeStimulus(event) {
  var new_stimuli = document.getElementById("sec_attr_new_stimulus").value;
  if(new_stimuli == null || new_stimuli == "") {
    alert("Please fill the stimulus field");
  }
  else {
    var x = document.getElementById("sec_attr_stimuli");
    var type;
    if (event == "sec_attr_add_word_stimulus")
      type = "Word";
    else type = "Image";
    var option = document.createElement("option");
    option.text = new_stimuli + " [" + type+"]";
    x.add(option);
    document.getElementById("sec_attr_new_stimulus").value='';
    checkAttributeWordsSec();
  }
}

function removeChosenSecondAttributeStimulus() {

    //get the listbox object from id.
    var src = document.getElementById("sec_attr_stimuli");
 
    //iterate through each option of the listbox
    for(var count= src.options.length-1; count >= 0; count--) {

         //if the option is selected, delete the option
        if(src.options[count].selected == true) {
 
                try {
                         src.remove(count, null);
                        
                 } catch(error) {
                        
                         src.remove(count);
                }
        }
    }
    checkAttributeWordsSec();
}

function removeAllSecondAttributeStimuli(){
    var select = document.getElementById("sec_attr_stimuli");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
    checkAttributeWordsSec();
}

function checkSecondAttributeType() {
  var type = document.getElementById("sec_attr_type");
  type = type.options[type.selectedIndex].text;
  var row = document.getElementById("row_second_attr_presented");
  if (type == "Image") {
    row.deleteCell(4);
    row.deleteCell(4);
    if (sec_attr_img_type_flag == 0){
      sec_attr_img_type_flag = 1;
      row.insertCell(4);
      row.insertCell(5);
      row.insertCell(6);
    }
    sec_attr_word_type_flag = 0;

  }
  if (type == "Word" && sec_attr_word_type_flag == 0) {
    var colorCell = row.insertCell(4);
    colorCell.innerHTML ="<label>Font color:</label><input type='color' id='sec_attr_color' value='#336600'>";
    var fontCell = row.insertCell(5);
    fontCell.innerHTML="<label>Font size:</label><input type='number' id='sec_attr_font_size' value=1.8 min=0 style='width: 45px;' />";
    sec_attr_word_type_flag = 1;
  }
}
//////////////////////////////////////////BOTH Attributes/////////////////////////////////////////////////
function saveAttributes(){
  var errorStr="Missing Fields: \n";
  var first_attr_in_data = document.getElementById("first_attr_in_data").value;
  if (first_attr_in_data == "" || first_attr_in_data == null) {
    errorStr = errorStr+"First attribute name as will appear in the data.\n"
  }
  var first_attr_presented = document.getElementById("first_attr_presented").value;
  if (first_attr_presented == "" || first_attr_presented == null) {
    errorStr = errorStr+"First attribute title as will appear to the user.\n"
  }
  var first_attr_stimuli_list = document.getElementById("first_attr_stimuli")
  var first_list = "";
  for (var i = 0; i < first_attr_stimuli_list.length; i++) {
    first_list = first_list + "\n" + first_attr_stimuli_list.options[i].text;
  }
  if (first_list == ""){
    errorStr = errorStr+"Stimuli list for the first attribute.\n"
  }

  var sec_attr_in_data = document.getElementById("sec_attr_in_data").value;
  if (sec_attr_in_data == "" || sec_attr_in_data == null) {
    errorStr = errorStr+"Second attribute name as will appear in the data.\n"
  }
  var sec_attr_presented = document.getElementById("sec_attr_presented").value;
  if (sec_attr_presented == "" || sec_attr_presented == null) {
    errorStr = errorStr+"Second attribute title as will appear to the user.\n"
  }
  var sec_attr_stimuli_list = document.getElementById("sec_attr_stimuli")
  var sec_list = "";
  for (var i = 0; i < sec_attr_stimuli_list.length; i++) {
    sec_list = sec_list + "\n" + sec_attr_stimuli_list.options[i].text;
  }
  if (sec_list == ""){
    errorStr = errorStr+"Stimuli list for the second attribute.\n"
  }
  if (errorStr != "Missing Fields: \n") {
    alert(errorStr);
  }
  else {
    alert("attributes' parameters saved successfully")
  }
}

document.getElementById("clearAttributes").addEventListener("click", clearAttributes);
document.getElementById("resetAttributes").addEventListener("click", resetAttributes);
var reset_flag = 0 ; //did the form reset (for the stimuli list reset)
function clearAttributes() {
    reset_flag = 1;
    removeAllFirstAttributeStimuli();
    removeAllSecondAttributeStimuli();
    
    document.getElementById('first_attr_in_data').value = '';
    document.getElementById('first_attr_presented').value = '';
    document.getElementById('first_attr_type').options[0].selected = 'true';
    checkFirstAttributeType();
    document.getElementById('first_attr_color').value = '#000000';
    document.getElementById('first_attr_font_size').value = '0';

    document.getElementById('sec_attr_in_data').value = '';
    document.getElementById('sec_attr_presented').value = '';
    document.getElementById('sec_attr_type').options[0].selected = 'true';
    checkSecondAttributeType();
    document.getElementById('sec_attr_color').value = '#000000';
    document.getElementById('sec_attr_font_size').value = '0';

}

function resetAttributes() {
  document.getElementById('first_attr_in_data').value = 'Bad words';
  document.getElementById('first_attr_presented').value = 'Bad words';
  document.getElementById('first_attr_type').options[0].selected = 'true';
  checkFirstAttributeType();
  document.getElementById('first_attr_color').value = '#336600';
  document.getElementById('first_attr_font_size').value = '1.8';

  document.getElementById('sec_attr_in_data').value = 'Good words';
  document.getElementById('sec_attr_presented').value = 'Good words';
  document.getElementById('sec_attr_type').options[0].selected = 'true';
  checkSecondAttributeType();
  document.getElementById('sec_attr_color').value = '#336600';
  document.getElementById('sec_attr_font_size').value = '1.8';
  if (reset_flag == 1)
    resetAttributeStimuliList();
  checkAttributeWordsFirst();
  checkAttributeWordsSec();

}

function resetAttributeStimuliList() {
  var firstList = ["Awful [Word]", "Failure [Word]", "Agony [Word]", "Hurt [Word]", "Horrible [Word]", "Terrible [Word]", "Nasty [Word]", "Evil [Word]"];
  var secondList = ["Laughter [Word]", "Happy [Word]", "Glorious [Word]", "Joy [Word]", "Wonderful [Word]", "Peace [Word]", "Pleasure [Word]", "Love [Word]"];
  var length = firstList.length;
  var first = document.getElementById("first_attr_stimuli");
  var second = document.getElementById("sec_attr_stimuli");
  for (var i = 0; i < length; i++) {
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");

    option1.text = firstList[i];
    first.add(option1);

    option2.text = secondList[i];
    second.add(option2);
    reset_flag = 0;
  }
}


//////////////////////////////////////////BLOCKS PARAMETERS/////////////////////////////////////////////////

document.getElementById("clearBlocks").addEventListener("click", clearBlocks);
function clearBlocks() {
    document.getElementById("categories_trials_blocks").value = '';
    document.getElementById("categories_mini_blocks").value = '';
    document.getElementById("attributes_trials_blocks").value = '';
    document.getElementById("attributes_mini_blocks").value = '';
    document.getElementById("first_combined_trials_blocks").value = '';
    document.getElementById("first_combined_mini_blocks").value = '';
    document.getElementById("second_combined_trials_blocks").value = '';
    document.getElementById("second_combined_mini_blocks").value = '';
    document.getElementById("switch_trials_blocks").value = '';
    document.getElementById("switch_mini_blocks").value = '';
    document.getElementById("random_category").checked = false;
    document.getElementById("random_attribute").checked = false;
}

document.getElementById("resetBlocks").addEventListener("click", resetBlocks);
function resetBlocks() {
    document.getElementById("categories_trials_blocks").value = '20';
    document.getElementById("categories_mini_blocks").value = '5';
    document.getElementById("attributes_trials_blocks").value = '20';
    document.getElementById("attributes_mini_blocks").value = '5';
    document.getElementById("first_combined_trials_blocks").value = '20';
    document.getElementById("first_combined_mini_blocks").value = '5';
    document.getElementById("second_combined_trials_blocks").value = '40';
    document.getElementById("second_combined_mini_blocks").value = '10';
    document.getElementById("switch_trials_blocks").value = '28';
    document.getElementById("switch_mini_blocks").value = '7';
    document.getElementById("random_category").checked = true;
    document.getElementById("random_attribute").checked = false;
}


// document.getElementById("sumbitBlocks").addEventListener("click", saveBlockParameters);
function saveBlockParameters () {
  var errorStr= "Missing fields: \n";
  var categories_trials_blocks = document.getElementById("categories_trials_blocks").value;
  var categories_mini_blocks = document.getElementById("categories_mini_blocks").value;
  console.log("categories_trials_blocks "+categories_trials_blocks, "categories_mini_blocks "+categories_mini_blocks);
  var attributes_trials_blocks = document.getElementById("attributes_trials_blocks").value;
  var attributes_mini_blocks = document.getElementById("attributes_mini_blocks").value;
  console.log("attributes_trials_blocks "+attributes_trials_blocks, "attributes_mini_blocks "+attributes_mini_blocks);
  var first_combined_trials_blocks = document.getElementById("first_combined_trials_blocks").value;
  var first_combined_mini_blocks = document.getElementById("first_combined_mini_blocks").value;
  console.log("first_combined_trials_blocks "+first_combined_trials_blocks, "first_combined_mini_blocks "+first_combined_mini_blocks);
  var second_combined_trials_blocks = document.getElementById("second_combined_trials_blocks").value;
  var second_combined_mini_blocks = document.getElementById("second_combined_mini_blocks").value;
  console.log("second_combined_trials_blocks "+second_combined_trials_blocks, "second_combined_mini_blocks "+second_combined_mini_blocks);
  var switch_trials_blocks = document.getElementById("switch_trials_blocks").value;
  var switch_mini_blocks = document.getElementById("switch_mini_blocks").value;
  console.log("switch_trials_blocks "+switch_trials_blocks, "switch_mini_blocks "+switch_mini_blocks);
  var random_category = document.getElementById("random_category").checked;
  var random_attribute = document.getElementById("random_attribute").checked;
  console.log("random_category "+random_category, "random_attribute "+random_attribute);

  if (categories_trials_blocks == "" || categories_trials_blocks == null) {
    errorStr = errorStr+"Categories - No. of trials in block.\n"
  }
  if (categories_mini_blocks == "" || categories_mini_blocks == null) {
    errorStr = errorStr+"Categories - No. of MiniBlocks.\n"
  }
  if (attributes_trials_blocks == "" || attributes_trials_blocks == null) {
    errorStr = errorStr+"Attributes - No. of trials in block.\n"
  }
  if (attributes_mini_blocks == "" || attributes_mini_blocks == null) {
    errorStr = errorStr+"Attributes - No. of MiniBlocks.\n"
  }
  if (first_combined_trials_blocks == "" || first_combined_trials_blocks == null) {
    errorStr = errorStr+"First Combined Block - No. of trials in block.\n"
  }
  if (first_combined_mini_blocks == "" || first_combined_mini_blocks == null) {
    errorStr = errorStr+"First Combined Block - No. of MiniBlocks.\n"
  }
  if (second_combined_trials_blocks == "" || second_combined_trials_blocks == null) {
    errorStr = errorStr+"Second Combined Block - No. of trials in block.\n"
  }
  if (second_combined_mini_blocks == "" || second_combined_mini_blocks == null) {
    errorStr = errorStr+"Second Combined Block - No. of MiniBlocks.\n"
  }
  if (switch_trials_blocks == "" || switch_trials_blocks == null) {
    errorStr = errorStr+"Switch Block - No. of trials in block.\n"
  }
  if (switch_mini_blocks == "" || switch_mini_blocks == null) {
    errorStr = errorStr+"Switch Block - No. of MiniBlocks.\n"
  }

  if (errorStr != "Missing fields: \n") {
    alert(errorStr);
  }
  else {
    alert("Blocks' parameters saved successfully")
  }
}
var button=document.getElementById('CreateFile');
button.addEventListener("click",saveTextAsFile);
    

function saveTextAsFile()
{
    var textToWrite = buildTextToWrite();
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = "newIAT.txt";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

function buildTextToWrite() {
  var text = ""
  ///////////intro of the file//////////////

  /////check if qualtrics version is requierd////////////
  var qualtrics=document.getElementById("Qualtrics").checked;
  if(qualtrics){
    text+="define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], " +
    "function(APIConstructor, iatExtension){\n\t";
  }
  else{
  text+="define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat8.js'], " +
    "function(APIConstructor, iatExtension){\n\t";
  }
  text+="var API = new APIConstructor();\n\treturn iatExtension({ \n";

  text+="\n///////////////////////////////////////Categories Features//////////////////////////////////////////\n"
  //////////////////////////First CATEGORY/////////////////////////
  text+="\n\t category1 : {\n";
  text += "\t\t name : " +  "'" + document.getElementById("first_name_in_data").value + "',\n";
  text+= "\t\ttitle : {\n\t\t\t media : { ";
  var first_category_type = document.getElementById("first_category_type");
  var first_category_type = first_category_type.options[first_category_type.selectedIndex].text;

  if (first_category_type == "Word") {
    text+= "word : '" + document.getElementById("first_name_presented").value + "'},\n";
    text+= "\t\t\tcss : {color:'" + document.getElementById("first_category_color").value + "', 'font-size':'" + 
    document.getElementById("first_ctg_font_size").value + "em'},\n";
  }

  else {//case category is an image
    text+= "image : '" + document.getElementById("first_name_presented").value + "'},\n";
  }

  text +="\t\t\t height : 4 \n\t\t},\n";
  text+="\t\tstimulusMedia : [\n";
  var first_ctg_stimuli_list = document.getElementById("first_ctg_stimuli");
  var first_ctg_stimuli_list = first_ctg_stimuli_list.options;
  var first_length = first_ctg_stimuli_list.length;
  var word_in_list = 0; //flag for word existence in stimuli list

  for (var i = 0; i < first_length; i++) {
    var temp = first_ctg_stimuli_list[i].text;
    temp = temp.split(" ");
    var stimulus = temp[0];
    var type = temp[1];
    if (type == "[Image]"){
      text+= "\t\t\t{image : '"
    }
    else {
      text+= "\t\t\t{word : '"
      word_in_list = 1;
    }

    if (i < first_length - 1) //hasn't reach the last stimulus
    { 
      text+= stimulus + "'},\n" 
    }
    else { 
      text+= stimulus + "'}\n\t\t],\n"
    }
  }

  if (word_in_list == 1) {// case word - add design elements
    text += "\t\t stimulusCss : {color:'" + document.getElementById("first_ctg_stimuli_color").value + "', 'font-size':'" +
      document.getElementById("first_ctg_stimuli_font_size").value + "em'},\n\t},\n";
  }

  //////////////////////////SECOND CATEGORY/////////////////////////
  text += "\t category2 : { \n";
  text+= "\t\t name : " +  "'" + document.getElementById("sec_name_in_data").value + "',\n";
  text+= "\t\t title : {\n\t\t\t media : { ";

  var sec_category_type = document.getElementById("sec_category_type");
  var sec_category_type = sec_category_type.options[sec_category_type.selectedIndex].text;

  if (sec_category_type == "Word") {
    text += "word : '" + document.getElementById("sec_name_presented").value + "'},\n" +
      "\t\t\t css : {color:'" + document.getElementById("sec_category_color").value + "', 'font-size':'" +
      document.getElementById("sec_ctg_font_size").value + "em'},\n";
  }
  else {//case category is image
    text+= "image : '" + document.getElementById("sec_name_presented").value + "'},\n";
  }

  text += "\t\t\t height : 4 \n\t\t},\n\t\t stimulusMedia : [\n";

  var sec_ctg_stimuli_list = document.getElementById("sec_ctg_stimuli");
  var sec_ctg_stimuli_list = sec_ctg_stimuli_list.options;
  var sec_length = sec_ctg_stimuli_list.length;
  var word_in_list = 0; //flag for word existence in stimuli list

  for (var i = 0; i < sec_length; i++) {
    var temp = sec_ctg_stimuli_list[i].text;
    console.log(temp);
    temp = temp.split(" ");
    var stimulus = temp[0];
    var type = temp[1];
    if (type == "[Image]"){
      text+= "\t\t\t {image : '"
    }
    else {
      text+= "\t\t\t {word : '"
      word_in_list = 1;
    }
    if (i < first_length - 1) //hasn't reach the last stimulus
    { 
      text+= stimulus + "'},\n" 
    }
    else { 
      text+= stimulus + "'}\n\t\t],\n"
    }
  }
  if (word_in_list == 1) {// case word - add design elements
    text+= "\t\tstimulusCss : {color:'" + document.getElementById("sec_ctg_stimuli_color").value + "', 'font-size':'" + 
      document.getElementById("sec_ctg_stimuli_font_size").value + "em'},\n\t},\n";
  }

///////////////////////////////////////////////////Attributes/////////////////////////////
text+="\n///////////////////////////////////////Attributes Features//////////////////////////////////////////\n"
//////////////////////////First ATTRIBUTE/////////////////////////
text+="\n\t attribute1  : {\n";
text += "\t\t name : " +  "'" + document.getElementById("first_attr_in_data").value + "',\n";
text+= "\t\ttitle : {\n\t\t\t media : { ";
var first_att_type = document.getElementById("first_attr_type");
var first_att_type = first_att_type.options[first_att_type.selectedIndex].text;

if (first_att_type == "Word") {
  text+= "word : '" + document.getElementById("first_attr_presented").value + "'},\n";
  text+= "\t\t\tcss : {color:'" + document.getElementById("first_attr_color").value + "', 'font-size':'" + 
  document.getElementById("first_attr_font_size").value + "em'},\n";
}

else {//case attribute is an image
  text+= "image : '" + document.getElementById("first_attr_presented").value + "'},\n";
}

text +="\t\t\t height : 4 \n\t\t},\n";
text+="\t\tstimulusMedia : [\n";
var first_attr_stimuli_list = document.getElementById("first_attr_stimuli");
var first_attr_stimuli_list = first_attr_stimuli_list.options;
var first_length = first_attr_stimuli_list.length;
var word_in_list = 0; //flag for word existence in stimuli list

for (var i = 0; i < first_length; i++) {
  var temp = first_attr_stimuli_list[i].text;
  temp = temp.split(" ");
  var stimulus = temp[0];
  var type = temp[1];
  if (type == "[Image]"){
    text+= "\t\t\t{image : '"
  }
  else {
    text+= "\t\t\t{word : '"
    word_in_list = 1;
  }

  if (i < first_length - 1) //hasn't reach the last stimulus
  { 
    text+= stimulus + "'},\n" 
  }
  else { 
    text+= stimulus + "'}\n\t\t],\n"
  }
}

if (word_in_list == 1) {// case word - add design elements
  text += "\t\t stimulusCss : {color:'" + document.getElementById("first_attr_stimuli_color").value + "', 'font-size':'" +
    document.getElementById("first_attr_stimuli_font_size").value + "em'},\n\t},\n";
}

//////////////////////////SECOND CATEGORY/////////////////////////
text += "\t attribute2  : { \n";
text+= "\t\t name : " +  "'" + document.getElementById("sec_attr_in_data").value + "',\n";
text+= "\t\t title : {\n\t\t\t media : { ";

var sec_attr_type = document.getElementById("sec_attr_type");
var sec_attr_type = sec_attr_type.options[sec_attr_type.selectedIndex].text;

if (sec_attr_type == "Word") {
  text += "word : '" + document.getElementById("sec_attr_presented").value + "'},\n" +
    "\t\t\t css : {color:'" + document.getElementById("sec_attr_color").value + "', 'font-size':'" +
    document.getElementById("sec_attr_font_size").value + "em'},\n";
}
else {//case category is image
  text+= "image : '" + document.getElementById("sec_attr_presented").value + "'},\n";
}

text += "\t\t\t height : 4 \n\t\t},\n\t\t stimulusMedia : [\n";

var sec_attr_stimuli_list = document.getElementById("sec_attr_stimuli");
var sec_attr_stimuli_list = sec_attr_stimuli_list.options;
var sec_length = sec_attr_stimuli_list.length;
var word_in_list = 0; //flag for word existence in stimuli list

for (var i = 0; i < sec_length; i++) {
  var temp = sec_attr_stimuli_list[i].text;
  console.log(temp);
  temp = temp.split(" ");
  var stimulus = temp[0];
  var type = temp[1];
  if (type == "[Image]"){
    text+= "\t\t\t {image : '"
  }
  else {
    text+= "\t\t\t {word : '"
    word_in_list = 1;
  }
  if (i < first_length - 1) //hasn't reach the last stimulus
  { 
    text+= stimulus + "'},\n" 
  }
  else { 
    text+= stimulus + "'}\n\t\t],\n"
  }
}
if (word_in_list == 1) {// case word - add design elements
  text+= "\t\tstimulusCss : {color:'" + document.getElementById("sec_attr_stimuli_color").value + "', 'font-size':'" + 
    document.getElementById("sec_attr_stimuli_font_size").value + "em'},\n\t},\n";
}
  //////////////////////////////////URL/////////////////////////////////////////////

  //if the user wrote a url path, show it in the creating file
  if(document.getElementById("base_url").value!=''){
    text+= "\t\tbase_url : \n\t\t\t{image : '" + document.getElementById("base_url").value + "'},\n";
    text+="\n\t blockAttributes_nTrials : "+document.getElementById("attributes_trials_blocks").value + ",\n";
  }

  //adding task parameters
  text+="\n///////////////////////////////////////Task Features//////////////////////////////////////////\n"
  if(qualtrics){
  text+="\n\t showDebriefing:  "+document.getElementById("debriefing").checked+",\n";
  text+="\t fullscreen:  "+document.getElementById("full_screen").checked+",\n";
  text+="\t isTouch:  "+document.getElementById("touch").checked+",\n";
  }
  text+="\t remindError :  "+document.getElementById("error_message").checked+",\n";
  text+="\t errorCorrection :  "+document.getElementById("correct_wrong_answer").checked+",\n";

  //adding Block Parameters
  text+="\n///////////////////////////////////////Block Parameter//////////////////////////////////////////\n"
  text+="\n\t blockAttributes_nTrials : "+document.getElementById("attributes_trials_blocks").value + ",\n";
  text+="\t blockAttributes_nMiniBlocks : "+document.getElementById("attributes_mini_blocks").value + ",\n";
  text+="\t blockCategories_nTrials : "+document.getElementById("categories_trials_blocks").value + ",\n";
  text+="\t blockCategories_nMiniBlocks : "+document.getElementById("categories_mini_blocks").value + ",\n";
  text+="\t blockFirstCombined_nTrials : "+document.getElementById("first_combined_trials_blocks").value + ",\n";
  text+="\t blockFirstCombined_nMiniBlocks : "+document.getElementById("first_combined_mini_blocks").value + ",\n";
  text+="\t blockSecondCombined_nTrials : "+document.getElementById("second_combined_trials_blocks").value + ",\n";
  text+="\t blockSecondCombined_nMiniBlocks : "+document.getElementById("second_combined_mini_blocks").value + ",\n";
  text+="\t blockSwitch_nTrials : "+document.getElementById("switch_trials_blocks").value + ",\n";
  text+="\t blockSwitch_nMiniBlocks : "+document.getElementById("switch_mini_blocks").value + ",\n";
  text+="\t randomAttSide : "+document.getElementById("random_attribute").checked+",\n";
  text+="\t randomBlockOrder : "+document.getElementById("random_category").checked+",\n";


  //adding text features

  //check if touched device is require
  var touch = document.getElementById("touch").checked;
  if(!touch){
  text+="\n///////////////////////////////////////Text Features//////////////////////////////////////////\n"
  text+="\n\t remindErrorText :  '"+document.getElementById("textOnError").value + "',\n";
  text+="\t leftKeyText  :  '"+document.getElementById("leftKeyText").value + "',\n";
  text+="\t rightKeyText  :  '"+document.getElementById("rightKeyText").value+"',\n";
  text+="\t orText  :  '"+document.getElementById("orText").value+"',\n";
  text+="\t finalText  :  '"+document.getElementById("FinalText").value+"',\n";
  text+="\t instAttributePractice  :  '"+document.getElementById("AttributesText").value+"',\n";
  text+="\t instCategoriesPractice  :  '"+document.getElementById("CategoriesText").value+"',\n";
  text+="\t instFirstCombined   :  '"+document.getElementById("FirstCombinedText").value+"',\n";
  text+="\t instSecondCombined    :  '"+document.getElementById("SecondCombinedTxt").value+"',\n";
  text+="\t instSwitchCategories    :  '"+document.getElementById("instSwitchCategories").value+"',\n";
  text+="\t preDebriefingText    :  '"+document.getElementById("preDebriefingText").value+"'\n";
  }
  else{
  text+="\n///////////////////////////////////////Text Features//////////////////////////////////////////\n"
  text+="\n\t remindErrorTextTouch :  '"+document.getElementById("textOnError").value + "',\n";
  text+="\t finalTouchText  :  '"+document.getElementById("FinalText").value+"',\n";
  text+="\t instAttributePracticeTouch  :  '"+document.getElementById("AttributesText").value+"',\n";
  text+="\t instCategoriesPracticeTouch  :  '"+document.getElementById("CategoriesText").value+"',\n";
  text+="\t instFirstCombinedTouch   :  '"+document.getElementById("FirstCombinedText").value+"',\n";
  text+="\t instSecondCombinedTouch    :  '"+document.getElementById("SecondCombinedTxt").value+"',\n";
  text+="\t instSwitchCategoriesTouch    :  '"+document.getElementById("instSwitchCategories").value+"',\n";
  text+="\t preDebriefingTouchText    :  '"+document.getElementById("preDebriefingText").value+"'\n";
  }
  

  //closing file

 
  text+="\t});\n});";
  return text;
}


function checkChangeInText(){
  var touch = document.getElementById("touch").checked;
  console.log("this is the touch check: ", touch)
  if(!touch){//changed to be not touched device
    console.log("entered if-touch should be flase");
    if(!textOnErrorChanged){
      document.getElementById("textOnError").value='<p align="center" style="font-size:"0.6em"; font-family:arial">' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. '+'Press the other key to continue.<p/>';
    }
    if(!leftKeyTextChanged){
      document.getElementById("leftKeyText").value='Press "E" for';
    }
   
    if (!orTextChangedChanged){
        document.getElementById("orText").value='or';
    }

    if (!rightKeyTextChanged){
        document.getElementById("rightKeyText").value='Press "I" for';
    }

    
    if (!FinalTextChanged){
        document.getElementById("FinalText").value='Press space to continue to the next task';
    }

    if (!AttributesTextChanged){
        document.getElementById("AttributesText").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#0000ff">leftAttribute.</font>' +'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/><br/>' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Press the other key to continue.<br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
    }

    if (!CategoriesTextChanged){
        document.getElementById("CategoriesText").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#336600">leftCategory</font>. ' +'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#336600">rightCategory</font>.<br/>' +'Items will appear one at a time.<br/><br/>' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Press the other key to continue.<br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
    }

    
    if (!FirstCombinedTextChanged){
        document.getElementById("FirstCombinedText").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'Use the <b>E</b> key for <font color="#336600">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +'Use the <b>I</b> key for <font color="#336600">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +'Each item belongs to only one category.<br/><br/>' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Press the other key to continue.<br/>' + '<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
    }

    if (!SecondCombinedTxtChanged){
        document.getElementById("SecondCombinedTxt").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'This is the same as the previous part.<br/>' +'Use the <b>E</b> key for <font color="#336600">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +'Use the <b>I</b> key for <font color="#336600">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +'Each item belongs to only one category.<br/><br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
    }


    if (!instSwitchCategoriesChanged){
        document.getElementById("instSwitchCategories").value='<div><p align="center" style="font-size:20px; font-family:arial">'+'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'<b>Watch out, the labels have changed position!</b><br/>' +'Put the left finger on the <b>E</b> key for <font color="#336600">leftCategory</font>.<br/>' +'Put the right finger on the <b>I</b> key for <font color="#336600">rightCategory</font>.<br/><br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
    }

    
    if (!preDebriefingTextChanged){
        document.getElementById("preDebriefingText").value='Press space to continue to your feedback';
    }

  }
else{
  console.log("entered else");
    if (!textOnErrorChanged){
        document.getElementById("textOnError").value='<p align="center" style="font-size:"1.4em"; font-family:arial">' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Touch the other side to continue.<p/>';
    }

    
    if (!leftKeyTextChanged){
        document.getElementById("leftKeyText").value='Press "E" for';
    }

    
    if (!orTextChangedChanged){
        document.getElementById("orText").value='or';
    }


    if (!rightKeyTextChanged){
        document.getElementById("rightKeyText").value='Press "I" for';
    }

    
    if (!FinalTextChanged){
        document.getElementById("FinalText").value='Touch the bottom green area to continue to the next task';
    }

    if (!AttributesTextChanged){
        document.getElementById("AttributesText").value='<div><p align="center"><u>Part blockNum of nBlocks</u></p><p align="left" style="margin-left:5px"><br/>Put a left finger over the the <b>left</b> green area for items that belong to the category <font color="#0000ff">leftAttribute</font>.<br/>Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</p><p align="center">Touch the <b>lower </b> green area to start.</p></div>'

      }

    if (!CategoriesTextChanged){
        document.getElementById("CategoriesText").value='<div><p align="center"><u>Part blockNum of nBlocks</u></p><p align="left" style="margin-left:5px"><br/>Put a left finger over the the <b>left</b> green area for items that belong to the category <font color="#0000ff">leftAttribute</font>.<br/>Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</p><p align="center">Touch the <b>lower </b> green area to start.</p></div>'

    }

    if (!FirstCombinedTextChanged){
        document.getElementById("FirstCombinedText").value='<div>'+
        '<p align="center"><u>Part blockNum of nBlocks</u></p>'+
        '<br/>'+
        '<br/>'+
        '<p align="left" style="margin-left:5px">'+
          'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.<br/>'+
          'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.<br/>'+
          '<br/>'+
          '<u>Go as fast as you can</u> while being accurate.<br/>'+
        '</p>'+
        '<p align="center">Touch the <b>lower </b> green area to start.</p>'+
      '</div>';
    }


    
    if (!SecondCombinedTxtChanged){
        document.getElementById("SecondCombinedTxt").value='<div>'+
        '<p align="center"><u>Part blockNum of nBlocks</u></p>'+
        '<br/>'+
        '<br/>'+
        '<p align="left" style="margin-left:5px">'+
          'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.<br/>'+
          'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.<br/>'+
          '<br/>'+
          '<u>Go as fast as you can</u> while being accurate.<br/>'+
        '</p>'+
        '<p align="center">Touch the <b>lower </b> green area to start.</p>'+
      '</div>';
    }


    
    
    if (!instSwitchCategoriesChanged){
        document.getElementById("instSwitchCategories").value='<div>'+
        '<p align="center">'+
          '<u>Part blockNum of nBlocks</u>'+
        '</p>'+
        '<p align="left" style="margin-left:5px">'+
          '<br/>'+
          'Watch out, the labels have changed position!<br/>'+
            'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items.<br/>'+
            'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items.<br/>'+
            'Items will appear one at a time.'+
            '<br/>'+
            'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.<br/>'+
          '</p>'+
          '<p align="center">Touch the <b>lower </b> green area to start.</p>'+
      '</div>';
    }

    
    if (!preDebriefingTextChanged){
        document.getElementById("preDebriefingText").value='Touch the bottom green area to continue to your feedback';
    }

  }

  
  
  
  
}

//inforamtion button - on hover//////////////////

///text presented on user error
var button=document.getElementById('information');
button.addEventListener("mouseenter",showinfo);
 function showinfo(e){
    e.preventDefault();
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
   
 }

   button.addEventListener("mouseleave",deletinfo);
   function deletinfo(e){
         e.preventDefault();
         var popup = document.getElementById("myPopup");
         popup.classList.toggle("show");

   }
 ///// left, of right text
   var button=document.getElementById('information2');
   button.addEventListener("mouseenter",showinfo2);
    function showinfo2(e){
       e.preventDefault();
       var popup = document.getElementById("myPopup2");
       popup.classList.toggle("show");
      
    }
   
      button.addEventListener("mouseleave",deletinfo2);
      function deletinfo2(e){
            e.preventDefault();
            var popup = document.getElementById("myPopup2");
            popup.classList.toggle("show");
   
      }


      //////final text
      var button=document.getElementById('information3');
      button.addEventListener("mouseenter",showinfo3);
       function showinfo3(e){
          e.preventDefault();
          var popup = document.getElementById("myPopup3");
          popup.classList.toggle("show");
         
       }
      
         button.addEventListener("mouseleave",deletinfo3);
         function deletinfo3(e){
               e.preventDefault();
               var popup = document.getElementById("myPopup3");
               popup.classList.toggle("show");
      
         }

         /////instruction text - attributes
         var button=document.getElementById('information4');
         button.addEventListener("mouseenter",showinfo4);
          function showinfo4(e){
             e.preventDefault();
             var popup = document.getElementById("myPopup4");
             popup.classList.toggle("show");
            
          }
         
            button.addEventListener("mouseleave",deletinfo4);
            function deletinfo4(e){
                  e.preventDefault();
                  var popup = document.getElementById("myPopup4");
                  popup.classList.toggle("show");
         
            }
      



            /////instruction text - categories
         var button=document.getElementById('information5');
         button.addEventListener("mouseenter",showinfo5);
          function showinfo5(e){
             e.preventDefault();
             var popup = document.getElementById("myPopup5");
             popup.classList.toggle("show");
            
          }
         
            button.addEventListener("mouseleave",deletinfo5);
            function deletinfo5(e){
                  e.preventDefault();
                  var popup = document.getElementById("myPopup5");
                  popup.classList.toggle("show");
         
            }

               /////instruction text - first combined
         var button=document.getElementById('information6');
         button.addEventListener("mouseenter",showinfo6);
          function showinfo6(e){
             e.preventDefault();
             var popup = document.getElementById("myPopup6");
             popup.classList.toggle("show");
            
          }
         
            button.addEventListener("mouseleave",deletinfo6);
            function deletinfo6(e){
                  e.preventDefault();
                  var popup = document.getElementById("myPopup6");
                  popup.classList.toggle("show");
         
            }


             /////instruction text - second combined
         var button=document.getElementById('information7');
         button.addEventListener("mouseenter",showinfo7);
          function showinfo7(e){
             e.preventDefault();
             var popup = document.getElementById("myPopup7");
             popup.classList.toggle("show");
            
          }
         
            button.addEventListener("mouseleave",deletinfo7);
            function deletinfo7(e){
                  e.preventDefault();
                  var popup = document.getElementById("myPopup7");
                  popup.classList.toggle("show");
         
            }


            
   
///////////////////////////text Paramters - saving////////////////////////////////////
// document.getElementById("sumbitTextsParameters").addEventListener("click", saveTextParameters);
function saveTextParameters () {
  var textOnError = document.getElementById("textOnError").value;
  console.log(textOnError);
  var leftKeyText = document.getElementById("leftKeyText").value;
  console.log(leftKeyText);
  var orText = document.getElementById("orText").value;
  console.log(orText);
  var rightKeyText = document.getElementById("rightKeyText").value;
  console.log(rightKeyText);
  var FinalText = document.getElementById("FinalText").value;
  console.log(FinalText);
  var AttributesText = document.getElementById("AttributesText").value;
  console.log(AttributesText);
  var CategoriesText = document.getElementById("CategoriesText").value;
  console.log(CategoriesText);
  var FirstCombinedText = document.getElementById("FirstCombinedText").value;
  console.log(FirstCombinedText);
  var SecondCombinedTxt = document.getElementById("SecondCombinedTxt").value;
  console.log(SecondCombinedTxt);
  var instSwitchCategories=document.getElementById("instSwitchCategories").value;
  console.log(instSwitchCategories);
  var preDebriefingText=document.getElementById("preDebriefingText").value;
  console.log(preDebriefingText);
  
}


///////////////////////////text Paramters - reset////////////////////////////////////
document.getElementById("resetTextsParameters").addEventListener("click", resetTextParameters);
function resetTextParameters () {
  var textOnErrorChanged=false;
  
  var leftKeyTextChanged = false;
  
  var orTextChangedChanged = false;
  
  var rightKeyTextChanged = false;
  
  var FinalTextChanged = false;
  
  var AttributesTextChanged = false;
  
  var CategoriesTextChanged = false;
  
  var FirstCombinedTextChanged = false;
  
  var SecondCombinedTxtChanged = false;
 
  var instSwitchCategoriesChanged=false;
  
  var preDebriefingTextChanged=false;
  
  var touch = document.getElementById("touch").checked;
  if(!touch){
  var textOnError = document.getElementById("textOnError").value='<p align="center" style="font-size:"0.6em"; font-family:arial">' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. '+'Press the other key to continue.<p/>';
  console.log(textOnError);
  var leftKeyText = document.getElementById("leftKeyText").value='Press "E" for';
  console.log(leftKeyText);
  var orText = document.getElementById("orText").value='or';
  console.log(orText);
  var rightKeyText = document.getElementById("rightKeyText").value='Press "I" for';
  console.log(rightKeyText);
  var FinalText = document.getElementById("FinalText").value='Press space to continue to the next task';
  console.log(FinalText);
  var AttributesText = document.getElementById("AttributesText").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#0000ff">leftAttribute.</font>' +'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/><br/>' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Press the other key to continue.<br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
  console.log(AttributesText);
  var CategoriesText = document.getElementById("CategoriesText").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#336600">leftCategory</font>. ' +'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#336600">rightCategory</font>.<br/>' +'Items will appear one at a time.<br/><br/>' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Press the other key to continue.<br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
  console.log(CategoriesText);
  var FirstCombinedText = document.getElementById("FirstCombinedText").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'Use the <b>E</b> key for <font color="#336600">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +'Use the <b>I</b> key for <font color="#336600">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +'Each item belongs to only one category.<br/><br/>' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Press the other key to continue.<br/>' + '<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
  console.log(FirstCombinedText);
  var SecondCombinedTxt = document.getElementById("SecondCombinedTxt").value='<div><p align="center" style="font-size:20px; font-family:arial">' +'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'This is the same as the previous part.<br/>' +'Use the <b>E</b> key for <font color="#336600">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +'Use the <b>I</b> key for <font color="#336600">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +'Each item belongs to only one category.<br/><br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
  console.log(SecondCombinedTxt);
  var instSwitchCategories = document.getElementById("instSwitchCategories").value='<div><p align="center" style="font-size:20px; font-family:arial">'+'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +'<b>Watch out, the labels have changed position!</b><br/>' +'Put the left finger on the <b>E</b> key for <font color="#336600">leftCategory</font>.<br/>' +'Put the right finger on the <b>I</b> key for <font color="#336600">rightCategory</font>.<br/><br/>' +'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>';
  console.log(instSwitchCategories);
  var preDebriefingText = document.getElementById("preDebriefingText").value='Press space to continue to your feedback';
  console.log(preDebriefingText);
  }
  else{
    updateTouchText();
  }
  
}
//update default text to be touche device text
function updateTouchText(){
  var textOnError = document.getElementById("textOnError").value='<p align="center" style="font-size:"1.4em"; font-family:arial">' +'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +'Touch the other side to continue.<p/>';
  console.log(textOnError);
  var leftKeyText = document.getElementById("leftKeyText").value='Press "E" for';
  console.log(leftKeyText);
  var orText = document.getElementById("orText").value='or';
  console.log(orText);
  var rightKeyText = document.getElementById("rightKeyText").value='Press "I" for';
  console.log(rightKeyText);
  var FinalText = document.getElementById("FinalText").value='Touch the bottom green area to continue to the next task';
  console.log(FinalText);
  var AttributesText = document.getElementById("AttributesText").value='<div><p align="center"><u>Part blockNum of nBlocks</u></p><p align="left" style="margin-left:5px"><br/>Put a left finger over the the <b>left</b> green area for items that belong to the category <font color="#0000ff">leftAttribute</font>.<br/>Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</p><p align="center">Touch the <b>lower </b> green area to start.</p></div>';
  console.log(AttributesText);
  var CategoriesText = document.getElementById("CategoriesText").value='<div><p align="center"><u>Part blockNum of nBlocks</u></p><p align="left" style="margin-left:5px"><br/>Put a left finger over the the <b>left</b> green area for items that belong to the category <font color="#0000ff">leftAttribute</font>.<br/>Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/>Items will appear one at a time.<br/><br/>If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</p><p align="center">Touch the <b>lower </b> green area to start.</p></div>';
  console.log(CategoriesText);
  var FirstCombinedText = document.getElementById("FirstCombinedText").value='<div>'+
  '<p align="center"><u>Part blockNum of nBlocks</u></p>'+
  '<br/>'+
  '<br/>'+
  '<p align="left" style="margin-left:5px">'+
    'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.<br/>'+
    'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.<br/>'+
    '<br/>'+
    '<u>Go as fast as you can</u> while being accurate.<br/>'+
  '</p>'+
  '<p align="center">Touch the <b>lower </b> green area to start.</p>'+
'</div>';
  console.log(FirstCombinedText);
  var SecondCombinedTxt = document.getElementById("SecondCombinedTxt").value='<div>'+
  '<p align="center"><u>Part blockNum of nBlocks</u></p>'+
  '<br/>'+
  '<br/>'+
  '<p align="left" style="margin-left:5px">'+
    'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.<br/>'+
    'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.<br/>'+
    '<br/>'+
    '<u>Go as fast as you can</u> while being accurate.<br/>'+
  '</p>'+
  '<p align="center">Touch the <b>lower </b> green area to start.</p>'+
'</div>';
  console.log(SecondCombinedTxt);
  var instSwitchCategories = document.getElementById("instSwitchCategories").value='<div>'+
  '<p align="center">'+
    '<u>Part blockNum of nBlocks</u>'+
  '</p>'+
  '<p align="left" style="margin-left:5px">'+
    '<br/>'+
    'Watch out, the labels have changed position!<br/>'+
      'Put a left finger over the <b>left</b> green area for <font color="#336600">leftCategory</font> items.<br/>'+
      'Put a right finger over the <b>right</b> green area for <font color="#336600">rightCategory</font> items.<br/>'+
      'Items will appear one at a time.'+
      '<br/>'+
      'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.<br/>'+
    '</p>'+
    '<p align="center">Touch the <b>lower </b> green area to start.</p>'+
'</div>';
  console.log(instSwitchCategories);
  var preDebriefingText = document.getElementById("preDebriefingText").value='Touch the bottom green area to continue to your feedback';
  console.log(preDebriefingText);
  
}
///////////////////////////text Paramters - Clear////////////////////////////////////
document.getElementById("ClearTextsParameters").addEventListener("click", ClearTextParameters);
function ClearTextParameters () {
  var textOnError = document.getElementById("textOnError").value='';
  console.log(textOnError);
  var leftKeyText = document.getElementById("leftKeyText").value='';
  console.log(leftKeyText);
  var orText = document.getElementById("orText").value='';
  console.log(orText);
  var rightKeyText = document.getElementById("rightKeyText").value='';
  console.log(rightKeyText);
  var FinalText = document.getElementById("FinalText").value='';
  console.log(FinalText);
  var AttributesText = document.getElementById("AttributesText").value='';
  console.log(AttributesText);
  var CategoriesText = document.getElementById("CategoriesText").value='';
  console.log(CategoriesText);
  var FirstCombinedText = document.getElementById("FirstCombinedText").value='';
  console.log(FirstCombinedText);
  var SecondCombinedTxt = document.getElementById("SecondCombinedTxt").value='';
  console.log(SecondCombinedTxt);
  var instSwitchCategories = document.getElementById("instSwitchCategories").value='';
  console.log(instSwitchCategories);
  var preDebriefingText = document.getElementById("preDebriefingText").value='';
  console.log(preDebriefingText);
  
  
  
}

/////////////check qualtrics
function checkedQualtrics(){
  var qualtrics=document.getElementById("Qualtrics").checked;
  if(!qualtrics){
    document.getElementById("full_screen").checked=false;
    document.getElementById("debriefing").checked=false;
  }
}

function checkFullScreen(){
  var fullscreen=document.getElementById("full_screen").checked;
  var qualtrics=document.getElementById("Qualtrics").checked;
  if(!qualtrics && fullscreen){
    alert("Full-Screen is not avalible in non qualtrics version");
    document.getElementById("full_screen").checked=false;
}
}

function checkShowDebriefing(){
  var showDebriefing=document.getElementById("debriefing").checked;
  var qualtrics=document.getElementById("Qualtrics").checked;
  if(!qualtrics && showDebriefing){
    alert("Show Debriefing is not avalible in non qualtrics version");
    document.getElementById("debriefing").checked=false;
}
}


        /////added by elinor - info boxes for task parametes
        
        ///touch device
        var button=document.getElementById('information8');
        button.addEventListener("mouseenter",showinfo8);
         function showinfo8(e){
            e.preventDefault();
            var popup = document.getElementById("myPopup8");
            popup.classList.toggle("show");
           
         }
           button.addEventListener("mouseleave",deletinfo8);
           function deletinfo8(e){
                 e.preventDefault();
                 var popup = document.getElementById("myPopup8");
                 popup.classList.toggle("show");
        
           }

        ///full screen
           var button=document.getElementById('information9');
           button.addEventListener("mouseenter",showinfo9);
            function showinfo9(e){
               e.preventDefault();
               var popup = document.getElementById("myPopup9");
               popup.classList.toggle("show");
              
            }
           
              button.addEventListener("mouseleave",deletinfo9);
              function deletinfo9(e){
                    e.preventDefault();
                    var popup = document.getElementById("myPopup9");
                    popup.classList.toggle("show");
           
              }
          ///debriefing
          var button=document.getElementById('information10');
          button.addEventListener("mouseenter",showinfo10);
           function showinfo10(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup10");
              popup.classList.toggle("show");
             
           }
          
             button.addEventListener("mouseleave",deletinfo10);
             function deletinfo10(e){
                   e.preventDefault();
                   var popup = document.getElementById("myPopup10");
                   popup.classList.toggle("show");
          
             }

          /// error messege
          var button=document.getElementById('information11');
          button.addEventListener("mouseenter",showinfo11);
           function showinfo11(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup11");
              popup.classList.toggle("show");
             
           }
          
             button.addEventListener("mouseleave",deletinfo11);
             function deletinfo11(e){
                   e.preventDefault();
                   var popup = document.getElementById("myPopup11");
                   popup.classList.toggle("show");
          
             }

            /// must correct the answer
          var button=document.getElementById('information12');
          button.addEventListener("mouseenter",showinfo12);
           function showinfo12(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup12");
              popup.classList.toggle("show");
             
           }
          
             button.addEventListener("mouseleave",deletinfo12);
             function deletinfo12(e){
                   e.preventDefault();
                   var popup = document.getElementById("myPopup12");
                   popup.classList.toggle("show");
          
             }
          // Images URL
          var button=document.getElementById('information13');
          button.addEventListener("mouseenter",showinfo13);
           function showinfo13(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup13");
              popup.classList.toggle("show");
             
           }
          
             button.addEventListener("mouseleave",deletinfo13);
             function deletinfo13(e){
                   e.preventDefault();
                   var popup = document.getElementById("myPopup13");
                   popup.classList.toggle("show");
          
             }
          // CATEGORIES INFO
          // first -Category name as will appear in the data:
          var button=document.getElementById('information14');
          button.addEventListener("mouseenter",showinfo14);
            function showinfo14(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup14");
              popup.classList.toggle("show");
              
            }
          
              button.addEventListener("mouseleave",deletinfo14);
              function deletinfo14(e){
                    e.preventDefault();
                    var popup = document.getElementById("myPopup14");
                    popup.classList.toggle("show");
          
              }
          // first -Category name as will appear to the user
          var button=document.getElementById('information15');
          button.addEventListener("mouseenter",showinfo15);
            function showinfo15(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup15");
              popup.classList.toggle("show");
              
            }
          
              button.addEventListener("mouseleave",deletinfo15);
              function deletinfo15(e){
                    e.preventDefault();
                    var popup = document.getElementById("myPopup15");
                    popup.classList.toggle("show");
          
          }
            // second -Category name as will appear in the data:
            var button=document.getElementById('information16');
            button.addEventListener("mouseenter",showinfo16);
              function showinfo16(e){
                e.preventDefault();
                var popup = document.getElementById("myPopup16");
                popup.classList.toggle("show");
                
              }
            
                button.addEventListener("mouseleave",deletinfo16);
                function deletinfo16(e){
                      e.preventDefault();
                      var popup = document.getElementById("myPopup16");
                      popup.classList.toggle("show");
            
                }
          // second -Category name as will appear to the user
          var button=document.getElementById('information17');
          button.addEventListener("mouseenter",showinfo17);
            function showinfo17(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup17");
              popup.classList.toggle("show");
              
            }
          
              button.addEventListener("mouseleave",deletinfo17);
              function deletinfo17(e){
                    e.preventDefault();
                    var popup = document.getElementById("myPopup17");
                    popup.classList.toggle("show");
          
          }
          //switch categories text // added by gal

          var button=document.getElementById('information18');
          button.addEventListener("mouseenter",showinfo18);
           function showinfo18(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup18");
              popup.classList.toggle("show");
             
           }
          
             button.addEventListener("mouseleave",deletinfo18);
             function deletinfo18(e){
                   e.preventDefault();
                   var popup = document.getElementById("myPopup18");
                   popup.classList.toggle("show");
          
             }
             //debriefing

             var button=document.getElementById('information19');
             button.addEventListener("mouseenter",showinfo19);
              function showinfo19(e){
                 e.preventDefault();
                 var popup = document.getElementById("myPopup19");
                 popup.classList.toggle("show");
                
              }
             
                button.addEventListener("mouseleave",deletinfo19);
                function deletinfo19(e){
                      e.preventDefault();
                      var popup = document.getElementById("myPopup19");
                      popup.classList.toggle("show");
             
                }

            //First Attribute

            var button=document.getElementById('information20');
            button.addEventListener("mouseenter",showinfo20);
            function showinfo20(e){
                e.preventDefault();
                var popup = document.getElementById("myPopup20");
                popup.classList.toggle("show");
              
            }
            
              button.addEventListener("mouseleave",deletinfo20);
              function deletinfo20(e){
                    e.preventDefault();
                    var popup = document.getElementById("myPopup20");
                    popup.classList.toggle("show");
            
              }

          var button=document.getElementById('information21');
          button.addEventListener("mouseenter",showinfo21);
          function showinfo21(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup21");
              popup.classList.toggle("show");
            
          }
          
            button.addEventListener("mouseleave",deletinfo21);
            function deletinfo21(e){
                  e.preventDefault();
                  var popup = document.getElementById("myPopup21");
                  popup.classList.toggle("show");
          
            }

        //Second Attribute

        var button=document.getElementById('information22');
        button.addEventListener("mouseenter",showinfo22);
        function showinfo22(e){
            e.preventDefault();
            var popup = document.getElementById("myPopup22");
            popup.classList.toggle("show");
          
        }
        
          button.addEventListener("mouseleave",deletinfo22);
          function deletinfo22(e){
                e.preventDefault();
                var popup = document.getElementById("myPopup22");
                popup.classList.toggle("show");
        
          }

      var button=document.getElementById('information23');
      button.addEventListener("mouseenter",showinfo23);
      function showinfo23(e){
          e.preventDefault();
          var popup = document.getElementById("myPopup23");
          popup.classList.toggle("show");
        
      }
      
        button.addEventListener("mouseleave",deletinfo23);
        function deletinfo23(e){
              e.preventDefault();
              var popup = document.getElementById("myPopup23");
              popup.classList.toggle("show");
      
        }
        //qualtrics

        var button=document.getElementById('information24');
        button.addEventListener("mouseenter",showinfo24);
        function showinfo24(e){
            e.preventDefault();
            var popup = document.getElementById("myPopup24");
            popup.classList.toggle("show");
          
        }
        
          button.addEventListener("mouseleave",deletinfo24);
          function deletinfo24(e){
                e.preventDefault();
                var popup = document.getElementById("myPopup24");
                popup.classList.toggle("show");
        
          }


            
   

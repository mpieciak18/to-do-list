class popupTask {

    // (A) ATTACH POPUP HTML
    constructor() {
      // (A1) POPUP WRAPPER
      this.pWrap = document.createElement("div");
      this.pWrap.id = "pop-up-task";
      document.body.appendChild(this.pWrap);
      
      // (A2) POPUP BOX
      this.pBox = document.createElement("div");
      this.pBox.id = "pop-box-task";
      this.pWrap.appendChild(this.pBox);
      
      // (A3) TITLE
      this.pTitle = document.createElement("h1");
      this.pTitle.id = "pop-title-task";
      this.pTitle.innerHTML = 'Add a New Task';
      this.pBox.appendChild(this.pTitle);
  
      // (A4) CREATE FORM
      this.pForm = document.createElement("form");
      this.pForm.action = "";
      this.pForm.method = "";
      this.pForm.setAttribute('autocomplete', 'off');
  
      // (A5) FORM FIELD ONE (DESCRIPTION)
      this.pLabelOne = document.createElement("LABEL");
      this.pLabelOne.classList = "pop-labels";
      this.pLabelOne.htmlFor = "input-one";
      this.pLabelOne.innerHTML = "Task Description:"
      this.pForm.appendChild(this.pLabelOne);
      this.pInputOne = document.createElement("INPUT");
      this.pInputOne.classList = "pop-inputs";
      this.pInputOne.id = "input-one-task";
      this.pInputOne.name = "input-one";
      this.pInputOne.placeholder = 'Enter the task\'s description.';
      this.pInputOne.setAttribute("type", "text");
      this.pInputOne.setAttribute("minlength", "1");
      this.pInputOne.setAttribute('required', 'true')
      this.pForm.appendChild(this.pInputOne);
  
      // (A6) FORM FIELD TWO (DUE DATE)
      this.pLabelTwo = document.createElement("LABEL");
      this.pLabelTwo.classList = "pop-labels";
      this.pLabelTwo.htmlFor = "input-two";
      this.pLabelTwo.innerHTML = "Due Date:"
      this.pForm.appendChild(this.pLabelTwo);
      this.pInputTwo = document.createElement("INPUT");
      this.pInputTwo.classList = "pop-inputs";
      this.pInputTwo.id = "input-two-task";
      this.pInputTwo.name = "input-two";
      this.pInputTwo.placeholder = 'Enter the task\'s due date';
      this.pInputTwo.setAttribute("type", "date");
      this.pInputTwo.setAttribute('required', 'true');
      this.pForm.appendChild(this.pInputTwo);
  
       // (A10) FORM SUBMIT BUTTON
      this.pSubmit = document.createElement("BUTTON");
      this.pSubmit.id = "button-task";
      this.pSubmit.innerText = 'Add New Task';
      this.pSubmit.setAttribute("type", "button");
      this.pForm.appendChild(this.pSubmit);
  
      // (A11) APPEND FORM TO BOX
  
      this.pBox.appendChild(this.pForm);
      
      // (A12) CLOSE
      this.pClose = document.createElement("div");
      this.pClose.id = "pop-close-task";
      this.pClose.innerHTML = "✕";
      this.pClose.onclick = this.close;
      this.pBox.appendChild(this.pClose);
  
      return this;
    };
    
    // (B) OPEN POPUP
    open = () => {
      this.pWrap.classList.add("open");
    };
  
    // (C) CLOSE POPUP
    close = () => {
      this.pWrap.classList.remove("open");
    };
  };
  
  export { popupTask };
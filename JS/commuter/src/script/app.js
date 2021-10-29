const add = document.getElementById("add");
const headers = document.getElementById("headerid");
let headercount = 1;
let headersname = [];
const send = document.getElementById("send");
const editorvar = document.getElementById("editor");
const opt = document.getElementById("operation");
const headersIncome = document.getElementById("headersIncome");
const sendform = document.getElementById("sendform");
const responsecard = document.getElementById("response");

add.addEventListener("click", () => {
  const addHeaders = document.getElementById("addHeaders");

  let string = `
  <div class="input-group my-2">
    <input type="text" class="form-control" placeholder="Key" id="parameterKey${
      headercount + 1
    }"/>
    <input type="text" class="form-control" placeholder="Value" id="parameterValue${
      headercount + 1
    }"/>
    <button type="button" class="btn btn-danger deleteheader">
      Remove
    </button>
  </div>
  `;
  let paramElement = getElementFromString(string);
  addHeaders.appendChild(paramElement);
  let deleteHeader = document.getElementsByClassName("deleteheader");
  for (item of deleteHeader) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
  headercount++;
});

function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "application/json",
  lineNumbers: true,
  autoRefresh: true,
  autoCloseBrackets: true,
});

editor.setSize("100%", "250px");

editor.setValue("{\n\t\n}");
setTimeout(() => {
  editor.refresh();
}, 1);

const responseeditor = CodeMirror.fromTextArea(
  document.getElementById("responseeditor"),
  {
    mode: "application/json",
    lineNumbers: true,
    autoRefresh: true,
    autoCloseBrackets: true,
    readOnly: true,
  }
);

const headerseditor = CodeMirror.fromTextArea(
  document.getElementById("headerseditor"),
  {
    mode: "application/json",
    lineNumbers: true,
    autoRefresh: true,
    autoCloseBrackets: true,
    readOnly: true,
  }
);

headerseditor.setSize("100%", "100px");

responseeditor.setSize("100%", "250px");

responseeditor.setValue(
  "{\n\t'Message': 'Hit the send button to get a response'\n}"
);

headerseditor.setValue(
  "{\n\t'Message': 'Hit the send button to get a response headers'\n}"
);

setTimeout(() => {
  editor.refresh();
}, 1);

send.addEventListener("click", async () => {
  switch (opt.value) {
    case "GET":
      headersname.push({ "Access-Control-Allow-Origin": true });
      let resp = await axios
        .get(sendform.value, {
          headers: { "Access-Control-Allow-Origin": true }, 
        })
        .then((resp) => {
          return resp;
        });
      responseeditor.setValue(JSON.stringify(resp.data, undefined, 4));
      console.log(resp);

      updateResponse(resp);

      headerseditor.setValue(JSON.stringify(resp.headers, undefined, 2));
      headersname = [];
      break;
    case "POST":
      for (let i = 0; i < headercount; i++) {
        let key = document.getElementById(`parameterKey${i + 1}`);
        let val = document.getElementById(`parameterValue${i + 1}`);

        const obj = {
          key: key.value,
          value: val.value,
        };

        headersname.push(obj);
      }

      let response = await axios
        .post(
          `${sendform.value}`,
          JSON.parse(editor.getValue(), {
            headers: headersname,
          })
        )
        .then((response) => {
          return response;
        });
      responseeditor.setValue(JSON.stringify(response.data, undefined, 2));
      console.log(response);

      headersIncome.style.display = "block";

      console.log(response.headers);
      headerseditor.setValue(JSON.stringify(response.headers, undefined, 2));
      headersname = [];
      break;
    case "PUT":
      for (let i = 0; i < headercount; i++) {
        let key = document.getElementById(`parameterKey${i + 1}`);
        let val = document.getElementById(`parameterValue${i + 1}`);

        const obj = {
          key: key.value,
          value: val.value,
        };

        headersname.push(obj);
      }

      let responseput = await axios
        .post(
          `${sendform.value}`,
          JSON.parse(editor.getValue(), {
            headers: headersname,
          })
        )
        .then((response) => {
          return response;
        });
      responseeditor.setValue(JSON.stringify(responseput.data, undefined, 2));
      console.log(responseput);

      headersIncome.style.display = "block";

      console.log(responseput.headers);
      headerseditor.setValue(JSON.stringify(responseput.headers, undefined, 2));
      headersname = [];
      break;
    case "DELETE":
      for (let i = 0; i < headercount; i++) {
        let key = document.getElementById(`parameterKey${i + 1}`);
        let val = document.getElementById(`parameterValue${i + 1}`);

        const obj = {
          key: key.value,
          value: val.value,
        };

        headersname.push(obj);
      }
      break;

      const responsedelete = await axios
        .delete(sendform.value, {
          headers: headersname,
        })
        .then((response) => {
          return response;
        });

      console.log(responsedelete);
      responseeditor.setValue(
        JSON.stringify(responsedelete.data, undefined, 2)
      );
      headersIncome.style.display = "block";
      headerseditor.setValue(
        JSON.stringify(responsedelete.headers, undefined, 2)
      );

    default:
      console.log("nothing");
      break;
  }
});

function updateResponse(object) {
  responsecard.innerHTML = `
    <div class="card" style="width: 100%;" id="response">
      <div class="card-body">
        <h5 class="card-title">Response</h5>
        <div class="d-flex my-2">
          <div class="me-3">
            Status: ${object.status}<span data-status></span>
          </div>
          <div class="me-3">
            Time: <span data-time></span>ms
          </div>
          <div class="me-3">
            Size: <span data-size></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

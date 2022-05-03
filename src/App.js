import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import './index.css'
import { FaGithub} from "react-icons/fa";
import {FiMail} from "react-icons/fi"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const initialState=`
  This is a paragraph
  **This is bold text**

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  This is a inline \`<div></div>\`
   
  This is a block of code 
  \`\`\`
  let x=1;
  let y=2;
  let z=x+y;
  \`\`\`
`
function App() {
  const [textEditor, setTextEditor] = useState(initialState);
  return (
      <div>
        <h2 className="text-center mt-2 mb-4 text">Convert your markdown</h2>
        <div className="row">
          <div className="col-sm-6">
            <h5 className="text-center text">Enter Your Markdown:</h5>
            <textarea
              className="form-control p-2"
              id="editor"
              onChange={(event) => setTextEditor(event.target.value)}
              value={textEditor}
            ></textarea>
          </div>
          <div className="col-sm-6">
          <h5 className="text-center text">See the Result:</h5>
          <div className="preview rounded p-2" id="preview">
            <ReactMarkdown>{textEditor}</ReactMarkdown>
          </div>
          </div>
          <div className="footer">
            <small className="text" style={{textDecoration:"none"}}>Made by Pritam Panda </small>
            <a href="https://github.com/Pritam0077" target="_blank" rel="noreferrer"><FaGithub className="icon"/></a>
            <a href="mailto: pritampanda777@gmail.com"><FiMail className="icon"/></a>
          </div>
        </div>
      </div>
    
  );
}

export default App;

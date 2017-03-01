import React from 'react';
import Codeeditor from './codeeditor';
import Themes from './themes';
export default class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      editor: 0
    };
    this.edit = this.edit.bind(this);
  }
  edit() {
    console.log('this edit');
    var editor = CodeMirror.fromTextArea(document.getElementById("code-js"), {
                  value: "function myScript(){return 100;}\n",
                  tabSize: 2,
                  lineNumbers: true,
                  autofocus: true,
                  dragDrop: true,
                  theme: 'monokai',
                  mode:  "javascript",
                  styleActiveLine: true,
                  matchBrackets: true,
                  gutters: ["CodeMirror-lint-markers"],
                  lint: true,
                  keyMap: "sublime",
                  autoCloseBrackets: true,
                  showCursorWhenSelecting: true,
                  extraKeys: {
                    "F11": function(cm) {
                      cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                    },
                    "Esc": function(cm) {
                      if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                    }
                  }
                });
    this.setState({
      editor: editor
    });
  }
  render () {
    return (
            <div className="app">
            <Codeeditor edit={this.edit}/>
            <Themes editor={this.state.editor}/>
            </div>);
  }
}
import React from 'react';


export default class Themes extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {};
    this.selectTheme = this.selectTheme.bind(this);
  }
  componentDidMount() {
    var input = document.getElementById("select");
    var choice = (location.hash && location.hash.slice(1)) || (document.location.search && ecodeURIComponent(document.location.search.slice(1)));
    if (choice) {
      input.value = choice;
      console.log(this.props.editor)
      this.props.editor.setOption("theme", choice);
    }
    CodeMirror.on(window, "hashchange", function() {
      var theme = location.hash.slice(1);
      if (theme) { input.value = theme; this.selectTheme(); }
    });
  }
  selectTheme() {
    var input = document.getElementById("select");
    var theme = input.options[input.selectedIndex].textContent;
    this.props.editor.setOption("theme", theme);
    location.hash = "#" + theme;
  }
  render () {
    return (
            <div className="app">
              <p>Select a theme: 
                <select onChange={this.selectTheme} id="select">
                  <option defaultValue>default</option>
                  <option>3024-day</option>
                  <option>3024-night</option>
                  <option>abcdef</option>
                  <option>ambiance</option>
                  <option>base16-dark</option>
                  <option>base16-light</option>
                  <option>bespin</option>
                  <option>blackboard</option>
                  <option>cobalt</option>
                  <option>colorforth</option>
                  <option>dracula</option>
                  <option>duotone-dark</option>
                  <option>duotone-light</option>
                  <option>eclipse</option>
                  <option>elegant</option>
                  <option>erlang-dark</option>
                  <option>hopscotch</option>
                  <option>icecoder</option>
                  <option>isotope</option>
                  <option>lesser-dark</option>
                  <option>liquibyte</option>
                  <option>material</option>
                  <option>mbo</option>
                  <option>mdn-like</option>
                  <option>midnight</option>
                  <option>monokai</option>
                  <option>neat</option>
                  <option>neo</option>
                  <option>night</option>
                  <option>panda-syntax</option>
                  <option>paraiso-dark</option>
                  <option>paraiso-light</option>
                  <option>pastel-on-dark</option>
                  <option>railscasts</option>
                  <option>rubyblue</option>
                  <option>seti</option>
                  <option>solarized dark</option>
                  <option>solarized light</option>
                  <option>the-matrix</option>
                  <option>tomorrow-night-bright</option>
                  <option>tomorrow-night-eighties</option>
                  <option>ttcn</option>
                  <option>twilight</option>
                  <option>vibrant-ink</option>
                  <option>xq-dark</option>
                  <option>xq-light</option>
                  <option>yeti</option>
                  <option>zenburn</option>
                </select>
              </p>
            </div>);
  }
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkdownPreviewer = function (_React$Component) {
  _inherits(MarkdownPreviewer, _React$Component);

  function MarkdownPreviewer(props) {
    _classCallCheck(this, MarkdownPreviewer);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`,~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Stefan Krejovic](https://www.freecodecamp.org/megakreja)*'
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  MarkdownPreviewer.prototype.handleChange = function handleChange(e) {
    this.setState({
      text: e.target.value
    });
  };

  MarkdownPreviewer.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "container" },
      React.createElement(
        "h1",
        { id: "title" },
        "Markdown Previewer"
      ),
      React.createElement(
        "div",
        { id: "previews" },
        React.createElement(MarkdownInput, { onChange: this.handleChange, text: this.state.text }),
        React.createElement(MarkdownOutput, { text: this.state.text })
      )
    );
  };

  return MarkdownPreviewer;
}(React.Component);

var MarkdownInput = function (_React$Component2) {
  _inherits(MarkdownInput, _React$Component2);

  function MarkdownInput() {
    _classCallCheck(this, MarkdownInput);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  MarkdownInput.prototype.render = function render() {
    return React.createElement(
      "textarea",
      { id: "input", rows: "40", cols: "70", onChange: this.props.onChange },
      this.props.text
    );
  };

  return MarkdownInput;
}(React.Component);

var MarkdownOutput = function (_React$Component3) {
  _inherits(MarkdownOutput, _React$Component3);

  function MarkdownOutput() {
    _classCallCheck(this, MarkdownOutput);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  MarkdownOutput.prototype.render = function render() {
    return React.createElement("div", { id: "output", dangerouslySetInnerHTML: { __html: marked(this.props.text) } });
  };

  return MarkdownOutput;
}(React.Component);

ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById("app"));
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const App = () => /*#__PURE__*/
React.createElement("div", { id: "display", className: "display" }, /*#__PURE__*/
React.createElement("h1", null, "Play"),
sounds.map((sound, index) => /*#__PURE__*/
React.createElement(DrumPad, { text: sound.keyTrigger, keyTrigger: index, audio: sound.url })));





class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",











    () => {
      this.audio.current.play();

      const id = this.audio.current.id;

      const parent = this.audio.current.parentNode;
      parent.classList.add('active');

      const display = parent.parentNode;
      display.querySelector('h1').innerText = `${id} is playing`;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener('ended', e => {const parent = e.target.parentNode;parent.classList.remove('active');});}



  render() {
    const { text, audio } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `drum-${text}` },
      text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));


  }}


document.addEventListener('keydown', e => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;
    audio.play();
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('drum-machine'));
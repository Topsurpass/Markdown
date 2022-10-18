import './App.css';
import MarkdownRedux from './Markdown/MarkitRedux/MarkdownRedux';
//import { Editor} from './Markdown/previewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MarkdownRedux/>
       {/*<Editor/>*/}
      </header>
    </div>
  );
}

export default App;

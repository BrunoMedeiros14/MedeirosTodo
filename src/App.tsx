import { ReactElement, useState } from 'react';
import './App.css';
import Search from './components/Search/index';
import ThemeButton from './components/ThemeButton';
import Todo from './components/Todo/index';

interface IfilterOption {
  value: string;
  label: string;
}
const options: IfilterOption[] = [
  { value: 'all', label: 'Todos' },
  { value: 'complete', label: 'Completos' },
  { value: 'incomplete', label: 'Incompletos' },
];
function App(): ReactElement {
  const [selectedOption, setSelectedOption] = useState<IfilterOption>(
    options[0]
  );

  return (
    <>
      <div className='container'>
        <div className='head text-center mt-5 flex flex-col mx-auto'>
          <h1 className='title'>Medeiros TODO</h1>
          <div className='main'>
            <Search teste={'Procure a nota...'} />
            <select
              name='selectionBox'
              title='selectionBox'
              className='selectionBox'
              onChange={e =>
                setSelectedOption(
                  options.find(o => o.value === e.target.value)!
                )
              }
              defaultValue={selectedOption.value}>
              {options.map((e, i) => (
                <option key={i} value={e.value}>
                  {e.label}
                </option>
              ))}
            </select>
            {/* <Select
              defaultValue={selectedOption}
              onChange={e => setSelectedOption(e!)}
              options={options}
              value={selectedOption}
              className='selectionBox'
              classNamePrefix='selectionBox'
            /> */}
            <ThemeButton />
          </div>
        </div>
        <div className='todoList'>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;

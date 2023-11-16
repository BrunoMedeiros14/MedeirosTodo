import { ReactElement, useState } from 'react';
import './App.css';
import Search from './components/Search/index';
import ThemeButton from './components/ThemeButton';
import Todo from './components/Todo/index';
import AddModal from './components/AddModal';
import CustomButton from './CustomButton';

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

  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

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
            <ThemeButton />
          </div>
        </div>
        <div className='todoList'>
          <Todo />
          <Todo />
          <Todo />
          <CustomButton
            label='teste'
            onClick={() => setModalVisibility(!modalVisibility)}
          />
        </div>
        <AddModal
          closeModal={() => setModalVisibility(false)}
          visible={modalVisibility}
        />
      </div>
    </>
  );
}

export default App;

import { FormEvent, MouseEvent, useState } from 'react';
import CustomButton from '../../CustomButton';
import CustomInput from '../CustomInput';
import './style.css';

interface IAddModal {
  visible: boolean;
  closeModal: () => void;
}

const AddModal = ({ visible, closeModal }: IAddModal) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [validated, setValidated] = useState<boolean>(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.currentTarget.checkValidity());
    setValidated(true);
  };

  const close = () => {
    setInputValue('');
    setValidated(false);
    closeModal();
  };

  const checkToCloseModal = (e?: MouseEvent<HTMLDivElement>) => {
    if (e?.currentTarget !== e?.target) return;

    close();
  };

  return (
    <div
      onClick={checkToCloseModal}
      className={'modalBg ' + (visible ? 'active' : '')}>
      <form
        onSubmit={submitForm}
        className={'modal ' + (validated ? 'was-validated' : '')}
        noValidate>
        <div>
          <h1>NOVA NOTA</h1>
          <CustomInput
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
            placeholder='Insira o nome da nota'
            className='input'
          />
          <div className='invalid-feedback'>Insira um título para o todo.</div>
        </div>
        <div className='flex space-between gap-3'>
          <CustomButton
            className='button cancelButton'
            label='cancelar'
            onClick={close}
          />
          <CustomButton
            type='submit'
            className='button'
            label='aplicar'
            onClick={() => {
              console.log('oi');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default AddModal;

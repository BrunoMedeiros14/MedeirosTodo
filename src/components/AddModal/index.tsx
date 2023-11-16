import { MouseEvent } from 'react';
import CustomButton from '../../CustomButton';
import CustomInput from '../CustomInput';
import './style.css';

interface IAddModal {
  visible: boolean;
  closeModal: () => void;
}

const AddModal = ({ visible, closeModal }: IAddModal) => {
  const checkToCloseModal = (e?: MouseEvent<HTMLDivElement>) => {
    if (e?.currentTarget === e?.target) closeModal();
  };

  return (
    <div
      onClick={checkToCloseModal}
      className={'modalBg ' + (visible ? 'active' : '')}>
      <div
        onClick={() => {
          console.log('oi');
        }}
        className='modal'>
        <div>
          <h1>NOVA NOTA</h1>
          <CustomInput placeholder='Insira o nome da nota' className='input' />
        </div>
        <div className='flex space-between gap-3'>
          <CustomButton
            className='button'
            label='cancelar'
            onClick={() => {
              console.log('oi');
            }}
          />
          <CustomButton
            className='button'
            label='aplicar'
            onClick={() => {
              console.log('oi');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddModal;

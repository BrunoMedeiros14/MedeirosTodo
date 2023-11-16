import './style.css';
interface Isearch {
  teste: string;
}

const Search = ({ teste }: Isearch) => {
  return (
    <input
      className='searchBox'
      type='text'
      placeholder={teste || 'Procure a nota...'}
    />
  );
};

export default Search;

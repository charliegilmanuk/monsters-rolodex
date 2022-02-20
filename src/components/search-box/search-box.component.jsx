import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
            <input class="search-box" type="search" placeholder={placeholder} onChange={handleChange} />
    );
}
import { MdClose } from 'react-icons/md';
import prd from '../../../assets/products/earbuds-prod-1.webp';
import "./Search.scss";

const Search = ({ setShowSearch }) => {
    return (
        <div className='search-modal'>
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder='Search For Products'
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prd} alt="Earbuds Product" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="desscription">product desscription</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

import '../../styles/localStore/nearbyStores.scss';
import {Rating} from "../Rating";
import {Wishlist} from "../Wishlist";

const SearchBarWithResult = () => {
    return (

        <div className="nbs-main">
            <h1>Nearby Stores</h1>
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <Wishlist isWishlistAdded={true}/>
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div className="card_content">
                            <div className="left">
                                <div className="shop">Zaman Store</div>
                                <div className="owner">Md. Zaman Mia</div>
                                <div className="id">Sotre ID: 125462</div>
                            </div>
                            <div className="right">
                                <div className="rating"><Rating/></div>
                                <div className="numOfRating">133 Ratings</div>
                                <div className="numOfComment">133 comments</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <Wishlist isWishlistAdded={false}/>
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div className="card_content">
                            <div className="left">
                                <div className="shop">Zaman Store</div>
                                <div className="owner">Md. Zaman Mia</div>
                                <div className="id">Sotre ID: 125462</div>
                            </div>
                            <div className="right">
                                <div className="rating"><Rating/></div>
                                <div className="numOfRating">133 Ratings</div>
                                <div className="numOfComment">133 comments</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <Wishlist isWishlistAdded={true}/>
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div className="card_content">
                            <div className="left">
                                <div className="shop">Zaman Store</div>
                                <div className="owner">Md. Zaman Mia</div>
                                <div className="id">Sotre ID: 125462</div>
                            </div>
                            <div className="right">
                                <div className="rating"><Rating/></div>
                                <div className="numOfRating">133 Ratings</div>
                                <div className="numOfComment">133 comments</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <Wishlist isWishlistAdded={false}/>
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div className="card_content">
                            <div className="left">
                                <div className="shop">Zaman Store</div>
                                <div className="owner">Md. Zaman Mia</div>
                                <div className="id">Sotre ID: 125462</div>
                            </div>
                            <div className="right">
                                <div className="rating"><Rating/></div>
                                <div className="numOfRating">133 Ratings</div>
                                <div className="numOfComment">133 comments</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <Wishlist isWishlistAdded={true}/>
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div className="card_content">
                            <div className="left">
                                <div className="shop">Zaman Store</div>
                                <div className="owner">Md. Zaman Mia</div>
                                <div className="id">Sotre ID: 125462</div>
                            </div>
                            <div className="right">
                                <div className="rating"><Rating/></div>
                                <div className="numOfRating">133 Ratings</div>
                                <div className="numOfComment">133 comments</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <Wishlist isWishlistAdded={true}/>
                            <img src="https://picsum.photos/500/300/?image=10"/>
                        </div>
                        <div className="card_content">
                            <div className="left">
                                <div className="shop">Zaman Store</div>
                                <div className="owner">Md. Zaman Mia</div>
                                <div className="id">Sotre ID: 125462</div>
                            </div>
                            <div className="right">
                                <div className="rating"><Rating/></div>
                                <div className="numOfRating">133 Ratings</div>
                                <div className="numOfComment">133 comments</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SearchBarWithResult

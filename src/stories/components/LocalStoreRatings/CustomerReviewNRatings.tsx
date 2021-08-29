import '../../styles/localStoreRatings/CustomerReviewNRatings.scss';
import StarsRating from "react-star-rate";
import {CartButton} from "../CartButton";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";
import {AiOutlineArrowDown} from "react-icons/ai";

const SearchBarWithResult = () => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        function handleResize() {
            console.log(width)
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    })

    return (
        <div className="rnr-main">
            <div className="rnr-heading">{width < 768 ? <><span className="rnrText">Customer Reviews (1,500)</span>
                <span className="rnrIcon"><AiOutlineArrowDown/></span></> : 'Customer review & ratings'}</div>
            <div className="ratingsAvg">
                <div className="point">4.5</div>
                <div>
                    <StarsRating
                        value={4.5}
                        classNamePrefix='react-star-rate'
                        onChange={val => console.log('I see')}
                    />
                </div>
                <div className="totalRatings">83 ratings</div>
            </div>
            <div className="recommendedAvg">
                <div className="point">83%</div>
                <div>
                    <StarsRating
                        value={4.5}
                        classNamePrefix='react-star-rate'
                        onChange={val => console.log('I see')}
                    />
                </div>
                <div className="totalRatings">Recommended</div>
                <div className="outOfRecommend">(61 of 73)</div>
            </div>
            <div className="detailsReview">
                <div className="individual">
                    <div className="starText">5 star</div>
                    <div className="pBar">
                        <ProgressBar
                            completed={50}
                            bgColor="#EF4056"
                            height="5px"
                            width="100%"
                            borderRadius="100px"
                            labelAlignment="center"
                            isLabelVisible={false}
                            labelColor="#e80909"
                            labelSize=""
                        />
                    </div>
                    <div className="countText">44</div>
                </div>
                <div className="individual">
                    <div className="starText">4 star</div>
                    <div className="pBar">
                        <ProgressBar
                            completed={50}
                            bgColor="#EF4056"
                            height="5px"
                            width="100%"
                            borderRadius="100px"
                            labelAlignment="center"
                            isLabelVisible={false}
                            labelColor="#e80909"
                            labelSize=""
                        />
                    </div>
                    <div className="countText">44</div>
                </div>
                <div className="individual">
                    <div className="starText">3 star</div>
                    <div className="pBar">
                        <ProgressBar
                            completed={50}
                            bgColor="#EF4056"
                            height="5px"
                            width="100%"
                            borderRadius="100px"
                            labelAlignment="center"
                            isLabelVisible={false}
                            labelColor="#e80909"
                            labelSize=""
                        />
                    </div>
                    <div className="countText">44</div>
                </div>
                <div className="individual">
                    <div className="starText">2 star</div>
                    <div className="pBar">
                        <ProgressBar
                            completed={50}
                            bgColor="#EF4056"
                            height="5px"
                            width="100%"
                            borderRadius="100px"
                            labelAlignment="center"
                            isLabelVisible={false}
                            labelColor="#e80909"
                            labelSize=""
                        />
                    </div>
                    <div className="countText">44</div>
                </div>
                <div className="individual">
                    <div className="starText">1 star</div>
                    <div className="pBar">
                        <ProgressBar
                            completed={20}
                            bgColor="#EF4056"
                            height="5px"
                            width="100%"
                            borderRadius="100px"
                            labelAlignment="center"
                            isLabelVisible={false}
                            labelColor="#e80909"
                            labelSize=""
                        />
                    </div>
                    <div className="countText">4</div>
                </div>
            </div>
            <div className="writeReview">
                <CartButton label='Write reviews' onClick={() => console.log('I see')} color='cart'/>
            </div>
            <div className="briefTxt1">Most helpful positive review</div>
            <div className="briefTxt2">5 customers found this helpful</div>
            <div className='ratingWithTitle'>
                <div className="ratingStars">
                    <StarsRating
                        value={4}
                        classNamePrefix='react-star-rate'
                        onChange={val => console.log('I see')}
                    />
                </div>
                <div className='ratingTitle'>Amazing!</div>
            </div>
            <div className="byUser">By Sayekat Chakraborty</div>
            <div className="comment">
                These beats are so pretty. They sound amazing and definitely block out background noise. They charge and
                are compatible with iPhones. I didn't find them to be low what so ever. They come in their original box,
                charger, case, stickers and key ring. The box has a serial number on it as well. No signs of wear, they
                are a little snug but it seems like it's because they're new. Got to me in two days. I'm just so happy
                with my purchase.
            </div>
            <div className="images">
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
            </div>

            <div className='ratingWithTitle'>
                <div className="ratingStars">
                    <StarsRating
                        value={4}
                        classNamePrefix='react-star-rate'
                        onChange={val => console.log('I see')}
                    />
                </div>
                <div className='ratingTitle'>Amazing!</div>
            </div>
            <div className="byUser">By Sayekat Chakraborty</div>
            <div className="comment">
                These beats are so pretty. They sound amazing and definitely block out background noise. They charge and
                are compatible with iPhones. I didn't find them to be low what so ever. They come in their original box,
                charger, case, stickers and key ring. The box has a serial number on it as well. No signs of wear, they
                are a little snug but it seems like it's because they're new. Got to me in two days. I'm just so happy
                with my purchase.
            </div>
            <div className="images">
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
            </div>

            <div className='ratingWithTitle'>
                <div className="ratingStars">
                    <StarsRating
                        value={4}
                        classNamePrefix='react-star-rate'
                        onChange={val => console.log('I see')}
                    />
                </div>
                <div className='ratingTitle'>Amazing!</div>
            </div>
            <div className="byUser">By Sayekat Chakraborty</div>
            <div className="comment">
                These beats are so pretty. They sound amazing and definitely block out background noise. They charge and
                are compatible with iPhones. I didn't find them to be low what so ever. They come in their original box,
                charger, case, stickers and key ring. The box has a serial number on it as well. No signs of wear, they
                are a little snug but it seems like it's because they're new. Got to me in two days. I'm just so happy
                with my purchase.
            </div>
            <div className="images">
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <div>
                    <img
                        src={'https://images.unsplash.com/photo-1585590853943-67022b1d8fe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBtYXJrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
            </div>

            <div className="seeMore" onClick={() => console.log('I see')}>See more</div>
        </div>
    );
}

export default SearchBarWithResult

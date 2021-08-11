import MyProfilePageForDesktop from './MyProfilePageForDesktop';
import MyProfilePageForMobile from './MyProfilePageForMobile';

const MyProfilePage = () => {
    return (
        <>
            <div className='profilePageForDesktop'>
                <MyProfilePageForDesktop/>
            </div>
            <div className='profilePageForMobile'>
                <MyProfilePageForMobile/>
            </div>

        </>
    )
}

export default MyProfilePage

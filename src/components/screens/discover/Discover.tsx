import './Discover.scss'

import { Card } from '../../ui/card';

const Discover = () => {

    return(
        <div className="discover">
            <div className="discover__title">
                <p className='discover__text'>Discover</p>
                <div className="discover__filters">
                    <div className="discover__filter">
                        <svg
                            className='discover__img'
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="12"
                            viewBox="0 0 14 12"
                        >
                            <path
                            style={{
                                fill: 'none',
                                strokeWidth: 2,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                stroke: '#f2f2f2',
                                strokeOpacity: 1,
                                strokeMiterlimit: 4,
                            }}
                            d="M1.731 1.002h13.1976M1.731 4.998h9.134M1.731 9h6.0893m4.0636 0 4.0575-4.002m0 0L20.005 9m-4.0636-4.002v12"
                            transform="scale(.63636 .66667)"
                            />
                        </svg>
                        Category
                    </div>
                    <div className="discover__filter">
                        Cheapest
                        <svg
                            className='discover__img'
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="6"
                            viewBox="0 0 11 6"
                        >
                            <path
                            style={{
                                fill: 'none',
                                strokeWidth: 2,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                stroke: '#f2f2f2',
                                strokeOpacity: 1,
                                strokeMiterlimit: 4,
                            }}
                            d="M15.4787 1.002 8.3732 7.998 1.2678 1.002"
                            transform="scale(.64706 .66667)"
                            />
                        </svg>
                    </div>
                    <div className="discover__filter">
                        Newest 
                        <svg
                            className='discover__img'
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="6"
                            viewBox="0 0 11 6"
                        >
                            <path
                            style={{
                                fill: 'none',
                                strokeWidth: 2,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                stroke: '#f2f2f2',
                                strokeOpacity: 1,
                                strokeMiterlimit: 4,
                            }}
                            d="M15.4787 1.002 8.3732 7.998 1.2678 1.002"
                            transform="scale(.64706 .66667)"
                            />
                        </svg>
                    </div>
                    <button className="discover__filterbtn">
                        <svg
                            className='discover__filterbtn-img'
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="14"
                            viewBox="0 0 14 14"
                        >
                            <path
                            style={{
                                fill: 'none',
                                strokeWidth: 2,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                stroke: '#f2f2f2',
                                strokeOpacity: 1,
                                strokeMiterlimit: 4,
                            }}
                            d="M1.1546 1.9978c0-.5525.4553-.999 1.0028-.999h16.273c.5537 0 1.0028.4465 1.0028.999v2.578c0 .2735-.1046.5358-.3014.72l-6.5092 6.4062c-.1846.1897-.2953.4464-.2953.7199V15l-4.0606 4.0011V12.422c0-.2735-.1046-.5302-.3015-.7199l-6.503-6.4062c-.1907-.1842-.3076-.4465-.3076-.72Zm0 0"
                            transform="matrix(.63492 0 0 .7 .3333 0)"
                            />
                        </svg>
                        Filter
                    </button>
                </div>
            </div>
            <div className="discover__items">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className="discover__loadbtn">LOAD MORE</button>
      </div>
    )
}

export default Discover
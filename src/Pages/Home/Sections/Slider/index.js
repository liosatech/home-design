import { useEffect, useState } from "react";

// AIP
import { GetUrl } from "../../../../Assets/Api/BaseApi";

import slider from "../../../../Assets/Images/slider.png" ;
import "./Slider.css";

const Index = () => {

    const [SliderImg , setSliderImg] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            const data = await GetUrl();
            console.log(data.slider);
            setSliderImg(data.slider);
        }
        fetchAPI()
    },[])

    return (
        <>
            <div className='continer'>
                <div className='slider-img-box'>
                    <img src={slider} alt="slider" />    
                </div>
            </div>
        </>
    );
};

export default Index;
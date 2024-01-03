import { useEffect, useState } from "react";

// AIP
import { GetUrl } from "../../../../Assets/Api/BaseApi";

import "./Slider.css";

const Index = () => {

    const [SliderImg , setSliderImg] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            const data = await GetUrl();
            console.log(data);
            setSliderImg(data.slider);
        }
        fetchAPI()
    },[])

    return (
        <>
            <div className='continer'>
                <div className='slider-img-box'>
                { SliderImg.map((SliderImg) => {
                 console.log(SliderImg)
                 return(
                 <img key={SliderImg.ID} src={SliderImg.pic} alt={SliderImg.title} />);
                 })}    
                </div>
            </div>
        </>
    );
};

export default Index;
import Card from '../Components/Card';
import { homepageImageSrc } from '../Data/Data';
import { useForm } from 'react-hook-form';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { InputTag } from '../Components/InputTag';
import { useState } from 'react';

const Homepage = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } ,unregister} = useForm();  
  const [trip, setTrip] = useState("oneway");
  
  const onSubmit = (data) =>
  {
    console.log(data);
  }
  const data = {register, handleSubmit, watch, setValue,errors, onSubmit,trip,setTrip,unregister};
  return (
    <>
    <Navbar />
    <div className='flex flex-col h-screen justify-between'>

      <div></div>
      <div className='my-2 self-center'>
        <Card type="home" payload={data} />
      </div>
      <img src="https://www.easemytrip.com/images/cab-img/cab-republic-sale-strip.png" className='' />
      <div class="flex flex-col self-center">
        <div class="head-sec"> <span class="bs-pra">Top Cab Routes</span></div>

        <div class="flex w-full">
            <div class="bl1">
                <ul>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-106590','EMT-5936630','other')">NEW DELHI - Chandigarh</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-61','EMT-5271','other')">Pune - Shirdi</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-17060','EMT-61','other')">Mumbai - Pune</span></li>
                </ul>
                <div class="clr"></div>
            </div>
            <div class="bl1">
                <ul>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-61','EMT-17060','other')">Pune - Mumbai</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-13700','EMT-11681','other')">Delhi - Haridwar</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-17060','EMT-5271','other')">Mumbai - Shirdi</span></li>

                </ul>
                <div class="clr"></div>
            </div>
            <div class="bl1">
                <ul>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-5936630','EMT-221','other')">Chandigarh - Manali</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-5936630','EMT-5251','other')">Chandigarh - Shimla</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-1500980','EMT-10801','other')">Chennai - Pondicherry</span></li>

                </ul>
                <div class="clr"></div>
            </div>
            <div class="bl1">
                <ul>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-13700','EMT-1451','other')">Delhi - Agra</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-2111','EMT-6','other')">Bangalore - Coorg</span></li>
                    <li><img class="mark" src="https://www.easemytrip.com/images/cab-img/map-htl.png"/><span class="tc-link" ng-click="PopularGoto('EMT-3398760','EMT-331','other')">Dehradun - Mussoorie</span></li>

                </ul>
                <div class="clr"></div>
            </div>
        </div>
    </div>
    </div>
    <div id="second" className='flex flex-col h-screen justify-between'>

      <div></div>
      <div className='my-2 self-center'>
        <Card type="home" payload={data} />
      </div>
      <div></div>
    </div>
    <Footer />
    
    </>
    
  )
}

const style = "flex justify-center";
export default Homepage;
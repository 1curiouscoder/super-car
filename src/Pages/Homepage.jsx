import Card from '../Components/Card';
import { homepageImageSrc } from '../Data/Data';
import { useForm } from 'react-hook-form';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { InputTag } from '../Components/InputTag';
import { useState } from 'react';

const Homepage = ({payload}) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } ,unregister} = useForm();  
  const [trip, setTrip] = useState("oneway");
  
  const onSubmit = (data) =>
  {
    console.log(data);
  }
  const data = {register, handleSubmit, watch, setValue,errors, onSubmit,trip,setTrip,unregister};
  return (
    <div className='flex flex-col justify-between '>
    <div className='mb-14'> <Navbar from="home" payload={payload} /> </div>
    <div className='flex justify-center'>
      <label id="heading" className='text-[30px] font-mono shadow-sm underline py-4' >Book a Cab</label>
    </div>
    <div className='flex self-center'>
          <Card type="home" payload={data} />
          <div className='flex flex-wrap'> 
            <div className='flex'></div>
            <div className='flex'></div>
            <div className='flex'></div>
            <div className='flex'></div>
          </div>
    </div>
    
    <div className='flex flex-col justify-between my-4 '> 
    <div></div>
    <img src="https://www.easemytrip.com/images/cab-img/cab-republic-sale-strip.png" className='w-screen  self-center shadow-lg mx-4' />
    <div className='flex flex-col  m-2 p-4'>
      <h1 className='text-xl font-bold font-mono shadow-sm'>Cabs Booking FAQ</h1>
      <div className='flex flex-col bg-white rounded-xl shadow-lg m-2 p-4'>
        <div>
          <h2 className='text-md font-sans font-semibold py-2'>How can I book cheap cabs online?</h2>
          <p className='text-sm '>Goibibo helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Goibibo website & app on online cab booking to get extra discounts</p>
        </div>
        <div>
          <h2 className='text-md font-sans font-semibold py-2'>What are the advantages of online taxi booking?</h2>
          <p className='text-sm'>Online taxi booking not only helps you with best prices but also helps you with the convenience of paying through multiple payment options (like Debit Card, Credit Card, eWallets etc.). You can easily compare prices and choose various categories of cabs like Hatchback cars, Sedan and SUV.</p>
        </div>
        <div>
          <h2 className='text-md font-sans font-semibold py-2'>Why you should book cabs from Goibibo?</h2>
          <p className='text-sm'>While booking cabs online through Goibibo, you can choose the car based on your requirement and preferences. You can book Hatchback like Indica, Swift, Sedan like Dzire, Etios and SUV like Innova, Ertiga.</p>
        </div>
        <div>
          <h2 className='text-md font-sans font-semibold py-2'>What are the best options available for cab booking?</h2>
          <p className='text-sm'>While booking cabs online through Goibibo, you can choose the car based on your requirement and preferences. You can book Hatchback like Indica, Swift, Sedan like Dzire, Etios and SUV like Innova, Ertiga.</p>
        </div>
        <div>
          <h2 className='text-md font-sans font-semibold py-2'>What kind of cabs you can book from Goibibo?</h2>
          <p className='text-sm'>You can book following kinds of cabs from Goibibo: airport cabs and intercity cabs / outstation cabs. You can book outstation cabs for both one-way transfers & round-trip transfers</p>
        </div>
      </div>
    </div>
    </div>
    <div className='block'> <Footer /></div>
    </div>
    
  )
}

const style = "flex justify-center";
export default Homepage;
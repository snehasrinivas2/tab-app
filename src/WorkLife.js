
import './App.css';
import greatPlaceToWork from './great-place-to-work.png';
import peopleLoveUs from './people-love-us.png';
import greatPlaceCertified from './great-place-certified.png';
import greatPeopleToWork from './vgreat-place-people.jpg';
import bbbPeople from './vbbb.webp';
import stars from './vstars.webp';
import standPeople from './standing.webp';
import officeLife from './voffice-life-whitemen.webp';
import ladyOffice from './ladysitting.webp';
import glassdoor from './glassdoor.webp';


const WorkLife = () => {
  return (
    <div id="work-life">
      <div id="people-love" className='bg-blue flex flex-row text-white h-auto'>  
        <div className='flex-1 relative'>
        <div className='base'></div>
        <img
          className="to-work w-96 h-85"
          src={greatPlaceToWork}
          alt="great-place-to-work"
        />
        </div>

     
        <div className='flex-1 relative'>
        <div className='flex flex-col'>
        <img
          className="flex-1"
          src={peopleLoveUs}
          alt="people-love-us"
        />
         <p className="flex-1">
            Great Place To Work Certified
          </p>
          <p className="flex-1">
            We just received our 9<sup>th</sup> year in a row
          </p>
          <p className="flex-1">
            for work environment and facilities
          </p>

        </div>
  

        </div>

        <div className='flex-1 relative'>
{/* 
        top: 39px;
    height: 80%;
    width: 100%;
    object-fit: contain;
    position: absolute; */}
        <img
          className="absolute  top-5 h-4/5 w-full object-contain "
          src={greatPlaceCertified}
          alt="certified"
        />
        </div>
        

      </div>

      <div id="great-place-to-work" className='h-auto relative'>
      <img
          className="to-work w-full h-full object-cover"
          src={greatPeopleToWork}
          alt="great-place-people"
        />
      </div>

      <div id="work-play" className="flex flex-row">
      <div className='bbb-column flex-1 bg-blue text-center'>
        <img
          className="a-plus-img w-auto max-w-full outline-none border-0"
          src={bbbPeople}
          alt="bbb-column"
        />
          <img
          className="stars relative w-2/4 max-w-full outline-none border-0"
          src={stars}
          alt="stars"
        />
        <div className="relative bbb-text text-white">
          <p className="customer-reviews font-semibold text-xl "> Great Customer Reviews</p>
          <p className="a-plus w-64 font-normal text-lg">BBB A+ rating and 300k+ Reviews on Shopper Approved</p>

        </div>
        </div>

     
        <div  className='column flex-1'>

        <img
          className="to-work w-full h-full object-contain"
          src={standPeople}
          alt="stand-people"
        />

   

        </div>

        <div  className='content column flex-1 text-black bg-lightGrey'>
          <div className='w-72 mx-auto text-left mt-10 mb-0'>
            <h2 className='font-bold text-2xl mb-4'>Work & Play</h2>
            <p className='font-extralight text-xl'>In addition to monthly team events and weekly catered lunches,
            JM Bullion hosts regular gatherings for employees to get to know each other. Our rapid growth requires that we work hard, but we never forget to mix in some play</p>
          </div>

        </div>
        
      </div>

      <div id="office-life" className="flex flex-row">
      <div className='column flex-1'>
        <img
          className="men office w-full h-full object-contain"
          src={officeLife}
          alt="men-office"
        />
        </div>


        <div  className='column flex-1  text-black bg-lightGrey'>
          <div className='w-72 mx-auto text-left mt-10 mb-0'>
            <h2 className='font-bold text-2xl mb-4'>Office Life</h2>
            <p className='font-extralight text-xl'>In addition to monthly team events and weekly catered lunches,
            JM Bullion hosts regular gatherings for employees to get to know each other. Our rapid growth requires that we work hard, but we never forget to mix in some play</p>
          </div>

        </div>

        <div className='column flex-1 text-center'>
        <img
          className="lady office w-full max-w-full"
          src={ladyOffice}
          alt="lady-office"
        />
         <img
          className="glassdoor mx-auto"
          src={glassdoor}
          alt="glassdoor"
        />
        </div>

      </div>
   

      
    </div>
  );
};

export default WorkLife;


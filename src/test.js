import React from 'react';

const WorkLife = () => {
  return (
    <div id="work-life" className="space-y-12 bg-gray-100 p-4">

      {/* People Love Section */}
      <div className="people-love relative flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
        <div className="w-full h-20 bg-blue-600 rounded-t-lg"></div>
        <img className="w-40 mt-[-4rem] mb-4" src="/path/to/vgreat-place-to-work.png" alt="great-place-to-work" />
        
        <div className="content mt-4 space-y-2">
          <img src="/path/to/vpeople-love-us.png" alt="people-love-us" className="mx-auto" />
          <p className="text-lg font-semibold text-blue-600">Great Place To Work Certified</p>
          <p className="text-md">We just received our 9<sup>th</sup> year in a row</p>
          <p className="text-sm text-gray-600">for work environment and facilities</p>
        </div>
        
        <img className="w-16 mt-4" src="/path/to/great-place-certified.png" alt="certified" />
      </div>

      {/* People Love Mobile Section */}
      <div className="people-love-mobile flex flex-col items-center bg-white p-6 rounded-lg shadow-lg md:hidden">
        <img src="/path/to/vpeople-love-us-mobile2.jpg" alt="certified" className="w-full rounded-lg" />
        
        <div className="content text-center mt-4 space-y-2">
          <p className="text-lg font-semibold text-blue-600">Great Place To Work Certified</p>
          <p className="text-md">We just received our 9<sup>th</sup> year in a row</p>
          <p className="text-sm text-gray-600">for work environment and facilities.</p>
          <a href="https://www.greatplacetowork.com/certified-company/1400486" className="text-blue-500 underline mt-2">Know More</a>
        </div>
      </div>

      {/* Great Place to Work Section */}
      <div className="great-place-to-work flex justify-center space-x-4 items-center hidden md:flex">
        <img className="w-16" src="/path/to/great-place-certified.png" alt="certified" />
        <img className="w-full max-w-md rounded-lg shadow-lg" src="/path/to/vgreat-place-people.jpg" alt="great-place-people" />
      </div>

      {/* Great Place to Work Mobile */}
      <div className="great-place-to-work-mobile md:hidden">
        <img className="w-full rounded-lg shadow-lg" src="/path/to/vgreat-place-people-mobile2.jpg" alt="great-place-people" />
      </div>

      {/* Work & Play Section */}
      <div className="work-play flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="bbb flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <img className="w-16 mb-2" src="/path/to/vbbb.png" alt="BBB logo" />
          <img className="w-24 mb-2" src="/path/to/stars.png" alt="Stars rating" />
          <div className="text-center space-y-1">
            <p className="font-semibold">Great Customer Reviews</p>
            <p className="text-sm text-gray-600">BBB A+ rating and 300k+ Reviews on Shopper Approved</p>
          </div>
        </div>
        
        <img className="w-full md:w-1/3 rounded-lg shadow-lg" src="/path/to/vwork-play2.jpg" alt="work and play" />

        <div className="content text-center md:text-left md:w-1/3 space-y-2">
          <h2 className="text-xl font-bold">Work & Play</h2>
          <p className="text-gray-700">
            In addition to monthly team events and weekly catered lunches, JM Bullion hosts regular gatherings for employees to get to know each other. Our rapid growth requires that we work hard, but we never forget to mix in some play.
          </p>
        </div>
      </div>

      {/* Office Life Section */}
      <div className="office-life flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <img className="w-full md:w-1/3 rounded-lg shadow-lg" src="/path/to/voffice-life-1.jpg" alt="office life" />

        <div className="content text-center md:text-left md:w-1/3 space-y-2">
          <h2 className="text-xl font-bold">Office Life</h2>
          <p className="text-gray-700">
            JM Bullion is determined to be a rewarding business for both its customers and employees. As the company grows and the industry evolves, our team remains flexible and adaptable.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 md:w-1/3">
          <img className="w-full rounded-lg shadow-lg" src="/path/to/office-life-2.jpg" alt="office life 2" />
          <img className="w-16" src="/path/to/glassdoor.png" alt="glassdoor logo" />
        </div>
      </div>
    </div>
  );
};

export default WorkLife;

import './App.css';

const WorkLife = () => {
  return (
    <div id="work-life" className="space-y-8">
      <div className="people-love relative flex flex-col items-center space-y-4 md:flex-row md:space-x-4">
        <div className="base w-full h-4 bg-gray-200"></div>
        <img
          className="to-work w-32 h-auto"
          src="https://www.jmbullion.com//wp-content/themes/JMBullion/images/careers/vgreat-place-to-work.png.pagespeed.ic.5nii1ZuqOK.webp"
          alt="great-place-to-work"
        />
        
        <div className="content text-center md:text-left">
          <img 
            className="mx-auto mb-2 md:mx-0"
            src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/vpeople-love-us.png.pagespeed.ic.3ms89NQd_S.webp"
            alt="people-love-us"
          />
          <p className="great-place text-lg font-bold text-gray-800">
            Great Place To Work Certified
          </p>
          <p className="years-row text-gray-700">
            We just received our 9<sup>th</sup> year in a row
          </p>
          <p className="environment text-gray-600">
            for work environment and facilities
          </p>
        </div>

        <img
          className="certified w-16 h-auto"
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/great-place-certified.png"
          alt="certified"
        />
      </div>

      <div className="people-love-mobile flex flex-col items-center md:hidden space-y-4">
        <img
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/vpeople-love-us-mobile2.jpg.pagespeed.ic.Ij9ees9AzL.webp"
          alt="certified"
        />
        <div className="content text-center space-y-2">
          <p className="great-place text-lg font-bold text-gray-800">
            Great Place To Work Certified
          </p>
          <p className="years-row text-gray-700">
            We just received our 9<sup>th</sup> year in a row
          </p>
          <p className="environment text-gray-600">
            for work environment and facilities.
          </p>
          <a
            id="careersKnowMoreBtn"
            href="https://www.greatplacetowork.com/certified-company/1400486"
            className="text-blue-500 hover:underline"
          >
            Know More
          </a>
        </div>
      </div>

      <div className="great-place-to-work flex items-center space-x-4 hidden md:flex">
        <img
          className="certified w-16 h-auto"
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/great-place-certified.png"
          alt="certified"
        />
        <img
          className="people w-full h-auto"
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/vgreat-place-people.jpg.pagespeed.ic.Gmoer7DnZ3.webp"
          alt="great-place-people"
        />
      </div>

      <div className="great-place-to-work-mobile flex flex-col items-center md:hidden">
        <img
          className="people w-full h-auto"
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/vgreat-place-people-mobile2.jpg.pagespeed.ic.LX64nVUres.webp"
          alt="great-place-people"
        />
      </div>

      <div className="work-play flex flex-col md:flex-row items-center md:space-x-8">
        <div className="bbb flex flex-col items-center space-y-2">
          <img
            className="a-plus-img w-24 h-auto"
            src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/vbbb.png.pagespeed.ic.30jF7t75md.webp"
            alt="test"
          />
          <img
            className="stars w-16 h-auto"
            src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/stars.png"
             alt="test"
          />
          <div className="bbb-text text-center md:text-left">
            <p className="customer-reviews font-semibold text-gray-800">
              Great Customer Reviews
            </p>
            <p className="a-plus text-gray-600">
              BBB A+ rating and 300k+ Reviews on Shopper Approved
            </p>
          </div>
        </div>
        <img
          className="column w-full h-auto md:w-1/3"
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/vwork-play2.jpg.pagespeed.ic.jpkIRdUlUn.webp"
           alt="test"
        />
        <div className="content text-center md:text-left md:w-1/3 space-y-2">
          <h2 className="text-xl font-bold text-gray-900">Work &amp; Play</h2>
          <p className="text-gray-700">
            In addition to monthly team events and weekly catered lunches, JM Bullion hosts regular gatherings for employees to get to know each other. Our rapid growth requires that we work hard, but we never forget to mix in some play.
          </p>
        </div>
      </div>

      <div className="office-life flex flex-col md:flex-row items-center md:space-x-8">
        <img
          className="column w-full h-auto md:w-1/3"
          src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/voffice-life-1.jpg.pagespeed.ic.O1qchgyjR8.webp"
           alt="test"
        />
        <div className="content text-center md:text-left md:w-1/3 space-y-2">
          <h2 className="text-xl font-bold text-gray-900">Office Life</h2>
          <p className="text-gray-700">
            JM Bullion is determined to be a rewarding business for both its customers and employees. As the company grows and the industry evolves, our team remains flexible and adaptable.
          </p>
        </div>
        <div className="column flex flex-col items-center space-y-2 md:w-1/3">
          <img
            src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/office-life-2.jpg"
            className="w-full h-auto"
             alt="test"
          />
          <img
            className="glassdoor w-24 h-auto"
            src="https://www.jmbullion.com/wp-content/themes/JMBullion/images/careers/glassdoor.png"
             alt="test"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkLife;


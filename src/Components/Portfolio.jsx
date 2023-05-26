import expTrack from '../assets/portfolio/expTrack.png';
import PortfolioSite from '../assets/portfolio/PortfolioSite.png';
import weatherApp from '../assets/portfolio/weatherApp.png';
import showSearch from '../assets/portfolio/showSearch.png';
import addUser from '../assets/portfolio/addUser.png';
import scoreKeeper from '../assets/portfolio/scoreKeeper.png';

const Portfolio = () => {

   const portfolios = [
    {
        id:1,
        src: expTrack
    },
    {
        id:2,
        src: PortfolioSite
    },
    {
        id:3,
        src: weatherApp
    },
    {
        id:4,
        src: showSearch
    },
    {
        id:5,
        src: addUser
    },
    {
        id:6,
        src: scoreKeeper
    },
   ];
   
   return(
    <div name="portfolio" className='pt-60 md:pt-0 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>check out some of my work right here</p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {
                portfolios.map( ({id,src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                )) 
            }

            </div>

         </div>
    </div>
   );
}
export default Portfolio;
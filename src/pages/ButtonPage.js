import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
   const handleClick = () => {
      console.log('Clicked!');
   };

   return (
      <div>
         <div>
            <Button
               success
               rounded
               outline
               className="mb-5"
               onClick={handleClick}
            >
               <GoBell style={{ color: 'black' }} />
               Click here
            </Button>
         </div>
         <div>
            <Button danger outline>
               <GoCloudDownload style={{ color: 'black' }} />
               Buy Now!
            </Button>
         </div>
         <div>
            <Button warning>
               <GoDatabase className="mr-1" style={{ color: 'black' }} />
               See Deal!
            </Button>
         </div>
         <div>
            <Button secondary outline>
               Hide Ads!
            </Button>
         </div>
         <div>
            <Button primary rounded>
               Something!
            </Button>
         </div>
      </div>
   );
}

export default ButtonPage;

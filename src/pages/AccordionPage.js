import Accordion from '../components/Accordion';

function AccordionPage() {
   const items = [
      {
         id: '126',
         label: 'Can I use React on the Project',
         content: 'You can use React on any Project you want.'
      },
      {
         id: '121',
         label: 'Can I use Javascript on the Project',
         content: 'You can use React on any Project you want.'
      },
      {
         id: '122',
         label: 'Can I use CSS on a Project',
         content: 'You can use React on any Project you want.'
      }
   ];

   return <Accordion items={items} />;
}

export default AccordionPage;

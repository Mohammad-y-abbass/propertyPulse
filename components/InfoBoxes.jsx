import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div class='container-xl lg:container m-auto'>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            description='Find your dream rental property. Bookmark properties and contact owners.'
            link='/properties'
            linkText='Browse Properties'
            title='For Renters'
            style='bg-gray-100 p-6 rounded-lg shadow-mds'
            linkStyle='inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700'
          />
          <InfoBox
            description=' List your properties and reach potential tenants. Rent as an
              airbnb or long term.'
            link='properties/add'
            linkText='Add Property'
            title='For Property Owners'
            style='bg-blue-100 p-6 rounded-lg shadow-md'
            linkStyle='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600'
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

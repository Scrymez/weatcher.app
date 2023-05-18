const link = 'http://api.weatherstack.com/current?access_key=dd61d8fd4a8c6f57f599045b595b9961';

const store = {
   city: 'London',
   feelslike: 0, 
   cloudcover: 0, 
   tempature: 0,
   humidity: 0,
   observationTime: '00:00 AM',
};

const fetchData = async () => {
   const result = await fetch(`${link}&query=${store.city}`);
   const data = await result.json();

   const 
      { current: { feelslike, cloudcover, tempature },
      location: { name }
   } = data
   
   console.log('data', data)
}

fetchData();

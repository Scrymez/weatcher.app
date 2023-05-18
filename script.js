const link = 'http://api.weatherstack.com/current?access_key=dd61d8fd4a8c6f57f599045b595b9961';

let store = {
   city: 'London',
   feelslike: 0,
   cloudcover: 0,
   tempature: 0,
   humidity: 0,
   observationTime: '00:00 AM',
   pressure: 0,
   uvIndex: 0,
   visibility: 0,
   isDay: 'yes',
   decription: '',
   windSpeed: 0,


};

const fetchData = async () => {
   const result = await fetch(`${link}&query=${store.city}`);
   const data = await result.json();

   const
      { current:
         {
            feelslike,
            cloudcover,
            tempature,
            observation_time: observationTime,
            pressure,
            uvIndex: uv_index,
            visibility,
            is_day: isDay,
            weather_decriptions: decription,
            wind_speed: windSpeed,



         },
         location: { name }
      } = data

   console.log('data', data)
}

store = {
   ...store,
   isDay,
   uvIndex,
   pressure,
   humidity,
   tempature,
   feelslike,
   windSpeed,
   cloudcover,
   visibility,
   observationTime,
   decription: decription[0],
}

fetchData();

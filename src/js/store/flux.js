const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        people: localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [],
        vehicles: localStorage.getItem('vehicles') ? JSON.parse(localStorage.getItem('vehicles')) : [],
        planets: localStorage.getItem('planets') ? JSON.parse(localStorage.getItem('planets')) : [],
        favorites: JSON.parse(localStorage.getItem('favorites')) || []
      },
      actions: {
        fetchPeople: async () => {
          if (getStore().people.length === 0) {
            const res = await fetch('https://www.swapi.tech/api/people');
            const data = await res.json();
            const detailedPeople = await Promise.all(
              data.results.map(async (person) => {
                const personRes = await fetch(person.url);
                const personData = await personRes.json();
                return personData.result;
              })
            );
            setStore({ people: detailedPeople });
            localStorage.setItem('people', JSON.stringify(detailedPeople));
          }
        },
        fetchVehicles: async () => {
          if (getStore().vehicles.length === 0) {
            const res = await fetch('https://www.swapi.tech/api/vehicles');
            const data = await res.json();
            const detailedVehicles = await Promise.all(
              data.results.map(async (vehicle) => {
                const vehicleRes = await fetch(vehicle.url);
                const vehicleData = await vehicleRes.json();
                return vehicleData.result;
              })
            );
            setStore({ vehicles: detailedVehicles });
            localStorage.setItem('vehicles', JSON.stringify(detailedVehicles));
          }
        },
        fetchPlanets: async () => {
          if (getStore().planets.length === 0) {
            const res = await fetch('https://www.swapi.tech/api/planets');
            const data = await res.json();
            const detailedPlanets = await Promise.all(
              data.results.map(async (planet) => {
                const planetRes = await fetch(planet.url);
                const planetData = await planetRes.json();
                return planetData.result;
              })
            );
            setStore({ planets: detailedPlanets });
            localStorage.setItem('planets', JSON.stringify(detailedPlanets));
          }
        },
        addFavorite: (item, type) => {
          const store = getStore();
          const updatedFavorites = [...store.favorites, { ...item, type }];
          console.log('Adding favorite:', updatedFavorites[updatedFavorites.length - 1]);
          setStore({ favorites: updatedFavorites });
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        },
        removeFavorite: (item) => {
          const store = getStore();
          const updatedFavorites = store.favorites.filter(fav => fav.uid !== item.uid);
          setStore({ favorites: updatedFavorites });
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
      }
    }
  }
  
  export default getState;
import casual from 'casual';

const NUMBER = 2000;

const getPersons = () => {

  return new Array(NUMBER)
    .fill({})
    .map(() => ({
      id: Math.floor(Math.random()*100000),
      name: casual.name,
      address: casual.address,
      email: casual.email,
      phone: casual.phone
    }))
};

export default getPersons;

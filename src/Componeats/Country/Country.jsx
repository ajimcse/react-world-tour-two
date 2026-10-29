

const Country = ({country}) => {
    console.log(country)
    const {name, flag,iso3} = country;
    return (
        <div>
            <h3>Name:{name}</h3>
         <img src={`https://flagdex.net${flag}`} alt={name} />
        <p>Code:{iso3}</p>
        </div>
    );
};

export default Country;
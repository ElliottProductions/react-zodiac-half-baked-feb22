import './ZodiacCard.css';

export default function ZodiacCard(props) {
  return (
    <div>
      {props.name} born {props.date}
      <img src={`url(.../public/images/leo.png)`}/>

    </div>
  );
  //{/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
}

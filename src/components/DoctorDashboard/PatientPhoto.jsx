import avatarPerson from "../../assets/doctor.jpg";

export default function PatientPhoto(props) {
  return (
    <img
      className="w-8 h-8 rounded-full object-cover"
      src={avatarPerson}
      alt={props.name}
    />
  );
}

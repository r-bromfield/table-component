import './Avatar.css'
const Avatar = (props) => {
  return (
    <span className={"avatar " + "c" + props.id}>
      {getInitials(props.employee)}
    </span>
  );
};

const getInitials = (name) => {
  let strArray = name.split(" ");
  let newString = "";
  for (let index = 0; index < strArray.length; index++) {
    newString += strArray[index].charAt(0);
  }
  return newString;
};

export default Avatar;

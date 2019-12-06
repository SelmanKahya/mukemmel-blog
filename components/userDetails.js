import Link from "next/link";

const UserDetails = props => {
  const { name, image, className } = props;
  return (
    <div className={"flex flex-row " + className}>
      <div className="">
        <img src={image} className="rounded-full w-12" />
      </div>

        <a className="m-3">{name}</a>
    </div>
  );
};

export default UserDetails;

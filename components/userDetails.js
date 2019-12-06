import Link from "next/link";


const _renderChildren = (children = null) => {
  console.log(children)
  if (children !== null) {
    return (
      <a>
        { children }
      </a>
    )
  }
}
const UserDetails = props => {
  const { name, image, className, children } = props;
  return (
    <div className={"flex flex-row justify-between " + className}>
      <div className="flex flex-row">
        <img src={image} className="rounded-full w-12" />
        <a className="m-3">{name}</a>

      </div>

      {_renderChildren(children)}
    </div>
  );
};

export default UserDetails;

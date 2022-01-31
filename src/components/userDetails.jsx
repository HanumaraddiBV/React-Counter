import "../index.css"

export function UserDeatails({name, place}) {
  return (
    <>
      <h2 className>Username : {name}</h2>
      <p>place : {place}</p>
    </>
  );
}

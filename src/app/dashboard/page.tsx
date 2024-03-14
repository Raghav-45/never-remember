import PasswordItem from "@/components/PasswordItem";
import { getUserLoginDetails } from "@/lib/dbUtils";

export default async function Dashboard() {
  const userLoginDetails = await getUserLoginDetails();
  console.log(userLoginDetails);
  return (
    <>
      {userLoginDetails &&
      userLoginDetails.length > 0 &&
      userLoginDetails[0]?.contents.length > 0 ? (
        userLoginDetails[0].contents.map((elem) => (
          <PasswordItem
            key={elem.url}
            name={elem.name}
            url={elem.url}
            image={elem.image}
            login={elem.login}
            password={elem.password}
          />
        ))
      ) : (
        <PasswordItem
          name="Preview"
          url="never-remember.vercel.app"
          image="g"
          login="example@mail.com"
          password="SuperSecretPassword"
        />
      )}
    </>
  );
}

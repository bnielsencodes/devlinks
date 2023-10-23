import Header from "../components/header/Header.js";
import AccountForm from "./account-form";

export default function ClientContainer(props: any) {


  return (
    <>
      <Header />
      <div className="flex items-center justify-center gap-4">
        <AccountForm session={props.session} />
      </div>
    </>
  );
}

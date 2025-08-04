import Layout from "../Layout";
import Signin from "../Sections/Authentication/Signin";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="QuickLocum - Sign In">
      <Signin />
    </Layout>
  );
};

export default SignIn;

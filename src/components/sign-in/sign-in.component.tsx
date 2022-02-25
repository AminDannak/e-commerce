import React, { FormEvent, useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "components/form-input/form-input.component";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>{t("i_already_have_account")}</h2>
      <span>{t("sign_in_with_email_password")}</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          value={email}
          label={t("email")}
          handleChange={setEmail}
          defaultValue={email}
        />
        <FormInput
          required
          type="password"
          label={t("password")}
          value={password}
          handleChange={setPassword}
        />
        <input type="submit" value={`${t("submit_form")}`} />
      </form>
    </div>
  );
};

export default SignIn;

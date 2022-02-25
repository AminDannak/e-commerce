import React, { FormEvent, useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "components/form-input/form-input.component";
import { useTranslation } from "react-i18next";
import CustomButton from "components/custom-button/custom-button.component";

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
      <h2>{t("i-already-have-account")}</h2>
      <span>{t("sign-in-with-email-password")}</span>
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
        <CustomButton type="submit">{t("sign-in")}</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;

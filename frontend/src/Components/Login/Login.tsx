import React, { FormEvent } from "react";
import { Label } from "@fluentui/react/lib/Label";
import { TextField } from "@fluentui/react/lib/TextField";
import { Checkbox } from "@fluentui/react/lib/Checkbox";
import HeaderNav from "../Header/HeaderNav";
import style from "./Login.module.css";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { ILoginProps, ILoginState } from "./Login.types";
import classNames from "classnames";
class Login extends React.Component<ILoginProps, ILoginState> {
  state = {
    isAdmin: false,
    userEmail: "",
    userPassword: "",
  };
  handleCheckboxChange = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    checked?: boolean
  ) => {
    if (typeof checked !== "undefined") {
      this.setState({ isAdmin: checked });
    }
  };
  handleEmailChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string | undefined
  ) => {
    if (typeof newValue !== "undefined") {
      this.setState({
        userEmail: newValue,
      });
    }
  };
  handlePasswordChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string | undefined
  ) => {
    if (typeof newValue !== "undefined") {
      this.setState({
        userPassword: newValue,
      });
    }
  };
  render(): React.ReactNode {
    const { isAdmin, userEmail, userPassword } = this.state;
    return (
      <div>
        <HeaderNav />
        <div className={style.container}>
          <div className={style.overlay}>
            <div className={style.loginContent}>
              <h2>Login</h2>
              {/* <div>Please enter your credentials to login</div> */}
              <div className={style.singleInputContainer}>
                <Label htmlFor="userEmail">Email</Label>
                <TextField
                  id="userEmail"
                  errorMessage=""
                  name="userEmail"
                  value={userEmail}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className={style.singleInputContainer}>
                <TextField
                  label="Password"
                  type="password"
                  canRevealPassword
                  revealPasswordAriaLabel="Show password"
                  id="userPassword"
                  onChange={this.handlePasswordChange}
                  name="userPassword"
                  value={userPassword}
                />
              </div>
              <div>
                <Checkbox
                  label="Check if you are an admin"
                  checked={isAdmin}
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div
                className={classNames(
                  style.singleInputContainer,
                  style.loginButtonEnd
                )}
              >
                <PrimaryButton
                  text="Login"
                  onClick={() => {}}
                  allowDisabledFocus
                  disabled={false}
                  checked={false}
                  style={{
                    width: "100%",
                    // backgroundColor: "#db2723",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

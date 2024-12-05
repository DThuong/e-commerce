import React, { useState, useCallback } from "react";
import { InputFields, Button } from "../../components";
import { apiRegister, apiLogin } from "../../apis/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { register } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    mobile: "",
  });
  const [Register, setRegister] = useState(false);
  const resetPayload = () => {
    setPayload({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
    });
  };
  const handleSubmit = useCallback(async () => {
    const { firstName, lastName, mobile, ...data } = payload;
    if (Register) {
      const res = await apiRegister(payload);
      if (res.success) {
        Swal.fire("Congratulation", res.msg, "success").then(() => {
          setRegister(false);
          resetPayload();
        });
      } else {
        Swal.fire("Oops", res.msg, "error");
      }
    } else {
      const res = await apiLogin(payload);
      if (res.success) {
        dispatch(
          register({
            isLoggedIn: true,
            token: res.accessToken,
            userData: res.userData,
          })
        );
        navigate(`/${path.HOME}`);
      } else Swal.fire("Oops", res.msg, "error");
    }
  }, [payload, Register]);
  return (
    <div className="w-screen h-screen relative">
      <img
        src="https://wallpapercave.com/wp/wp3537586.jpg"
        alt="background login"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 bottom-0 left-1/2 right-0 flex items-center justify-center">
        <div className="p-8 bg-white flex flex-col items-center rounded-md min-w-[500px]">
          <h1 className="text-[28px] font-semibold text-main mb-8">
            {Register ? "Register" : "Login"}
          </h1>
          {Register && (
            <div className="flex items-center gap-2">
              <InputFields
                value={payload.firstname}
                setValue={setPayload}
                nameKey="First Name"
              />
              <InputFields
                value={payload.lastname}
                setValue={setPayload}
                nameKey="Last Name"
              />
            </div>
          )}
          {Register && (
            <InputFields
              value={payload.mobile}
              setValue={setPayload}
              nameKey="mobile"
            />
          )}
          <InputFields
            value={payload.email}
            setValue={setPayload}
            nameKey="email"
          />
          <InputFields
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
            type="password"
          />
          <Button
            name={Register ? "Register" : "Login"}
            handleOnClick={handleSubmit}
          ></Button>
          <div className="flex items-center justify-between my-2 w-full text-sm">
            {!Register && (
              <span className="text-blue-500 hover:underline cursor-pointer">
                Forgot your account
              </span>
            )}
            {!Register && (
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => setRegister(true)}
              >
                Create account
              </span>
            )}
            {Register && (
              <span
                className="text-blue-500 hover:underline cursor-pointer w-full text-center"
                onClick={() => setRegister(false)}
              >
                Go Login
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

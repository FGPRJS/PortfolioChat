"use client"

import clsx from "clsx";
import React, { useEffect, useState } from "react"

export default function SignUp(){
  //#region EMAIL
  const [email, setEmail] = useState<string>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  useEffect(() => {
    if(!email) return;
    const regex = /^(?=.{4,})[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(email));
  }, [email]);
  //#endregion

  //#region NICKNAME
  const [nickname, setNickname] = useState<string>();
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);
  useEffect(() => {
    if(!nickname) return;
    const regex = /^[\p{L}\p{N}]{2,}$/u;
    setIsValidNickname(regex.test(nickname));
  }, [nickname]);
  //#endregion

  //#region PASSWORD
  const [password, setPassword] = useState<string>();
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  useEffect(() => {
    if(!password) return;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).+$/;
    setIsValidPassword(regex.test(password));
  }, [password]);
  //#endregion

  //#region CONFIRM PASSWORD
  const [confirmPassword,setConfirmPassword] = useState<string>();
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState<boolean>(true);
  useEffect(() => {
    if(!confirmPassword) return;
    setIsValidConfirmPassword(password === confirmPassword);
  }, [confirmPassword]);
  //#endregion


  function getInputClassNames(isValid : boolean){
    return clsx(
      'input',
      isValid ? 'input-ghost' : 'input-error'
    )
  }

  function getInputValidationClassNames(isValid : boolean){
    return clsx(
      'text-sm', 'my-2', 'text-error',
      isValid ? 'hidden' : ''
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset space-y-2">
              <h2 className="text-xl font-bold">Sign up</h2>
              <div className="space-y-2">
                <div>
                  <label className={getInputClassNames(isValidEmail)}>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(ev) => setEmail(ev.target.value)}
                      required/>
                  </label>
                  <p className={getInputValidationClassNames(isValidEmail)}>
                    Write valid email
                  </p>
                </div>
                <div>
                  <label className={getInputClassNames(isValidNickname)}>
                    <input
                      type="text"
                      placeholder="Nickname"
                      onChange={(ev) => setNickname(ev.target.value)}
                      required/>
                  </label>
                  <p className={getInputValidationClassNames(isValidNickname)}>
                    Write valid nickname<br/>
                    - No spaces allowed<br/>
                    - Write 2 characters at least<br/>
                  </p>
                </div>
                <div>
                  <label className={getInputClassNames(isValidPassword)}>
                    <input 
                      type="password"
                      placeholder="Password"
                      onChange={(ev) => setPassword(ev.target.value)}
                      required/>
                  </label>
                  <p className={getInputValidationClassNames(isValidPassword)}>
                    Write valid password <br/>
                    - Write 8 characters at least <br/>
                    - Write 1 upper-case characters at least <br/>
                    - Write 1 lower-case characters at least <br/>
                    - Write 1 Special characters(!$...) at least <br/>
                  </p>
                </div>
                <div>
                  <label className={getInputClassNames(isValidConfirmPassword)}>
                    <input 
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(ev) => setConfirmPassword(ev.target.value)}
                      required/>
                  </label>
                  <p className={getInputValidationClassNames(isValidConfirmPassword)}>
                    Write same password
                  </p>
                </div>
              </div>
              <button className="btn btn-primary w-full">Sign up</button>
            </fieldset>
          </div>
        </div>
      </main>
    </div>
  )
}
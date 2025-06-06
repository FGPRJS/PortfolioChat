"use client"

import clsx from "clsx";
import React, { useEffect, useState } from "react"

export default function SignUp(){
  const [email, setEmail] = useState<string>();
  const [emailClassNames, setEmailClassNames] = useState<string>(getInputClassNames(true));
  useEffect(() => {
    if(!email) return;
    const regex = /^(?=.{4,})[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    setEmailClassNames(getInputClassNames(isValid));
  }, [email]);

  const [password, setPassword] = useState<string>();
  const [passwordClassNames, setpasswordClassNames] = useState<string>(getInputClassNames(true));
  useEffect(() => {
    if(!password) return;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).+$/;
    const isValid =  regex.test(password);
    setpasswordClassNames(getInputClassNames(isValid));
  }, [password]);

  const [confirmPassword,setConfirmPassword] = useState<string>();
  const [confirmPasswordClassNames, setconfirmPasswordClassNames] = useState<string>(getInputClassNames(true));
  useEffect(() => {
    if(!confirmPassword) return;
    const isValid = password === confirmPassword;
    setconfirmPasswordClassNames(getInputClassNames(isValid));
  }, [confirmPassword]);


  function getInputClassNames(isValid : boolean){
    return clsx(
      'input',
      isValid ? 'input-ghost' : 'input-error'
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
                  <label className={emailClassNames}>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(ev) => setEmail(ev.target.value)}
                      required/>
                  </label>
                  <p className="hidden">
                    Write valid email
                  </p>
                </div>
                <div>
                  <label className={passwordClassNames}>
                    <input 
                      type="password"
                      placeholder="Password"
                      onChange={(ev) => setPassword(ev.target.value)}
                      required/>
                  </label>
                  <p className="hidden">
                    Write valid password
                  </p>
                </div>
                <div>
                  <label className={confirmPasswordClassNames}>
                    <input 
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(ev) => setConfirmPassword(ev.target.value)}
                      required/>
                  </label>
                  <p className="hidden">
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
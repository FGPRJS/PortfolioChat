export default function SignIn() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset space-y-2">
              <h2 className="text-xl font-bold">Sign in</h2>
              <div className="space-y-2">
                <div>
                  <label className="input input-ghost validator">
                    <input
                      type="email"
                      placeholder="Email"
                      required/>
                  </label>
                  <p className="validator-hint hidden">Enter valid email address</p>
                </div>
                <div>
                  <label className="input input-ghost validator">
                    <input 
                      type="password"
                      placeholder="Password"
                      required/>
                  </label>
                  <p className="validator-hint hidden">
                    Write valid password
                  </p>
                </div>
              </div>
              <button className="btn btn-primary w-full">Sign in</button>
              <div className="flex flex-col w-full items-center">
                <p>No Account?</p>
                <a href="/auth/signup"
                  className="link link-primary text-base">Sign up</a>
              </div>
            </fieldset>
          </div>
        </div>
      </main>
    </div>
  );
}

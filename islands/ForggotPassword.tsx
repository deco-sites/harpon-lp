import { FunctionalComponent } from "preact";
import { useContext } from "preact/hooks";
import { AuthContext } from "deco-sites/harpon-lp/context/AuthProvider.tsx"
import LandingPageHeader from "deco-sites/harpon-lp/components/landingpage/Header.tsx";
import LandingPageFooter from "deco-sites/harpon-lp/components/landingpage/Footer.tsx";


export const ForggotPassword: FunctionalComponent = () => {
    const {toggleForgotPasswordMode} = useContext(AuthContext)

    const handleSendEmail = () => {
        window.location.href = '/entrar';
    }

    return (
        <>
        {/* <div>
            <LandingPageHeader />
        </div> */}
      <div>
      <form
          class="w-[500px] mx-auto border border-solid border-[#29323A] p-5 mt-[133px] mb-[208px]"
          method="POST"
        >
            <div class="pb-8 text-center">
                <span class="text-2xl font-semibold">Recuperar senha</span>
            </div>
            <div>
            <label
              class="block font-medium text-sm text-gray-700"
              for="email"
              value="Email"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#E9F408]"
            />
          </div>
          <button 
          onClick={handleSendEmail}
          class="mt-5 inline-flex items-center px-4 py-2 bg-[#E9F408] border border-transparent rounded-md font-semibold text-xs text-[#29323A] uppercase tracking-widest focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
              Enviar
            </button>
        </form>
      </div>
      {/* <div>
        <LandingPageFooter />
      </div> */}
        </>
    )

}

export default ForggotPassword;
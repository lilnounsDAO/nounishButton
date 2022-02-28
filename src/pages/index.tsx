import { useCallback, useEffect, useState } from "react"

import Fountain from "../components/nounishButton/NounishGlassesPop"

export const Home = (props): JSX.Element => {
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    new Fountain()
  }, [])

  const buttonAction = useCallback(async () => {
    setAnimate(true)
    //do something
  }, [])

  return (
    <div className="flex self-center justify-center origin-center py-80">
      <div className="flex-row">
        <div className="w-52" id={"nounish_button"}>
          <button
            className="flex items-center justify-center w-full h-full p-2 px-10 text-lg font-semibold text-white rounded-lg bg-[#212529] hover:shadow-xl space-x-2"
            disabled={false}
            onClick={() => {
              buttonAction()
            }}
          >
            "⌐◨–◨"
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

import { useCallback, useEffect, useState } from "react"

import Fountain from "./NounishGlassesPop"

export const Home: React.FC<{
  buttonId: string | number
  buttonAction: () => void
}> = (props) => {
  let { buttonId, buttonAction } = props
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    new Fountain({ buttonId: buttonId.toString() })
  }, [])

  const animation = useCallback(async () => {
    setAnimate(true)
    //do something
    buttonAction()
  }, [])

  return (
    <div className="flex self-center justify-center origin-center py-80">
      <div className="flex">
        <div className="w-52 nounish_button" id={buttonId.toString()}>
          <button
            className="flex items-center justify-center w-full h-full p-2 px-10 text-lg font-semibold text-white rounded-lg bg-[#212529] hover:shadow-xl space-x-2"
            disabled={false}
            onClick={() => {
              animation()
            }}
          >
            ⌐◨–◨
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

import Fountain from "@components/NounishButton/NounishGlassesPop"

import { useCallback, useEffect, useState } from "react"

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
    <div className="flex self-center origin-center justify-center py-80">
      <div className="flex-row">
        <div className="w-52" id={"nounish_button"}>
          <button
            disabled={false}
            onClick={() => {
              buttonAction()
            }}
            title={"nounish"}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

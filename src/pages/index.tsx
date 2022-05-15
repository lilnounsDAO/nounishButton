import NounishButton from "../components/nounishButton/NounishButton"

export const Home = (props): JSX.Element => {
  const action = () => {
    //on click action to pass to button
  }

  return (
    <div className="flex self-center justify-center origin-center py-80">
      <div className="flex">
        <NounishButton buttonId={"one"} buttonAction={action} />
        <NounishButton buttonId={"two"} buttonAction={action} />
      </div>
    </div>
  )
}

export default Home

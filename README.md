# Nounish Button ⌐◨–◨

Customized fork of Rainbow's [Rainbow-Button](https://github.com/rainbow-me/rainbow-button)

[Demo](https://nounish-button.vercel.app/)
![Gif](https://s10.gifyu.com/images/nounishbutton_demoa83883b237f2cbd3.md.gif)


### How to use

`` import Fountain from "../components/nounishButton/NounishGlassesPop"``

```
const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    new Fountain()
  }, [])
```

```
  const buttonAction = useCallback(async () => {
    setAnimate(true)
    //do something
  }, [])
```

```
  <button
    className="flex items-center justify-center w-full h-full p-2 px-10 text-lg font-semibold text-white rounded-lg bg-[#212529] hover:shadow-xl space-x-2"
        disabled={false}
        onClick={() => {
            buttonAction()
            }}
        >
        nounish
    </button>
```

### Customizability - NounishGlassesPop.tsx

1. To add your own selection of glasses, insert string array of ``img`` hosted links inside ``Glasses``
```
const Glasses = {
 lostNouns: [...],
 lilNouns: [...],
 nouns: [...],
 
 // add new array of glasses here
 nounishGlasses: [
 '<img src="https://i.ibb.co/QbgtdVH/glasses1.png" width="78px" height="45px">',
 '<img src="https://i.ibb.co/9cq05Kb/glasses2.png" width="36px" height="21px">',
 ]
}

``` 
2. Make sure that ``this.variants`` points to your newly created ⌐◨–◨ glasses array
```
  constructor() {
    ...
    // ["⌐◨–◨"]
    // before this.variants = Glasses.lilNouns
    
    // after
    this.variants = Glasses.nounishGlasses
    
    ...
  }
    
```

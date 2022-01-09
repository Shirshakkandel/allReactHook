import { useLayoutEffect, useEffect, useRef } from 'react'

function LayoutEffectTutorial() {
  const inputRef = useRef(null)
  //useLayoutEffect will run before the useEffect
  useLayoutEffect(() => {
    alert(inputRef.current.value) //will print shirshak
  }, [])
  useEffect(() => {
    inputRef.current.value = 'HELLO'
  }, [])

  return (
    <div className="App">
      <input ref={inputRef} value="Shirshak" style={{ width: 400, height: 60 }} />
    </div>
  )
}

export default LayoutEffectTutorial

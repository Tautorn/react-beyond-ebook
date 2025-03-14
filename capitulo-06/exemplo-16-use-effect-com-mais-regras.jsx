useEffect(() => {
  if (hour > 5 && hour < 19) {
    setIsActive(true);
    setEnergy(energy + KWH)
  } else {
    setIsActive(false)
  }

  if (hour === 24) {
    setEnergy(0)
  }
}, [hour])
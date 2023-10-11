export function bindReactiveState({ name, defaultValue }) {
  if (typeof defaultValue !== "object") {
    throw new Error(" object가 아닙니다");
  }
  let value = defaultValue;

  const getter = () => {
    return value;
  };
  const setter = (newValue) => {
    const oldkeys = Object.keys(value);
    const newkeys = Object.keys(newValue);
    const removedKeys = [];
    const chagendkeys = [];

    newkeys.forEach((key) => {
      if (value[key] !== newValue[key]) {
        chagendkeys.push(key);
      }
    });
    newkeys.forEach((key) => {
      if (!oldkeys.includes(key)) {
        chagendkeys.push(key);
      }
    });
    //changedkeys
    const uniqueChagendKeys = Array.from(new Set(chagendkeys));

    uniqueChagendKeys.forEach((key) => {
      const elements = Array.from(
        document.querySelectorAll(
          `[data-subscribe-to='${name}'][data-subscription-path='${key}']`
        )
      );
      console.log(elements);
      elements.forEach((element) => {
        if (element.tagName == "INPUT") {
          element.value = newValue[key];
        } else {
          element.innerHTML = newValue[key];
        }
      });
    });
    value = newValue;
  };

  return [getter, setter];
}

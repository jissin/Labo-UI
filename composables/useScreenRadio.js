export default function useScreenRadio() {
  const screenRadio = ref(null);

  const debouncedUpdateScreenRadio = useDebounceFn(updateScreenRadio, 100);

  function updateScreenRadio() {
    screenRadio.value = window.innerWidth / window.innerHeight;
    console.log(screenRadio.value);
  }

  onMounted(() => {
    updateScreenRadio();
    window.addEventListener("resize", debouncedUpdateScreenRadio);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", debouncedUpdateScreenRadio);
  });

  return screenRadio;
}

export default function useScreenRadio(): { screenRadio: Ref<number> } {
  const screenRadio = ref<number>(1);

  const debouncedUpdateScreenRadio = useDebounceFn(updateScreenRadio, 100);

  function updateScreenRadio() {
    screenRadio.value = window.innerWidth / window.innerHeight;
  }

  onMounted(() => {
    updateScreenRadio();
    window.addEventListener("resize", debouncedUpdateScreenRadio);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", debouncedUpdateScreenRadio);
  });

  return { screenRadio };
}

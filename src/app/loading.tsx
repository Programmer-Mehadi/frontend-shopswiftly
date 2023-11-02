import SpinLoader from "@/components/Sections/Loader/SpinLoader"

const Loading = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <SpinLoader />
    </section>
  )
}

export default Loading

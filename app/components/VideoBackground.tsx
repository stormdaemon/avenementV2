export default function VideoBackground() {
  return (
    <>
      <video
        className="fixed inset-0 w-screen h-screen object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/13829310_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 w-screen h-screen bg-black/40 -z-10" />
    </>
  );
}
